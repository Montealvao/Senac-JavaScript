const form = document.getElementById("form")
const username = document.getElementById("username")
const email = document.getElementById("email")
const password = document.getElementById("password")
const password2 = document.getElementById("password2")


function showError(input,message){
    const formControl = input.parentElement
    formControl.className = "form-control error"
    const small = formControl.querySelector("small")
    small.innerHTML = message
}

function showSucess(input){
    const formControl = input.parentElement
    formControl.className = "form-control sucess"
}

function checkLength(input,min,max){
    let valid = true
    if(input.value.length < min){
        showError(input,`Tem que ter no mínimo ${min} caracteres`)
        valid = false
    }
    
    else if(input.value.length > max){
        showError(input, `O máximo de caracteres é ${max}`)
        valid = false
    }
    return valid
}

function checkPassword(input1,input2){
    let valid = true
    if(input1.value != input2.value){
        showError(input2, "As senhas devem ser iguais")
        valid = false
    }

    return valid
}

function checkRequired(inputArray){
    let valid = true
    inputArray.forEach(function(input){
        if(input.value == ""){
            showError(input, "Valor em branco")    
            valid = false
        }
        else{
            showSucess(input)
        }
    })

    return valid

}


form.addEventListener("submit", function(e){
    e.preventDefault()

    let isValid = true
    isValid = checkRequired([username,email,password,password2])
    isValid = checkLength(username,3,5) && isValid
    isValid = checkLength(password,3,5) && isValid
    isValid = checkPassword(password,password2) && isValid

    if(isValid){
        const dados = {
            userName: username.value,
            userEmail: email.value,
            userPassword: password.value
        }
        console.log(dados)

        window.location.href = "./pages/home.html"
    }

})