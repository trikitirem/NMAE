const initState = {
}

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case "AUTH_USER":
            state = action.user;
            break;
        default:
            break;
    }

    console.log(state);
    return state;
}

export default authReducer;