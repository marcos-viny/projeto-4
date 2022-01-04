import api from "./index";
import { login, logout, getToken} from "./auth";
import { Navigate, useNavigate} from "react-router-dom";
import { useEffect, useState } from "react";


export default function WAuth({children, redirectTo }:any){
  
  
    const [ loading, setLoading ] = useState(!false);

    useEffect(() => {
        async function verify(){
            const config = {
            headers:{
                authorization:'Bearer '+getToken()
            }
        }
            try {
                const response = await api.get('/projects',config);
                if(response.status === 200){
                  setLoading(false);
                  
                  
                }else{
                    logout();
                    setLoading(false);
                

                }
              } catch (err) {
                console.log(err);
              }
        }
        verify();
    },[]);

     
    // console.log("isAuth: ", isAuthenticated);
  

    return loading ? children : <Navigate to={redirectTo} />;
};

// MEU MODO DE FAZER;
// useEffect(() => {
//     async function verify(){
//         const config = {
//             headers:{
//                 authorization:'Bearer '+getToken()
//             }
//         }
        
//             await api.get('/projects/', config)
//             .then(res =>{
//                 if(res.status === 200){
//                     console.log('marcos');
                    
//                 }
                
//             },
//             err => {
//                 console.log( 'erea'+err);
                
//             }
//             )
//         }
//         verify()
// },[]);
