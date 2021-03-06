import { useState } from "react";
import api from "../../../../server/index";


export default function Forgot(){

    const [email,setEmail] = useState ('');

    async function handleForgot(){
        const data = {
          email
        };
    
        try {
            await api.post('/auth/forgot_password', data)
            console.log('teste');
            window.location.href='/novaSenha';
        } catch (err) {
          console.log(err)
        }
      };
    
    return(
        <>
        <div>
            
            <input 
                        type="email"
                        required 
                        id="email" 
                        name="email" 
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        placeholder="Email"/>

           <input type="submit" value="Registrar" onClick={handleForgot}/>  
           
        </div>
        </>
    )
}