import { useState } from "react";

import Swal from 'sweetalert2';

import api from "../../../../server/index";



export default function Forgot(){

    const [email,setEmail] = useState ('');

    async function handleForgot(){
        const data = {
          email
        };
        try {
          if(email != ""){
            const response = await api.post('/auth/forgot_password', data)
           if(response.status === 200){
             window.location.href='/novaSenha';
           }
          }else{
              Swal.fire({
                icon:'error',
                text:'Este campo e obrigatorio!'
              })
          }
        } catch (err) {
          
          Swal.fire({
            icon:'error',
            text:'Este usuario não existe!'
          })
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