

export const getAPIUrl = (url, path) =>
{
    let newUrl;
    if(/localhost/.test(url))
    {
        newUrl = url.replace(/\/?$/, "");
        return (newUrl + path);
    }
    if(/FavoriteMovies/.test(url)){
        let newUrl = url.replace(/\/FavoriteMovies.*/, path);
        return newUrl;
    }else{
        return (url + path);
    }

}