import { Link, useLocation, useNavigate } from "react-router-dom";
import { Button } from "./ui/button.tsx";
import { Download, Settings, LogOut, User } from "lucide-react";
import { useSelector } from "react-redux";
import { RootState } from "../store/index.ts";
import { downloadPortfolioSource } from "../lib/download.ts";
import { useAuth } from "../contexts/AuthContext";

export default function DashboardNav() {
  const location = useLocation();
  const navigate = useNavigate();
  const portfolioState = useSelector((state: RootState) => state.portfolio);
  const { currentUser, logout } = useAuth();

  const handleDownload = async () => {
    if (!currentUser) {
      // Redirect to login if user is not authenticated
      navigate('/login', { state: { from: { pathname: location.pathname } } });
      return;
    }

    try {
      await downloadPortfolioSource(portfolioState);
      alert('Portfolio downloaded successfully! Check your downloads folder.');
    } catch (error) {
      console.error('Download failed:', error);
      alert('Download failed. Please try again.');
    }
  };

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return (
    <nav className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            <Link to="/" className="text-xl font-bold text-blue-600">
              Portfolio neelam Builder
            </Link>
            <div className="hidden md:flex space-x-4">
              <Link
                to="/dashboard/templates"
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  location.pathname === "/dashboard/templates"
                    ? "bg-blue-100 text-blue-700"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Templates
              </Link>
              <Link
                to="/dashboard/editor"
                className={`px-3 py-2 rounded-md text-sm font-medium ${
                  location.pathname === "/dashboard/editor"
                    ? "bg-blue-100 text-blue-700"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                Editor
              </Link>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="outline" size="sm" onClick={handleDownload}>
              <Download className="mr-2 h-4 w-4" />
              Download Source Code
            </Button>
            <div className="flex items-center space-x-2">
              <div className="flex items-center space-x-2 text-sm text-gray-600">
                <User className="h-4 w-4" />
                <span>{currentUser?.displayName || currentUser?.email}</span>
              </div>
              <Button variant="outline" size="sm" onClick={handleLogout}>
                <LogOut className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
