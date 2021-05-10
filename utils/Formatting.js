export const formatDate = (date) => {
    if (date === "")
    {
        return ("No release date")
    }
    var arr = date.split("-");
    var newDate = arr[2] + "/" + arr[1] + "/" + arr[0];
    return newDate;
}

export const formatRuntime = (time) =>
    {
        let h = (time/60);
        let m = time % 60;
        return (`${Math.floor(h)}h ${m}m`);
    }

export const number = new Intl.NumberFormat('en-US');

export const currency = new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'});

export const formatGenres = (genres) => {
    let text = "";
    for(var i in genres)
    {
        if(i == (genres.length-1))
        {
            text += genres[i].name;
        }else{
            text += genres[i].name + ", ";
        }
    }
    if(text === ""){
        return text;
    }else{
        return ("Genres: " + text);
    }
}

