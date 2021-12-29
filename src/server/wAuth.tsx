import api from "./index";
import { login, logout, getToken, TOKEN_KEY } from "./auth";
import { BrowserRouter as Router, Navigate, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";

export default function WAuth({ children, redirectTo}:any){
    const [ redirect, setRedirect ] = useState(false);
    const [ loading, setLoading ] = useState(true);

    useEffect(() => {
        async function verify(){
            var res = await api.get('/projects', {params:{token:getToken()}});
            const token = localStorage.getItem(TOKEN_KEY);
            
            if(token){
                api.defaults.headers.authorization = `Bearer ${token}`;
            }
        }
        verify();
    },[]);

    return loading ? children : <Navigate to={redirectTo} />
};