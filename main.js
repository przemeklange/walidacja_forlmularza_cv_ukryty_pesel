var email = document.querySelector("#inputEmail4"),
    pass = document.querySelector("#inputPassword4"),
    city = document.querySelector("#inputCity"),
    pole = document.querySelectorAll(".form-control"),
    subheader = document.querySelector(".info"),
    subheadertwo = document.querySelector(".infotwo")
    subheaderthree = document.querySelector(".infothree")

const letter = /[a-z]/i;
const numbers = /[0-9]/;
const special = /[!@#$%^&*()]/;
const minValue = 11;
const checkmail = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

function ValidateSize(file) {
    var FileSize = file.files[0].size / 1024 / 1024; // in MiB
    if (FileSize > 2) {
        alert('Za duży plik ;)');
    } else {

    }
}

function err (){
    subheader.innerText = "Pole wymagane"
    subheader.style.color = "red"
}

function errpesel (){
    subheadertwo.innerText = "Pesel ma 11 cyfr"
    subheadertwo.style.color = "red"
}

function errcity (){
    subheaderthree.innerText = "Pole wymagane"
    subheaderthree.style.color = "red"
}


function check (){
    if(email.value.match(checkmail)){
        subheader.innerText = " " + "Poprawna wartość pola";
        subheader.style.color = "green";
    } else{
        subheader.innerText = "Zły email"
        subheader.style.color = "red"
    }
    
}

function checkpass (){
    if(pass.value.length == minValue & pass.value.match(numbers)){
        subheadertwo.innerText = " " + "Poprawna wartość pola";
        subheadertwo.style.color = "green";
    } else{
        subheadertwo.innerText = "Zły pesel"
        subheadertwo.style.color = "red"
    }
    
}

function cities (){
    if(city.value.length > 5){
        subheaderthree.innerText = " " + "Poprawna wartość pola";
        subheaderthree.style.color = "green";
    } else{
        subheaderthree.innerText = "Nie ma takiego miasta w Polsce"
        subheaderthree.style.color = "red"
    }
}

email.addEventListener('keyup', function(){
    if (email.value !== ''){
        check();
    } else {
        err();
    }
})

pass.addEventListener('keyup', function(){
    if (pass.value !== ''){
        checkpass();
    } else{
        errpesel();
    }
})

city.addEventListener('keyup', () =>{
    if (city.value !==''){
        cities();
    } else{
        errcity();
    }
})