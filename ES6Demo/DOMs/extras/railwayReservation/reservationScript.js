
var count =0;

addPassenger =() =>{

    count++;

    let slNoTd = document.createElement("td");
    let pnmTd = document.createElement("td");
    let pAgeTd = document.createElement("td");

    slNoTd.textContent=count;
    pnmTd.appendChild(document.createElement("input"));
    pAgeTd.appendChild(document.createElement("input"));

    let pRow = document.createElement("tr");
    pRow.appendChild(slNoTd);
    pRow.appendChild(pnmTd);
    pRow.appendChild(pAgeTd);

    let tbodyElement = document.querySelector("#passengersArea");
    tbodyElement.appendChild(pRow);
}