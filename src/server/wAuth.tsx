import api from "./index";
import { getToken } from "./auth";
import { Navigate } from "react-router-dom";
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
                       setLoading(true);
                       console.log("Tudo certo");
                      }
        
                   } catch (err) {
                       setLoading(false);
                       console.log(err);
                   }
             }
             verify();
         },[]);

    return loading ? children : <Navigate to={redirectTo} />;
};





// OUTRO JEITO DE FAZER
// useEffect(() => {
//     async function verify(){
//         const config = {
//             headers:{
//                 authorization:'Bearer '+getToken()
//             }
//         }
//         try {
//            await api.get('/projects/', config)
//            .then(res =>{
//                if(res.status === 200){
//                    setLoading(true);
//                    console.log("Tudo certo");
//                }
//            }
//            )
//         } catch (error) {
//            setLoading(false);
//            console.log(error);
//         }
//         }
//         verify()
// },[]);
