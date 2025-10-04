import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { templates } from "../lib/templates.ts";
import TemplateCard from "./TemplateCard.tsx";
import { useAuth } from "../contexts/AuthContext";

export default function TemplateSelector() {
  const navigate = useNavigate();
  const { currentUser } = useAuth();
  const [selectedTemplate, setSelectedTemplate] = useState("professional");

  const handleContinue = () => {
    if (currentUser) {
      navigate(`/dashboard/editor?template=${selectedTemplate}`);
    } else {
      navigate('/login', { state: { from: { pathname: `/dashboard/editor?template=${selectedTemplate}` } } });
    }
  };

  const handlePreview = () => {
    navigate(`/preview?template=${selectedTemplate}`);
  };

  const handleTemplateSelect = (templateId: string) => {
    setSelectedTemplate(templateId);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <header className="text-center py-12">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Portfolio Builder
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Create stunning portfolio websites with our customizable templates.
            Choose from professional designs and customize everything to match your style.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={handlePreview}
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
            >
              Preview Templates
            </button>
            <button
              onClick={handleContinue}
              className="px-8 py-4 border border-purple-400 text-purple-400 rounded-full font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300"
            >
              Start Building
            </button>
          </div>
          <div className="mt-4 text-center">
            <p className="text-gray-300 text-sm">
              💡 <strong>Tip:</strong> You can preview all templates without logging in, but you'll need to create an account to download source code and customize your portfolio.
            </p>
          </div>
        </header>
        
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl shadow-2xl p-8 border border-white/20">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Choose Your Template</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            {templates.map((template) => (
              <TemplateCard
                key={template.id}
                template={template}
                isSelected={selectedTemplate === template.id}
                onSelect={() => handleTemplateSelect(template.id)}
              />
            ))}
          </div>
          
          <div className="text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleContinue}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Customize This Template
              </button>
              <button
                onClick={handlePreview}
                className="px-8 py-4 border border-white/30 text-white rounded-full font-semibold hover:bg-white/10 transition-all duration-300"
              >
                Live Preview
              </button>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center text-white">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🎨</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Customizable Design</h3>
            <p className="text-gray-300">Change colors, fonts, layouts, and more to match your personal brand</p>
          </div>
          <div className="text-center text-white">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📱</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Mobile Responsive</h3>
            <p className="text-gray-300">All templates are fully responsive and look great on any device</p>
          </div>
          <div className="text-center text-white">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">⚡</span>
            </div>
            <h3 className="text-xl font-bold mb-2">Easy to Use</h3>
            <p className="text-gray-300">No coding required - just fill in your information and customize</p>
          </div>
        </div>
      </div>
    </main>
  );
}
