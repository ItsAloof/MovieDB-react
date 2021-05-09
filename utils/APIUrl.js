

export const getAPIUrl = (url, path) =>
{
    let newUrl;
    if(/localhost/.test(url))
    {
        newUrl = url.replace(/\/?$/, "");
    }
    if(/FavoriteMovies/.test(url)){
        let newUrl = url.replace(/\/FavoriteMovies.*/, path);
        return newUrl;
    }else{
        return (newUrl + path);
    }

}