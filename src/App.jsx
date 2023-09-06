import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import Signup from './Pages/Signup';
import './styles.css';
import Login from './Pages/Login';
import ProjectsList from './Pages/ProjectsList';
import ProjectDetail from './Pages/Project/ProjectDetail';
import ProjectUsers from './Pages/Project/ProjectUsers';
import ProductBacklog from './Pages/Project/ProductBacklog';
import SprintBacklog from './Pages/Project/SprintBacklog';
import IncrementOnSoftware from './Pages/Project/IncrementOnSoftware';
import BacklogItem from './Pages/Project/BacklogItem';
import SprintDetail from './Pages/Project/SprintDetail';
import Meeting from './Pages/Project/Meeting';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to={'/login'} />} />
        <Route path="/login" element={<Login />} />
        <Route path='/cadastrese' element={<Signup />} />
        <Route path="/projetos" element={<ProjectsList />} />
        <Route path="/projetos/detalhes" element={<ProjectDetail />} />
        <Route path='/projetos/usuarios' element={<ProjectUsers />} />
        <Route path='/projetos/product-backlog' element={<ProductBacklog />} />
        <Route path='/projetos/sprint-backlog' element={<SprintBacklog />} />
        <Route path='/projetos/increment-on-software' element={<IncrementOnSoftware />} />
        <Route path='/projetos/item' element={<BacklogItem />} />
        <Route path='/projetos/sprint' element={<SprintDetail />} />
        <Route path='/projetos/reunioes' element={<Meeting />} />
      </Routes>
    </BrowserRouter>
  );
}
