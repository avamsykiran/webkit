
var productsCount=0;
var totalAmt=0;

$(function(){
    $("#addBtn").click(addRow);
});

addRow = () => {
    
    productsCount++;

    let cols = [];

    let row = $("<tr></tr>");

    for(let i=0;i<6;i++){
        cols.push($("<td></td>"));
        row.append(cols[i]);
    }

    let tbPnm = $("#tbPnm");
    let tbQty = $("#tbQty");
    let tbRate = $("#tbRate");

    let amt = tbQty.val() * tbRate.val();
    totalAmt += amt;

    cols[0].text(productsCount);
    cols[1].text(tbPnm.val());
    cols[2].text(tbQty.val());
    cols[3].text(tbRate.val())
    cols[4].text(amt);
    
    tbPnm.val("");
    tbQty.val("");
    tbRate.val("");

    $("#countSpan").text(productsCount);
    $("#totalAmt").text(totalAmt);

    $("#prdsArea").append(row);
}