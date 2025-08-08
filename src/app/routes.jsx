import { Route, Routes } from 'react-router-dom'
import Home from '@/pages/Home'
import ProjectsPage from '@/pages/ProjectsPage'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<ProjectsPage />} />
    </Routes>
  )
}
