import jwtDecode from "jwt-decode";

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

export const roundDate = t => {
    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    const date = new Date(t * 1000);
    const month = monthNames[date.getMonth()]
    const day = date.getDate()
    const year = 20 + date.getYear().toString().substring(1);
    return month + " " + day + ", " + year;
};

export const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

export const checkExpirationOfToken = (token) => {
    const {exp, iat, sub} = jwtDecode(token);
    if(exp > iat){
        console.log("Not Expired")
        return false;
    } else {
        console.log("Expired")
        return true;
    }
}