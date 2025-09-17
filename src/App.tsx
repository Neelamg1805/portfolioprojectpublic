import { Routes, Route } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext'
import TemplateSelector from './components/TemplateSelector.tsx'
import DashboardLayout from './components/DashboardLayout.tsx'
import TemplatesPage from './pages/TemplatesPage.tsx'
import EditorPage from './pages/EditorPage.tsx'
import PreviewPage from './pages/PreviewPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import ProtectedRoute from './components/ProtectedRoute'

function App() {
  return (
    <AuthProvider>
      <div className="min-h-screen">
        <Routes>
          <Route path="/" element={<TemplateSelector />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/dashboard" element={
            <ProtectedRoute>
              <DashboardLayout />
            </ProtectedRoute>
          }>
            <Route path="templates" element={<TemplatesPage />} />
            <Route path="editor" element={<EditorPage />} />
          </Route>
          <Route path="/preview" element={<PreviewPage />} />
        </Routes>
      </div>
    </AuthProvider>
  )
}

export default App
