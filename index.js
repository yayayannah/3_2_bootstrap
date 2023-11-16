console.log("Hello World!");

let name = "Hannah" //string
let age = 20 //number
let isSingle = true; //boolean
let hobbies = ["Watching movies","Drawing","Studying :o"] //array

let myObject = {
    // <Key>: <value> 
    name,
    age,
    isSingle,
    hobbies
}; //object

// console.log(myObject);  

function register() {

    let txtModalEmail = document.querySelector('#txtModalEmail');
    let txtModalPassword = document.querySelector('#txtModalPassword');
    let txtModalConfirmPassword = document.querySelector('#txtModalConfirmPassword');
    let txtModalName = document.querySelector('#txtModalName');
    let txtModalAddress = document.querySelector('#txtModalAddress');
    let txtModalBirthday = document.querySelector('#txtModalBirthday');
    let genderModal = document.querySelector('#genderModal');

    let user = {
        email: txtModalEmail.value,
        name: txtModalName.value,
        password: txtModalPassword.value,
        confirmPassword: txtModalConfirmPassword.value,
        address: txtModalAddress.value,
        birthday: txtModalBirthday.value,
        gender: genderModal.value,

    };

    if(!user.email)
    {
        return alert("Email is required.")
    }
    else if (!user.name)
    {
        return alert("Name is required.")
    }
    else if (!user.password || !user.confirmPassword)
    {
        return alert("Password is required.")
    }
    else if (user.password != user.confirmPassword)
    {
        return alert ("Password does not match")
    }
    else if(!user.address)
    {
        return alert("Address is required")
    }
    else if(!user.birthday)
    {
        return alert("Birthday is required")
    }
    else if(!user.gender)
    {
        return alert("Gender is required")
    }

    console.log("Button Register is clicked",user);
    alert("Welcome "+ user.name + ", you have registered successfully")

}

// let btnModalRegister = document.getElementById('btnModalRegister');

let btnModalRegister = document.querySelector('#btnModalRegister');

btnModalRegister.onclick = () => {
    register();
};