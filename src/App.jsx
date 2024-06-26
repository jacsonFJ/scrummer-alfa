import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import ReactModal from 'react-modal';
import { registerLocale, setDefaultLocale } from  "react-datepicker";
import ptbr from 'date-fns/locale/pt-BR';
import "react-datepicker/dist/react-datepicker.css";

import Signup from './Pages/Signup';
import './styles.css';
import Login from './Pages/Login';
import ProjectDetail from './Pages/Project/ProjectDetail';
import ProjectUsers from './Pages/Project/ProjectUsers';
import ProductBacklog from './Pages/Project/ProductBacklog';
import SprintBacklog from './Pages/Project/SprintBacklog';
import IncrementOnSoftware from './Pages/Project/IncrementOnSoftware';
import BacklogItem from './Pages/Project/BacklogItem';
import SprintDetail from './Pages/Project/SprintDetail';
import Meeting from './Pages/Project/Meeting';
import ForgotPassword from './Pages/ForgotPassword';
import ProjectListInProgress from './Pages/ProjectsList/ProjectListInProgress';
import ProjectListArchived from './Pages/ProjectsList/ProjectListArchived';
import ProjectListMine from './Pages/ProjectsList/ProjectListMine';

ReactModal.setAppElement('#root');
registerLocale('pt-BR', ptbr);
setDefaultLocale('pt-BR');

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to={'/login'} />} />
        <Route path="/login" element={<Login />} />
        <Route path='/cadastrese' element={<Signup />} />
        <Route path='/esqueci-minha-senha' element={<ForgotPassword />} />
        <Route path="/projetos" element={<ProjectListInProgress />} />
        <Route path="/projetos-arquivados" element={<ProjectListArchived />} />
        <Route path="/meus-projetos" element={<ProjectListMine />} />
        <Route path="/projetos/:id/detalhes" element={<ProjectDetail />} />
        <Route path='/projetos/:id/usuarios' element={<ProjectUsers />} />
        <Route path='/projetos/:id/product-backlog' element={<ProductBacklog />} />
        <Route path='/projetos/:id/sprint-backlog' element={<SprintBacklog />} />
        <Route path='/projetos/:id/increment-on-software' element={<IncrementOnSoftware />} />
        <Route path='/projetos/:id/item/:itemId' element={<BacklogItem />} />
        <Route path='/projetos/:id/sprint/:sprintId' element={<SprintDetail />} />
        <Route path='/projetos/:id/reuniao/:meetingId' element={<Meeting />} />
      </Routes>
    </BrowserRouter>
  );
}
