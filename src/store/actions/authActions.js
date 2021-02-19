import { v4 as uuidv4 } from 'uuid';
import { Redirect, useLocation } from "wouter";

export const actionsLogIn = (data) => {
    return (dispatch, getState) => {
        //TODO: ask database 
        dispatch({ type: "AUTH_USER" });
        data.redirect();
    };
}

export const actionsSignUp = (data) => {
    return (dispatch, getState) => {
        //TODO: save user do db
        let user = { login: data.login, password: data.password, id: uuidv4() }
        dispatch({ type: "AUTH_USER", user });
        data.redirect();
    };
}

export const actionsLogOut = () => {
    return (dispatch, getState) =>{
        dispatch({type: "LOG_OUT"})
    }
}