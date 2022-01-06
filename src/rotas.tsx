import {
    BrowserRouter as Router,
    Routes,
    Route,
  } from "react-router-dom";



  //Imports Admin;
   import DashBoard from "./pages/admin/dashboard/index";
   import Produto from "./pages/admin/produtos/index";
   import Usuario from "./pages/admin/usuarios/index";
   import UsuarioCadastrar from "./pages/admin/usuarios/login&cadastro/usuarioCadastrar";
   import Forgot from "./pages/admin/usuarios/forgot/forgot";
   import NewSenha from "./pages/admin/usuarios/novaSenha/index";
   import NotFound from "./componentes/notFound/index";
   import Private from "./server/wAuth"

  //Imports Client;
  import Home from "./pages/home";


 export default function Rotas(){
   return(
       <Router>
         <Routes>
           {/* ROTA CLIENT */}
           <Route path="/" element={<UsuarioCadastrar />} />

           {/* ROTA ADMIN */}
           <Route path="/admin/home" element={<Private redirectTo="/">
             <Home />
           </Private>} />

           <Route path="/admin/dashboard" element={<Private redirectTo="/">
            <DashBoard />
           </Private>} />

           <Route path="/admin/produtos" element={<Private redirectTo="/">
            <Produto />
           </Private>} />

           <Route path="/admin/usuario" element={<Private redirectTo="/">
            <Usuario />
           </Private>} />
           <Route path="/admin/trocarSenha" element={<Forgot />} />
           <Route path="/novaSenha" element={<NewSenha />} />
           <Route path="*" element={<NotFound />} />
           <Route path="/usuarios" element={<h1>teste</h1>} />
         </Routes>
       </Router>
     );
 };