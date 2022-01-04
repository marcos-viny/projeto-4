import { useState } from "react";

import api from "../../../../server/index";

export default function NovaSenha(){
    const [ email, setEmail ] = useState("");
    const [ token, setToken ] = useState("");
    const [ newsenha, setNewSenha ] = useState("");

    async function handleNewSenha() {
        const data = {
            email,
            token,
            password:newsenha
        };

        try {
            await api.post('/auth/reset_password', data)
            .then(response => {
                if(response.status === 200){
                    console.log('ok');
                    window.location.href="/";
                }
            })
        } catch (error) {
            console.log(error);
            
        }
    }
    return(
        <>
        <div className="">
            <h1>Nova Senha</h1>
            <div className="block">
            <input 
                type="text"
                required
                id="email"
                name="email" 
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Email"
            />

            <input 
                type="text"
                required
                id="token"
                name="token" 
                value={token}
                onChange={e => setToken(e.target.value)}
                placeholder="Token"
            />


            <input 
                type="text"
                required
                id="newsenha"
                name="newsenha" 
                value={newsenha}
                onChange={e => setNewSenha(e.target.value)}
                placeholder="Nova Senha"
            />

          <input type="submit" value="Trocar" onClick={handleNewSenha}/>
            </div>
        </div>
        </>
    );
};