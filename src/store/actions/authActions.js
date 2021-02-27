const options = {
    method: "post",
    headers: {
        "Content-Type": "application/json"
    }
}

const authenticateUser = (dispatch, user, redirect) => {
    if (user.errors) {
        //TODO: display suitable information
    } else {
        dispatch({ type: "AUTH_USER", user: { ...user } });
        redirect();
    }
}

export const actionsLogIn = (data) => {
    return async (dispatch, getState) => {
        const query = await fetch("http://localhost:8080/login", {
            body: JSON.stringify({ login: data.login, password: data.password }),
            ...options
        });
        const user = await query.json();
        authenticateUser(dispatch, user, data.redirect);
    };
}

export const actionsSignUp = (data) => {
    console.log(JSON.stringify({ login: data.login, password: data.password }));

    return async (dispatch, getState) => {
        const query = await fetch("http://localhost:8080/signup", {
            body: JSON.stringify({ login: data.login, password: data.password }),
            ...options
        });
        const user = await query.json();
        authenticateUser(dispatch, user, data.redirect);
    };
}

export const actionsLogOut = () => {
    return (dispatch, getState) => {
        dispatch({ type: "LOG_OUT" })
    }
}