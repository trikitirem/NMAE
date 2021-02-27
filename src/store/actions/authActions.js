export const actionsLogIn = (data) => {
    console.log(JSON.stringify({ login: data.login, password: data.password }));

    return async (dispatch, getState) => {
        const query = await fetch("http://localhost:8080/login", {
            body: JSON.stringify({ login: data.login, password: data.password }),
            method: "post",
            headers: {
                "Content-Type": "application/json"
            }
        });
        const user = await query.json();
        if (user.errors) {
            //TODO: display suitable information
        } else {
            console.log("works")
            dispatch({ type: "AUTH_USER", user: { ...user.user } });
            data.redirect();
        }
    };
}

export const actionsSignUp = (data) => {
    console.log(JSON.stringify({ login: data.login, password: data.password }));

    return async (dispatch, getState) => {
        const query = await fetch("http://localhost:8080/signup", {
            body: JSON.stringify({ login: data.login, password: data.password }),
            method: "post",
            headers: {
                "Content-Type": "application/json"
            }
        });
        const user = await query.json();
        if (user.errors) {
            //TODO: display suitable information
        } else {
            console.log(user);
            dispatch({ type: "AUTH_USER", user: { ...user.user } });
            data.redirect();
        }
    };
}

export const actionsLogOut = () => {
    return (dispatch, getState) => {
        dispatch({ type: "LOG_OUT" })
    }
}