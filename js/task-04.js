const form = document.querySelector('.login-form')

form.addEventListener('submit', event => {
    event.preventDefault()
    const email = form.elements.email.value
    const password = form.elements.password.value

    if (!email || !password){
        alert('All form fields must be filled in')
    }
    else {
        const userData = {
            email: email.trim(),
            password: password.trim()
        }
        console.log(userData)
        form.reset()
    }
})