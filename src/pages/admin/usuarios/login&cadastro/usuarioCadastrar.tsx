import { useState } from "react";
import { BsLinkedin, BsFacebook, BsInstagram } from "react-icons/bs";
import api from "../../../../server/index";
import HeaderMenu from "../../../../componentes/headerMenuNav"

import "./usuarioCadastrar.scss";

export default function Login() {
  let [abrir, setAbrir] = useState(0);
  function toogle(e: any) {
    if (abrir === e) {
      setAbrir((prevState) => prevState + 0);
    } else {
      setAbrir(e);
    };
  };

  // SALVAR DADOS NO BACK-END;
  const [nome,setNome] = useState ('');
  const [email,setEmail] = useState ('');
  const [senha,setSenha] = useState ('');

  async function handleSubmit(){
    const data = {
      name:nome, 
      email:email, 
      password:senha
    };

    try {
      await api.post('/auth/register', data)
      console.log('teste')
      
    } catch (err) {
      console.log(err)
    }

  };
  return (
      <>
       <div>
            <HeaderMenu nome="Login e Cadastro"/>
          </div>
      {/* create conta */}
      <div
      className={`
        flex
        justify-center
        bg-blue-500
        duration-700
        ${abrir === 1 ? "active-1" : ""}`}
    >
      <div className="container">
        <div className="blueBg">
          <div className="box signin">
            <h2>Não tem uma conta?</h2>
            <button className="signinBtn" onClick={() => toogle(0)}>
              Criar conta
            </button>
          </div>
          <div className="box signup">
            <h2>Já tem uma conta?</h2>
            <button className="signupBtn" onClick={() => toogle(1)}>
              Login
            </button>
          </div>
        </div>
        <div
          className={`formBx ${abrir === 1 ? "active active-2 active-3" : ""}`}
        >
          <div className="form signinForm">
            <form action="">
              <div className="social-container flex justify-center">
                <a href="#">
                  <BsFacebook className="w-6 h-6 text-blue-400" />
                </a>
                <a href="#">
                  <BsLinkedin className="w-6 h-6" />
                </a>
                <a href="#">
                  <BsInstagram className="w-6 h-6 text-pink-900" />
                </a>
              </div>
              <h3>Criar conta</h3>
                        <input 
                        type="text"
                        required
                         id="nome"
                         name="nome" 
                         value={nome}
                         onChange={e => setNome(e.target.value)}
                         placeholder="Nome"/>

                        <input 
                        type="email"
                        required 
                        id="email" 
                        name="email" 
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        placeholder="Email"/>

                        <input 
                        type="password" 
                        required
                        id="senha" 
                        name="senha" 
                        value={senha}
                        onChange={e => setSenha(e.target.value)}
                        placeholder="Senha"/>

                      <input type="submit" value="Registrar" onClick={handleSubmit}/>  
            </form>
          </div>

          {/* Login */}
          <div className="form signupForm">
            <form action="">
              <div className="social-container flex justify-center">
                <a href="#">
                  <BsFacebook className="w-6 h-6 text-blue-400" />
                </a>
                <a href="#">
                  <BsLinkedin className="w-6 h-6" />
                </a>
                <a href="#">
                  <BsInstagram className="w-6 h-6 text-pink-900" />
                </a>
              </div>
              <h3>Sing Up</h3>
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Senha" />
              <input type="submit" value="Login" />
            </form>
          </div>
        </div>
      </div>
    </div>
      </>
  );
}
