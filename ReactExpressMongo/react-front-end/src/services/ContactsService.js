import axios from 'axios';

const apiUrl = "http://localhost:4545/contacts";

export default class ContactsService {

    static getAllContacts() {
        return axios.get(apiUrl);
    }

    static getContactById(cid) {
        return axios.get(`${apiUrl}/${cid}`);
    }

    static addContact(contact) {
        return axios.post(apiUrl, contact);
    }

    static saveContact(contact) {
        return axios.put(apiUrl, contact);
    } 

    static deleteContact(cid) {
        return axios.delete(`${apiUrl}/${cid}`);
    }
}