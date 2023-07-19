const signupbtn = document.getElementById("signup-ref-btn");

signupbtn.addEventListener("click", e => {
    e.preventDefault();

    const loginModal = document.querySelector(".login-container");
    const signUpModal = document.querySelector(".signup-container");
    console.log("works");
    signUpModal.style.display = "flex";
    loginModal.style.display = "none";

    
})