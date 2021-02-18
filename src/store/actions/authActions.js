export const actionsLogIn = (data) => {
    return (dispatch, getState) => {
        //TODO: ask database 
        dispatch ({type: "AUTH_USER"});
    };
}

export const actionsSignUp = (data) => {
    return (dispatch, getState) => {
        //TODO: save user do db
        
        dispatch ({type: "AUTH_USER"});
    };
}