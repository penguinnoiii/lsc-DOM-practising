const form = document.querySelector("form")
const error = document.getElementsByClassName("error")
const inputList = document.getElementsByClassName("input")
const usernameValue = inputList[1]
const emailValue = inputList[2]
const passwordValue = inputList[3]

usernameValue.addEventListener("change", (event) => {
    event.preventDefault()
    const value = event.target.value
    const validValue = validateUsername(value)

    if (!validValue) {
        error[1].textContent = "Username is invalid. Please make sure if it contains uppercase, number, more than 5 characters and no special character"
    } else {
        error[1].textContent = "Successfully, Eiei"
    }
})

emailValue.addEventListener("change", (event) => {
    event.preventDefault()
    const value = event.target.value
    const validValue = validateEmail(value)

    if (!validValue) {
        error[1].textContent = "Email is invalid. Please make sure if it contains '@' and '.com'"
    } else {
        error[1].textContent = "Successfully, Eiei"
    }
})

passwordValue.addEventListener("change", (event) => {
    event.preventDefault()
    const value = event.target.value
    const validValue = validatePassword(value)

    if (!validValue) {
        error[1].textContent = "Password is invalid. Please make sure if it contains uppercase, lowercase, number, more than 8 characters and special character"
    } else {
        error[1].textContent = "Successfully, Eiei"
    }
})

const validateUsername = (username) => {
    const upperCaseOrNOt = /[A-Z]/.test(username)
    const number = /[0-9]/.test(username)
    const moreThanFiveChar = username.length >= 5
    const specialChar = /[$#%^&*()_+!]/.test(username)

    return upperCaseOrNOt && number && moreThanFiveChar && !specialChar
};

const validateEmail = (email) => {
    const at = /[@]/.test(email)
    const dotCom = /[.com]/.test(email)

    return at && dotCom
};

const validatePassword = (password) => {
    const upperCaseOrNOt = /[A-Z]/.test(password)
    const lowerCaseOrNOt = /[a-z]/.test(password)
    const number = /[0-9]/.test(password)
    const moreThanEightChar = password.length >= 8
    const specialChar = /[$#%^&*()_+!]/.test(password)

    return upperCaseOrNOt && lowerCaseOrNOt && number && moreThanEightChar && specialChar
};
      
export { validateEmail, validatePassword, validateUsername };