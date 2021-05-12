

export const getAPIUrl = (url, path) =>
{
    let newUrl = url;
    if(/localhost/.test(url) || /\d+\.\d+\.\d+\.\d+:\d+\//.test(url))
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