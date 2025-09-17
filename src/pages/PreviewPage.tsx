import { useSelector } from 'react-redux'
import { useSearchParams } from 'react-router-dom'
import { RootState } from '../store/index.ts'
import SimpleTemplate from '../components/templates/SimpleTemplate.tsx'
import MinimalTemplate from '../components/templates/MinimalTemplate.tsx'
import ProfessionalTemplate from '../components/templates/ProfessionalTemplate.tsx'
import FrontendTemplate from '../components/templates/FrontendTemplate.tsx'
import BackendTemplate from '../components/templates/BackendTemplate.tsx'
import DevOpsTemplate from '../components/templates/DevOpsTemplate.tsx'
import AIMLTemplate from '../components/templates/AIMLTemplate.tsx'
import MobileAppTemplate from '../components/templates/MobileAppTemplate.tsx'
import CreativeTemplate from '../components/templates/CreativeTemplate.tsx'

export default function PreviewPage() {
  const [searchParams] = useSearchParams();
  const templateFromUrl = searchParams.get('template');
  const { selectedTemplate, userData, projects, experience, education, skills, designOptions } = useSelector(
    (state: RootState) => state.portfolio
  );
  
  const currentTemplate = templateFromUrl || selectedTemplate;

  const portfolioData = {
    selectedTemplate: currentTemplate,
    userData,
    projects,
    experience,
    education,
    skills,
    designOptions,
  };

  const renderTemplate = () => {
    switch (currentTemplate) {
      case 'simple':
        return <SimpleTemplate data={portfolioData} />;
      case 'minimal':
        return <MinimalTemplate data={portfolioData} />;
      case 'professional':
        return <ProfessionalTemplate data={portfolioData} />;
      case 'frontend':
        return <FrontendTemplate data={portfolioData} />;
      case 'backend':
        return <BackendTemplate data={portfolioData} />;
      case 'devops':
        return <DevOpsTemplate data={portfolioData} />;
      case 'aiml':
        return <AIMLTemplate data={portfolioData} />;
      case 'mobile':
        return <MobileAppTemplate data={portfolioData} />;
      case 'creative':
        return <CreativeTemplate data={portfolioData} />;
      default:
        return <SimpleTemplate data={portfolioData} />;
    }
  };

  return (
    <div className="w-full">
      {renderTemplate()}
    </div>
  )
}
