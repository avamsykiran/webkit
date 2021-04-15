
var productsCount=0;
var totalAmt=0;

addRow = () => {
    
    productsCount++;

    let cols = [];

    let row = document.createElement("tr");

    for(let i=0;i<6;i++){
        cols.push(document.createElement("td"));
        row.appendChild(cols[i]);
    }

    let tbPnm = document.querySelector("#tbPnm");
    let tbQty = document.querySelector("#tbQty");
    let tbRate = document.querySelector("#tbRate");

    let amt = parseInt(tbQty.value) * parseFloat(tbRate.value);
    totalAmt += amt;

    cols[0].textContent=productsCount;
    cols[1].textContent=tbPnm.value;
    cols[2].textContent=tbQty.value;
    cols[3].textContent=tbRate.value;
    cols[4].textContent=amt;
    
    tbPnm.value="";
    tbQty.value="";
    tbRate.value="";

    document.querySelector("#countSpan").textContent=productsCount;
    document.querySelector("#totalAmt").textContent=totalAmt;

    let prdAreElement = document.querySelector("#prdsArea");
    prdAreElement.appendChild(row);
}