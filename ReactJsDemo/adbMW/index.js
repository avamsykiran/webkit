let express = require('express');
let bp = require('body-parser');
let cors = require('cors');
let fs = require('fs');

const adbDataFile = "./adb.json";
let adbData = null;

const loadData = (successCalllBack, errCallBack) => {
    fs.readFile(adbDataFile, (err, data) => {
        if (err) {
            errCallBack(err);
        } else {
            successCalllBack(JSON.parse(data));
        }
    });
}

const writeData = (sucessCalllBack, errCallBack) => {
    fs.writeFile(adbDataFile, JSON.stringify(adbData), (err) => {
        if (err) {
            errCallBack(err);
        } else {
            sucessCalllBack();
        }
    });
}

const parseReqToContact = (req) => ({
    cid: req.body.cid,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    mobile: req.body.mobile,
    mail: req.body.mail
});

let adbAppServer = express();

adbAppServer.use(bp.json()); //to enable json parsing to and fro
adbAppServer.use(bp.urlencoded({ extended: true })); // to enable special chars encoded in req
adbAppServer.use(cors()); //to enable cross origin reqs

/**to send a defualt message for a get request to the application root context*/
adbAppServer.get('/', (req, resp) => {
    resp.send('You have reached the root of address book application server!');
});

/**a get reqeust handler to url /contacts should send all contacts */
adbAppServer.get('/contacts', (req, resp) => {
    resp.send(adbData['contacts']);
});

/**a get reqeust handler to url /contacts/:cid should send contact with that cid */
adbAppServer.get('/contacts/:cid', (req, resp) => {
    let contact = adbData['contacts'].find((c) => c.cid == req.params.cid);
    if (contact) {
        resp.send(contact);
    } else {
        resp.status(404); //resource not found
        resp.end();
    }
});

/**a delete reqeust handler to url /contacts/:cid should delete contact with that cid */
adbAppServer.delete('/contacts/:cid', (req, resp) => {
    let contactIndex = adbData['contacts'].findIndex((c) => c.cid == req.params.cid);
    if (contactIndex > -1) {
        adbData['contacts'].splice(contactIndex, 1); //will delete that 1 contact.
        writeData(()=>{
            resp.status(200);
            resp.end();
        },
        (err)=>{
            console.log(err);
            resp.status(500);
            resp.end();
        });
    } else {
        resp.status(404); //resource not found
        resp.end();
    }
});

/**a put reqeust handler to url /contacts should update a contact */
adbAppServer.put('/contacts', (req, resp) => {
    let contact = parseReqToContact(req);
    let contactIndex = adbData['contacts'].findIndex((c) => c.cid == contact.cid);
    if (contactIndex > -1) {
        adbData['contacts'][contactIndex] = contact;
        writeData(()=>{
            resp.status(200);
            resp.end();
        },
        (err)=>{
            console.log(err);
            resp.status(500);
            resp.end();
        });
    } else {
        resp.status(404); //resource not found
        resp.end();
    }
});

/**a post reqeust handler to url /contacts should insert a contact */
adbAppServer.post('/contacts', (req, resp) => {
    let contact = parseReqToContact(req);
    let contactIndex = adbData['contacts'].findIndex((c) => c.cid == contact.cid);
    if (contactIndex > -1) {
        resp.status(505); //duplicate resource
        resp.end();
    } else {
        adbData['contacts'].push(contact);
        writeData(()=>{
            resp.status(200);
            resp.end();
        },
        (err)=>{
            console.log(err);
            resp.status(500);
            resp.end();
        });
    }
});

/**To assign a port and start the server */
const PORT = 5454;
adbAppServer.listen(PORT, () => {
    console.log('Address Book Server Statred @ 5454...');
    loadData(
        (data)=>{
            adbData=data;
        },
        (err)=>{
            console.log(err);
        }
    );
});