import {
    BrowserRouter as Router,
    Routes,
    Route
  } from "react-router-dom";


  //Imports Admin;
   import DashBoard from "./pages/admin/dashboard/index";
   import Produto from "./pages/admin/produtos/index";
   import Usuario from "./pages/admin/usuarios/index";
   import UsuarioCadastrar from "./pages/admin/usuarios/login&cadastro/usuarioCadastrar";
//   import UsuarioEditar from "./pages/adimin/usuarios/usuario-editar";

  //Imports Client;
  import Home from "./pages/home";

 export default function Rotas(){
   return(
       <Router>
         <Routes>
           {/* ROTA CLIENT */}
           <Route path="/" element={<Home/>} />

           {/* ROTA ADMIN */}
           <Route path="/admin" element={<DashBoard />} />
           <Route path="/admin/produtos" element={<Produto />} />
           <Route path="/admin/usuario" element={<Usuario />} />
           <Route path="/admin/usuario/cadastro" element={<UsuarioCadastrar />} />
           {/* <Route path="/admin/usuario/editar:idUsuario" element={<UsuarioEditar />} /> */}
         </Routes>
       </Router>
     );
 };