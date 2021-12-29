import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate
  } from "react-router-dom";



  //Imports Admin;
   import DashBoard from "./pages/admin/dashboard/index";
   import Produto from "./pages/admin/produtos/index";
   import Usuario from "./pages/admin/usuarios/index";
   import UsuarioCadastrar from "./pages/admin/usuarios/login&cadastro/usuarioCadastrar";
   import Forgot from "./pages/admin/usuarios/forgot";
   import NotFound from "./componentes/notFound/index";
   import PrivateRoute from "./server/wAuth"

  //Imports Client;
  import Home from "./pages/home";

  
 export default function Rotas(){
   return(
       <Router>
         <Routes>
           {/* ROTA CLIENT */}
           <Route path="/" element={<UsuarioCadastrar />} />

           {/* ROTA ADMIN */}
           <Route path="/admin/home" element={<PrivateRoute>
             <Home />
           </PrivateRoute>} />
           <Route path="/admin/dashboard" element={<DashBoard />} />
           <Route path="/admin/produtos" element={<Produto />} />
           <Route path="/admin/usuario" element={<Usuario />} />
           <Route path="/admin/trocarSenha" element={<Forgot />} />
           <Route path="*" element={<NotFound />} />
           <Route path="/usuarios" element={<h1>teste</h1>} />
         </Routes>
       </Router>
     );
 };