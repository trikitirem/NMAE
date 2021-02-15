export const loadPosts = () => {
    return (dispatch, getState) => {
        // make async call
        posts = {};
        dispatch({type: "LOAD_POSTS", posts});
    }
}