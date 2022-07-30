
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let body = document.querySelector("body")
console.log(body)


menu.addEventListener("click",()=>{
    navbar.classList.toggle('active')
})

const darkmode = document.getElementById("darkmode");
darkmode.addEventListener("click",()=>{
    if(darkmode.classList.contains("bx-moon")){
        darkmode.classList.replace("bx-moon","bx-sun");
        body.classList.add("active")
    } else{
        darkmode.classList.replace("bx-sun","bx-moon")
        body.classList.remove("active")
    }
})
