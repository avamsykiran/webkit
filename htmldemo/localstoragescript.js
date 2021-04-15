
let loadData = () => {

    let tbodyEle = document.querySelector("#contactsDisplay>tbody");

    if(tbodyEle){
        tbodyEle.remove();
    }

    tbodyEle = document.createElement("tbody");

    let contactsStr = localStorage.getItem("contacts");

    if(!contactsStr){
        let row = document.createElement("tr");
        let col = document.createElement("td");
        col.colSpan=3;
        col.textContent="No Records Found";
        row.appendChild(col);
        tbodyEle.appendChild(row);
    }else{
        let contacts = JSON.parse(contactsStr);
        for(let contact of contacts){
            let row = document.createElement("tr");
            let col1 = document.createElement("td");
            let col2 = document.createElement("td");
            let col3 = document.createElement("td");

            col1.textContent=contact.firstName;
            col2.textContent=contact.lastName;
            col3.textContent=contact.contactNumber;

            row.appendChild(col1);
            row.appendChild(col2);
            row.appendChild(col3);
            tbodyEle.appendChild(row);
        }
    }

    document.querySelector("#contactsDisplay").appendChild(tbodyEle);
}

let addContact = () => {

    let txtFnm = document.querySelector("#fnm");
    let txtLnm = document.querySelector("#lnm");
    let txtCno = document.querySelector("#cno");

    let contact = {firstName:txtFnm.value,lastName:txtLnm.value,contactNumber:txtCno.value};

    txtFnm.value="";    
    txtLnm.value="";
    txtCno.value="";

    let contacts = [];
    let contactsStr = localStorage.getItem("contacts");

    if(contactsStr){
        contacts = JSON.parse(contactsStr);
    }

    contacts.push(contact);

    localStorage.setItem("contacts",JSON.stringify(contacts));
    loadData();
}

let clearAll = () => {
    localStorage.clear();
    loadData();
}