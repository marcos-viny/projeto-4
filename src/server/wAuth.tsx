import api from "./index";
import { login, logout, getToken } from "./auth";
import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";

export default function WAuth({ children, ...rest}:any){
    const [ redirect, setRedirect ] = useState(false);
    const [ loading, setLoading ] = useState(true);

    useEffect(() => {
        async function verify(){
            var res = await api.post('/auth/authenticate', {params:{token:getToken()}});
            if(res.data.status === 200){
                setLoading(false);
                setRedirect(false);
            }else{
                logout();
                setLoading(false);
                setRedirect(true);
            }
        }
        verify();
    },[]);

    return loading ? <Route {...rest} /> : <Navigate to="/admin/home" />
};