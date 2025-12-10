import './App.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Perfil from './pages/Perfil';
import Cadastro from './pages/Cadastro';
import NovoArtigo from './pages/NovoArtigo';
import EditarArtigo from './pages/EditarArtigo';
import { Route, Routes } from 'react-router-dom';
import OutroPerfil from './pages/OutroPerfil';
import Artigo from './pages/Artigo';
import TodosArtigos from "./pages/TodosArtigos";

export default function App() {

  return (
    <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/cadastro" element={<Cadastro/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/perfil" element={<Perfil/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/artigo/novo" element={<NovoArtigo/>}/>
      <Route path="artigo/:id" element={<Artigo/>}/>
      <Route path="/artigo/editar/:id" element={<EditarArtigo/>}/>
      <Route path="/autor/:id" element={<OutroPerfil/>}/>
      <Route path="/artigo/" element={<TodosArtigos/>}/>
    </Routes>
  );
}