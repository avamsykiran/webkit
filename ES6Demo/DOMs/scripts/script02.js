
addPara = function(){

    let parentDiv = document.querySelector("#contentHolder");
    let textareaElement = document.querySelector("#paraContent");

    let myPara = document.createElement("p");
    myPara.textContent = textareaElement.value;

    textareaElement.value="";
    
    parentDiv.appendChild(myPara);
}