import { Template } from "../types/portfolio.ts";

interface TemplateCardProps {
  template: Template;
  isSelected: boolean;
  onSelect: () => void;
}

export default function TemplateCard({ template, isSelected, onSelect }: TemplateCardProps) {
  const getTemplatePreview = (templateId: string) => {
    switch (templateId) {
      case 'simple':
        return (
          <div className="h-48 bg-white flex items-center justify-center relative overflow-hidden border-2 border-gray-200">
            <div className="text-center">
              <div className="text-gray-900 text-lg font-bold mb-2">John Doe</div>
              <div className="text-gray-600 text-sm">Web Developer</div>
              <div className="w-16 h-1 bg-blue-500 mx-auto mt-2"></div>
              <div className="flex justify-center space-x-2 mt-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
              </div>
            </div>
          </div>
        );
      case 'minimal':
        return (
          <div className="h-48 bg-white flex items-center justify-center relative overflow-hidden border">
            <div className="text-center">
              <div className="text-gray-900 text-lg font-bold mb-2">John Doe</div>
              <div className="text-gray-600 text-sm">Developer</div>
              <div className="w-16 h-px bg-gray-400 mx-auto mt-2"></div>
            </div>
          </div>
        );
      case 'professional':
        return (
          <div className="h-48 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20"></div>
            <div className="text-center z-10">
              <div className="text-white text-lg font-bold mb-2">NEELAM GAYAKWAD</div>
              <div className="text-purple-300 text-sm">Software Engineer</div>
              <div className="flex justify-center space-x-2 mt-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
              </div>
            </div>
          </div>
        );
            case 'frontend':
              return (
                <div className="h-48 bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center relative overflow-hidden">
                  <div className="text-center">
                    <div className="text-blue-600 text-lg font-bold mb-2">FRONTEND</div>
                    <div className="text-blue-500 text-sm">UI/UX Developer</div>
                    <div className="flex justify-center space-x-2 mt-2">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    </div>
                    <div className="text-xs text-gray-600 mt-2">💻 Web Development</div>
                  </div>
                </div>
              );
            case 'backend':
              return (
                <div className="h-48 bg-gradient-to-br from-gray-900 via-green-900 to-gray-900 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-blue-500/20"></div>
                  <div className="text-center z-10">
                    <div className="text-white text-lg font-bold mb-2">BACKEND</div>
                    <div className="text-green-300 text-sm">Server & APIs</div>
                    <div className="flex justify-center space-x-2 mt-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                    </div>
                    <div className="text-xs text-gray-300 mt-2">⚙️ Server Development</div>
                  </div>
                </div>
              );
            case 'devops':
              return (
                <div className="h-48 bg-gradient-to-br from-gray-900 via-orange-900 to-gray-900 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-red-500/20"></div>
                  <div className="text-center z-10">
                    <div className="text-white text-lg font-bold mb-2">DEVOPS</div>
                    <div className="text-orange-300 text-sm">Infrastructure & Automation</div>
                    <div className="flex justify-center space-x-2 mt-2">
                      <div className="w-2 h-2 bg-orange-400 rounded-full"></div>
                      <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    </div>
                    <div className="text-xs text-gray-300 mt-2">🚀 Cloud & CI/CD</div>
                  </div>
                </div>
              );
            case 'aiml':
              return (
                <div className="h-48 bg-gradient-to-br from-gray-900 via-purple-900 to-pink-900 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20"></div>
                  <div className="text-center z-10">
                    <div className="text-white text-lg font-bold mb-2">AI/ML</div>
                    <div className="text-purple-300 text-sm">Machine Learning</div>
                    <div className="flex justify-center space-x-2 mt-2">
                      <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    </div>
                    <div className="text-xs text-gray-300 mt-2">🧠 Artificial Intelligence</div>
                  </div>
                </div>
              );
            case 'mobile':
              return (
                <div className="h-48 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20"></div>
                  <div className="text-center z-10">
                    <div className="text-white text-lg font-bold mb-2">MOBILE DEV</div>
                    <div className="text-purple-300 text-sm">React Native & Flutter</div>
                    <div className="flex justify-center space-x-2 mt-2">
                      <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                      <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    </div>
                    <div className="text-xs text-gray-300 mt-2">📱 Mobile Apps</div>
                  </div>
                </div>
              );
            case 'creative':
              return (
                <div className="h-48 bg-gradient-to-br from-orange-100 via-red-50 to-pink-100 flex items-center justify-center relative overflow-hidden">
                  <div className="text-center">
                    <div className="text-orange-700 text-lg font-bold mb-2">John Doe</div>
                    <div className="text-orange-600 text-sm">Creative Developer</div>
                    <div className="flex justify-center space-x-1 mt-2">
                      <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    </div>
                  </div>
                </div>
              );
      default:
        return (
          <div className="h-48 bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center">
            <span className="text-white text-xl font-bold">{template.name}</span>
          </div>
        );
    }
  };

  return (
    <div
      className={`border-2 rounded-xl overflow-hidden cursor-pointer transition-all transform hover:scale-105 ${
        isSelected 
          ? "border-purple-500 ring-2 ring-purple-200 shadow-lg" 
          : "border-white/20 hover:border-white/40"
      }`}
      onClick={onSelect}
    >
      {getTemplatePreview(template.id)}
      <div className="p-4 bg-white/10 backdrop-blur-sm">
        <h3 className="font-bold text-lg mb-1 text-white">{template.name}</h3>
        <p className="text-gray-300 text-sm mb-3">{template.description}</p>
        <div className="flex justify-between items-center">
          <span className={`text-xs px-3 py-1 rounded-full ${
            template.difficulty === 'simple' ? 'bg-green-500/20 text-green-300' :
            template.difficulty === 'intermediate' ? 'bg-yellow-500/20 text-yellow-300' :
            'bg-red-500/20 text-red-300'
          }`}>
            {template.difficulty}
          </span>
          {isSelected && (
            <span className="text-xs text-purple-300 font-medium flex items-center">
              <span className="w-2 h-2 bg-purple-400 rounded-full mr-1"></span>
              Selected
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
