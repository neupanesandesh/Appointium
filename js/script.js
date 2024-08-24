// navbar toggling
const navbarShowBtn = document.querySelector('.navbar-show-btn');
const navbarCollapseDiv = document.querySelector('.navbar-collapse');
const navbarHideBtn = document.querySelector('.navbar-hide-btn');
const btn = document.querySelector('button');

const inputs = document.querySelector('form')
document.getElementById("mybtn").addEventListener("click",function(){
  
    
    const name = (inputs.elements["name"].value).trim()
    const email = (inputs.elements["email"].value).trim()
    const msg = (inputs.elements["message"].value.trim())
    const phone = (inputs.elements["phone"].value).trim()
    if (!name.length > 0 || !email.length > 0 || !msg.length > 0 || !phone.length > 0) {
        alert("All fields are mandatory")
        return
}
Email.send({
    Host:"smtp.mailtrap.io",
    Username:"48c2e738379bf9",
    Password:"0693263383acfc",
    To:"emailappointium@gmail.com",
    From:inputs.elements["email"].value,
    Subject:"Contact Us Query",
    Body:inputs.elements["message"].value + "<br>" + inputs.elements["name"].value + "<br>" + inputs.elements["Phone"].value
}).then(msg => alert("The email successfully sent")) 
});

navbarShowBtn.addEventListener('click', function(){
    navbarCollapseDiv.classList.add('navbar-show');
});
navbarHideBtn.addEventListener('click', function(){
    navbarCollapseDiv.classList.remove('navbar-show');
});

// changing search icon image on window resize
window.addEventListener('resize', changeSearchIcon);
function changeSearchIcon(){
    let winSize = window.matchMedia("(min-width: 1200px)");
    if(winSize.matches){
        document.querySelector('.search-icon img').src = "images/search-icon.png";
    } else {
        document.querySelector('.search-icon img').src = "images/search-icon-dark.png";
    }
}
changeSearchIcon();

// stopping all animation and transition
let resizeTimer;
window.addEventListener('resize', () =>{
    document.body.classList.add('resize-animation-stopper');
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
        document.body.classList.remove('resize-animation-stopper');
    }, 400);
});

// document.getElementById("mybtn").addEventListener("click",function){
//     Email.send({
//     Host:"smtp.mailtrap.io",
//     Username:"48c2e738379bf9",
//     Password:"0693263383acfc",
//     To:"emailappointium@gmail.com",
//     From:inputs.elements["email"].value,
//     Subject:"Contact Us Query",
//     Body:inputs.elements["message"].value + "<br>" + inputs.elements["name"].value + "<br>" + inputs.elements["Phone"].value
// }).then(msg => alert("The email successfully sent")) 
// }
