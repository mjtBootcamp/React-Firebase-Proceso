import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../context/UserContext"

export const useRedirectActiveUser = (user,path) => {
    const navigate = useNavigate();

    useEffect(() => {
        if(user){
            navigate(path)
        }
    }, [user]);
}