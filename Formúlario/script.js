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
    if(input.value.length < min){
        showError(input,`Tem que ter no mínimo ${min} caracteres`)
    }

    else if(input.value.length > max){
        showError(input, `O máximo de caracteres é ${max}`)
    }
}

function checkPassword(input1,input2){
    if(input1.value != input2.value){
        showError(input2, "As senhas devem ser iguais")
    }
}

function checkRequired(inputArray){
    inputArray.forEach(function(input){
        if(input.value == ""){
            showError(input, "Valor em branco")    
        }
        else{
            showSucess(input)
        }
    })


}


form.addEventListener("submit", function(e){
    e.preventDefault()

    checkRequired([username,email,password,password2])
    checkLength(username,3,5)
    checkLength(password,3,5)
    checkPassword(password,password2)
})