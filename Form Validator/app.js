const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const repassword = document.getElementById("repassword");

function error (input,message) {
    input.clasName ="form-control is-invalid";
    const div = input.nextElementSibling;
    div.innerText = message;
    div.clasName = "invalid-feedback";
}

function success (input) {
    input.clasName = "form-control is-valid";
}

function checkRequired(inputs) {
    inputs.forEach(function(input) {
        if ( input.value==='' ) {
            error( input,`${input.id} is required.` )
        }else {
            success(input);
        }
    });
}

function checkLength(input, min, max) {
    if ( input.value.lenght<min ) {
        error( input, `${input.id} en az ${min} karakter olmalidir !` );
    } else if ( input.value.lenght>max ) {
        error( input, `${input.id} en fazla ${max} karakter olmalidir !` );
    } else {
        success(input);
    }
}

function checkEmail(input) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    if(re.test(input.value)) {
        success(input);
    }else{
        error(input,"Hatali Bir Mail Adresi Girdiniz !")
    }
}

function checkPhone (input) {
    var exp = /^\d{10}$/;
    if ( !exp.test(input.value) ) {
        error ( input,"Telefon 10 karakterli olmalidir !!");
    }
}

function checkPasswords (input1,input2) {
    if ( input1.value!==input2.value ) {
        error ( input2,"Parolalar Eşleşmiyor !!" );
    }
}

form.addEventListener("submit", function(e) {
    e.preventDefault();

    checkRequired([username,email,phone,password,repassword]);
    checkLength(username,7,15);
    checkEmail(email);
    checkPhone(phone);
    checkLength(password,7,12);
    checkPasswords(password,repassword);
})