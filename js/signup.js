let user_name = document.getElementById("uname")
let email = document.getElementById("mail")
let password = document.getElementById("pwd")
let submit = document.getElementById("submit")

submit.addEventListener("click", function(e){
    e.preventDefault();
    if (user_name.value == '' || email.value == '' || password.value == '' ) {
        alert('enter valid data')
    } else {
        localStorage.setItem('username', user_name.value)
        localStorage.setItem('email', email.value)
        localStorage.setItem('password', password.value)

        setTimeout(() => {
            window.location = "login.html";
        }, 2000);
    }
})