import api from "./index";
import { login, logout, getToken} from "./auth";
import { Navigate} from "react-router-dom";
import { useEffect, useState } from "react";

export default function WAuth({ children, redirectTo}:any){
    const [ redirect, setRedirect ] = useState(false);
    const [ loading, setLoading ] = useState(true);

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
                  setRedirect(false);
                  
                }else{
                    logout();
                    setLoading(false);
                  setRedirect(true);

                }
              } catch (err) {
                console.log(err);
              }
        }
        verify();
    },[]);

    return loading ? children : <Navigate to={redirectTo} />
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
