import { v4 as uuidv4 } from 'uuid';

export const actionsLogIn = (data) => {
    return (dispatch, getState) => {


        //TODO: ask database 
        dispatch({ type: "AUTH_USER" });
    };
}

export const actionsSignUp = (login, password) => {
    return (dispatch, getState) => {
        //TODO: save user do db
        let user = { login, password, id: uuidv4() }
        dispatch({ type: "AUTH_USER", user });
    };
}