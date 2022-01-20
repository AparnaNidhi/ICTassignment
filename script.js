let email=document.getElementById("email");
let error=document.getElementById("error");
let pwd=document.getElementById("pwd");
let error1=document.getElementById("error1");
function validate(){
    let regexp=/^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/
    if(regexp.test(email.value)){
        error.innerHTML="Valid";
        error.style.color="green";
        return true;
    }
    else{
        error.innerHTML="Invalid";
        error.style.color="red";
        return false;

    }
}
  
//   if(email.value.trim()==""||pwd.value.trim()==""){
//        alert("fiels cannot be empty");
//        return false;
//    }
//    else{
//         return true;
//    }
//   if(email.value==""){
//        alert("Email cannot be null");
//        return false;
//   }
function Vpwd(){
    let regexp=/^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/
    if(regexp.test(pwd.value)){
        error1.innerHTML="Valid";
        error1.style.color="green";
        return true;
    }
    else{
        error1.innerHTML="Invalid";
        error1.style.color="red";
        return false;

    }
 }
