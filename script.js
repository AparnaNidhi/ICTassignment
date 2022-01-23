let email=document.getElementById("email");
let error=document.getElementById("error");
let pwd=document.getElementById("pwd");
let error1=document.getElementById("error1");
let pwd1=document.getElementById("pwd1");
let error2=document.getElementById("error2");
let email1=document.getElementById("email1");
let error4=document.getElementById("error4");
let num=document.getElementById("num");
let error5=document.getElementById("error5");
let error6=document.getElementById("error6");
function validate(){
    let regexp=/^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+)\.([a-z]{2,3})(.[a-z]{2,3})?$/;
    if(regexp.test(email.value)){
        error.innerHTML="Valid";
        error.style.color="green";
        return true;
    }
    else{
        error.innerHTML="email format should be in example@domain.xxx.xxx";
        error.style.color="red";
        return false;
    }
}
function Vpwd(){
    let regexp1=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,26}$/;
    if(regexp1.test(pwd.value)){
        error1.innerHTML="Valid";
        error1.style.color="green";
        return true;
    }
    else{
        error1.innerHTML="Must contain at least 1 lowercase char from a to z,1 uppercase char from A to Z, 1 numeric from 0 to 9,1 special char,eight characters or longer string";
        error1.style.color="red";
        return false;
    }
}

function vemail(){
    let regexp3=/^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+)\.([a-z]{2,3})(.[a-z]{2,3})?$/;
    if(regexp3.test(email1.value)){
        error4.innerHTML="Valid";
        error4.style.color="green";
        return true;
    }
    else{
        error4.innerHTML="email format should be in example@domain.xxx.xxx";
        error4.style.color="red";
        return false;

    }
}
function vnum(){
    let regexp4=/^([0-9]{3})([. -]?[0-9]{3})([. -]?[0-9]{3})$/; 
    if(regexp4.test(num.value)){
        error5.innerHTML="Valid";
        error5.style.color="green";
        return true;
    }
    else{
        error5.innerHTML="contact number format should be in xxx.xxx.xxxx,xxx.xxx.xxxx,xxx xxx xxxx 0r xxxxxxxxxx";
        error5.style.color="red";
        return false;

    }
}
function vpwd1(){
         let SRegExp=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
         let  MRegExp=/^((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{4,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))$/;
        if( SRegExp.test(pwd1.value)) {
           error2.style.backgroundColor = "green";
            error2.textContent = 'Strong';
            error6.innerHTML=" The password is valid";
        } else if(MRegExp.test(pwd1.value)) {
           error2.style.backgroundColor = 'orange';
            error2.textContent = 'Medium';
        } else {
            error2.style.backgroundColor = 'red';
            error2.textContent = 'poor';
            error6.innerHTML="Must contain at least 1 lowercase char from a to z,1 uppercase char from A to Z, 1 numeric from 0 to 9,1 special char,eight characters or longer string"
        }
}


