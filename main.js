let signinBtn = document.querySelector(".signinBtn")
let signupBtn = document.querySelector(".signupBtn")

let signinform = document.querySelector(".container1")
let signupform = document.querySelector(".container2")

console.log(signupBtn);

signupBtn.addEventListener("click", function(){
    signinform.classList.add("hide");
    signupform.classList.remove("hide");
})

signinBtn.addEventListener("click", function(){
    signupform.classList.add("hide");
    signinform.classList.remove("hide");
})