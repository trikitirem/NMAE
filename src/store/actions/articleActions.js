export const loadArticles = () => {
    return (dispatch, getState) => {
        // make async call
        dispatch({ type: "LOAD_POSTS", });
    }
}

export const addArticle = (article) => {
    return (dispatch, getState) => {
        //TODO: save article 
        console.log("Article added!");
    }
}