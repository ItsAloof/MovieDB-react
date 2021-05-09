

export const getAPIUrl = (url, path) =>
{
    let newUrl = url;
    if(/localhost/.test(url) || /192.168.0.11/.test(url))
    {
        newUrl = url.replace(/\/?$/, "");
    }
    
    if(/FavoriteMovies/.test(url)){
        newUrl = newUrl.replace(/\/FavoriteMovies.*/, path);
        return newUrl;
    }else{
        return (newUrl + path);
    }

}