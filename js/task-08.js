const form = document.querySelector('.login-form')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    
    const { email, password } = e.currentTarget

    

    const profile = {
        email: email.value,
        password: password.value
    }

    if (profile.email === '' || profile.password === '') {
       return alert('error')
    }

    console.log(profile)
    form.reset()  
})

// const buttonSubmit = form.querySelector('button')

// const onError = (message) => {
//     alert(message)
// }

// form.addEventListener('submit', (e, ) => {
//     e.preventDefault()
   
//     let emailFieldName = form.elements[0].name;
//     let emailFieldValue = form.elements[0].value;
//     let passwordFieldName = form.elements[1].name;
//     let passwordFieldValue = form.elements[1].value;

//     const profile = {
//         [emailFieldName]: emailFieldValue,
//         [passwordFieldName]: passwordFieldValue
//     }

//     if (passwordFieldValue === '') {
//         alert('error')
//         return
//     }

//     console.log(profile)
//     form.reset()
// })