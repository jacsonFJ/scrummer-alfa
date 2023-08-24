import { BrowserRouter, Navigate, Route, Routes, redirect } from 'react-router-dom';

import Signup from './Pages/Signup';
import './styles.css';
import Login from './Pages/Login';
import ProjectsList from './Pages/Project/ProjectsList';
import ProjectDetail from './Pages/Project/ProjectDetail';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to={'/login'} />} />
        <Route path="/login" element={<Login />} />
        <Route path='/cadastrese' element={<Signup />} />
        <Route path="/projetos" element={<ProjectsList />} />
        <Route path="/projetos/detalhes" element={<ProjectDetail />} />
      </Routes>
    </BrowserRouter>
  );
}
