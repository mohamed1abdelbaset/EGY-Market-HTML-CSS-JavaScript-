let user_name = document.getElementById("uname")
let password = document.getElementById("pwd")
let submit = document.getElementById("submit")

let userfromstorage = localStorage.getItem('username')
let pwdfromstorage = localStorage.getItem('password')

submit.addEventListener("click", function(e){
    e.preventDefault();
    if (user_name.value == '' || password.value == '' ) {
        alert('enter valid data')
    } else {
        if ((userfromstorage && userfromstorage == user_name.value) &&
        (pwdfromstorage && pwdfromstorage== password.value)) {
            console.log('yes')
        }else{
            console.log('wrong')
        }


        setTimeout(() => {
            window.location = "index.html";
        }, 2000);
    }
})