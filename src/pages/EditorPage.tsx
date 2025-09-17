import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setSelectedTemplate } from '../store/portfolioSlice';
import PortfolioEditor from '../components/editor/PortfolioEditor.tsx'

export default function EditorPage() {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const templateFromUrl = searchParams.get('template');

  useEffect(() => {
    if (templateFromUrl) {
      dispatch(setSelectedTemplate(templateFromUrl));
    }
  }, [dispatch, templateFromUrl]);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">Customize Your Portfolio</h1>
      <PortfolioEditor />
    </div>
  )
}
