let warning = document.querySelector('.warning')
let form  = document.querySelector('form')
let fName = document.querySelector('#fName')  
let lName = document.querySelector('#LName')
let email = document.querySelector('#email')
let password = document.querySelector('#password')
let conPassword = document.querySelector('#conPassword')
let phone = document.querySelector('#phone')
// let fNamelable = document.querySelector('.fNamelable')
let validEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

warning.innerHTML = "Fill in all fields"



function validation() {

   if (fName.value === "" ||
    fName.value.includes(" ") ||
     fName.value.length > 15
      ) {

    warning.innerHTML = 'infalid first name'
    warning.style.color = "red"
    return false

   } else if ( lName.value === "" ||
   lName.value.includes(" ") ||
   lName.value.length > 15 ){

    warning.innerHTML = 'infalid last name'
    warning.style.color = "red"
    return false

   }else if ( email.value === "" ||
   email.value.includes(" ") ||
    !validEmail.test(email.value)){

    warning.innerHTML = 'infalid Email'
    warning.style.color = "red"
    return false

   }else if ( phone.value.length !== 11 ||
    phone.value.startsWith('0') !== true){
 
     warning.innerHTML = 'infalid phone number'
     warning.style.color = "red"
     return false
 
    } else if ( password.length < 5||
   password.value.includes(" ") ||
   password.value.length > 15){

    warning.innerHTML = 'infalid password'
    warning.style.color = "red"
    return false

   }else if ( conPassword.value !== password.value){
   
       warning.innerHTML = ' The password must be identical  '
       warning.style.color = "red"
       return false
   
      }else {
    return true
   } 
}