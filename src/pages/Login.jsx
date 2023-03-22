import { useState, useEffect } from "react";
import { login } from "../config/firebase";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../context/UserContext";
import { useRedirectActiveUser } from "../hooks/useRedirectActiveUser";

const Login = () => {
    const [email, setEmail]=useState("");
    const [password, setPassword]=useState("");

    /* const navigate = useNavigate();
    const { user } = useUserContext();

    useEffect(() => {
        if(user){
            navigate('/dashboard')
        }
    }, [user]); */
    const { user } = useUserContext()
    useRedirectActiveUser(user, "/dashboard")

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const credencialUser=await login({email, password});
            console.log(credencialUser);
        } catch (error) {
            console.log("error: "+error)
        }
    }

    return (
        <>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" value={email} onChange={e=>setEmail(e.target.value)} placeholder="Ingrese email" />
                <input type="password" value={password} onChange={e=>setPassword(e.target.value)} placeholder="Ingrese contraseña"/>
                <button type="submit">Login</button>
            </form>
        </>
    );
};

export default Login;
