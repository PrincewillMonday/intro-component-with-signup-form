// For all inputs
let firstName = document.getElementById ("first-name") 
let lastName = document.getElementById ("last-name")
let email = document.getElementById ("email")
let password = document.getElementById ("password")

// For all error messages
let firstNameError = document.getElementById ("first-name-error")
let lastNameError = document.getElementById ("last-name-error")
let emailError = document.getElementById ("email-error")
let passwordError = document.getElementById ("password-error")
let error = document.querySelector (".error")
let wrapInput = document.querySelector (".wrap-input")

// Divs for Each Box
let firstNameWrap = document.getElementById("first-name-wrap")
let lastNameWrap = document.getElementById("last-name-wrap")
let emailWrap = document.getElementById ("email-wrap")
let passwordWrap = document.getElementById ("password-wrap")

firstNameWrap.style.border = "2px solid hsl(246, 25%, 77%)"
lastNameWrap.style.border = "2px solid hsl(246, 25%, 77%)"
emailWrap.style.border = "2px solid hsl(246, 25%, 77%)"
passwordWrap.style.border = "2px solid hsl(246, 25%, 77%)"

// For Email Verification
const regExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

// For button
let btn = document.getElementById ("btn").addEventListener ("click", function () {

    if (firstName.value === "") {
        firstNameError.textContent = "First Name cannot be empty"
        firstNameError.style.color = "hsl(0, 100%, 74%)"
        firstNameWrap.style.border = "2px solid hsl(0, 100%, 74%)"
    }
    if (lastName.value === "") {
        lastNameError.textContent = "Last Name cannot be empty"
        lastNameError.style.color = "hsl(0, 100%, 74%)"
        lastNameWrap.style.border = "2px solid hsl(0, 100%, 74%)"
    }

    if (email.value === "") {
        emailError.textContent = "Email cannot be empty"
        emailError.style.color = "hsl(0, 100%, 74%)"
        emailWrap.style.border = "2px solid hsl(0, 100%, 74%)"
    }
    else if (!regExp.test(email.value)) {
        emailError.textContent = "Looks like this is not an email"
        emailError.style.color = "hsl(0, 100%, 74%)"
        emailWrap.style.border = "2px solid hsl(0, 100%, 74%)"
    }
    if (password.value === "") {
        passwordError.textContent = "Password cannot be empty"
        passwordError.style.color = "hsl(0, 100%, 74%)"
        passwordWrap.style.border = "2px solid hsl(0, 100%, 74%)"
    }
    
})

