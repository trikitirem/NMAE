const initState = {
    id: "",
}

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case "AUTH_USER":
            state = action.user;
            break;
        case "LOG_OUT":
            state = {id: ""};
        default:
            break;
    }
    return state;
}

export default authReducer;