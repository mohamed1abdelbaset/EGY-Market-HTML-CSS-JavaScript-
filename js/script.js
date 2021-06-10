let links = document.getElementById("links");
let userData = document.getElementById("userData");
let user = document.getElementById("user");
let logout = document.getElementById("logout");

let unameinsidestorage = localStorage.getItem('username');

if (unameinsidestorage) {
    links.remove();
    userData.style.display = 'flex';
    user.innerHTML = unameinsidestorage;
}

logout.addEventListener('click', function(){
    localStorage.clear()
    window.location = 'login.html'
})