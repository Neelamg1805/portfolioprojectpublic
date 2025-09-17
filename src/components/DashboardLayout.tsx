import { Outlet } from 'react-router-dom';
import DashboardNav from './DashboardNav';

export default function DashboardLayout() {
  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardNav />
      <main className="container mx-auto px-4 py-8">
         <Outlet />
      </main>
    </div>
  );
}
