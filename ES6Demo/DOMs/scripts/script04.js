"use strict";

let validateForm = function(){
    let isValid=true;
    let errorsHolder = document.querySelector("#errors");

    //to remove all prev errors from screen.
    while(errorsHolder.hasChildNodes()){
        errorsHolder.removeChild(errorsHolder.lastChild);
    }

    let userName = regForm.unm.value;
    let pwd1 = regForm.pwd1.value;
    let pwd2 = regForm.pwd2.value;
    let isAccepted = regForm.chk1.checked;

    if(userName===undefined || userName.length<8){
        isValid=false;
        let err = document.createElement("li");
        err.textContent='User Name is requried to be atleast 8 letters in length';
        errorsHolder.appendChild(err);
    }

    if(pwd1===undefined || pwd1.length<8){
        isValid=false;
        let err = document.createElement("li");
        err.textContent='Password is requried to be atleast 8 letters in length';
        errorsHolder.appendChild(err);
    }

    if(pwd1!==pwd2){
        isValid=false;
        let err = document.createElement("li");
        err.textContent='Password Mismatch';
        errorsHolder.appendChild(err);
    }

    if(!isAccepted){
        isValid=false;
        let err = document.createElement("li");
        err.textContent='Terms and conditions must be accepted';
        errorsHolder.appendChild(err);
    }
    return isValid;
}