export const hiddenPw = (password) => {
    let hiddenPw = "";
    for(let i = 0; i<password.length; i++){
        hiddenPw = hiddenPw.concat('x')
    }
    return hiddenPw;
}

export const properCase = (string) => {
    const firstLetter = string.charAt(0).toUpperCase();
    const remainder = string.slice(1).toLowerCase();
    return firstLetter + remainder;
}

export const imagePath = "https://image.tmdb.org/t/p/original";
