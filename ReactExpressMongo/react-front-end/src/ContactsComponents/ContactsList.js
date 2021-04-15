import React from 'react';
import ContactsService from '../services/ContactsService';
import ContactsTable from './ContactsTable';
import ErrorCard from './ErrorCard';

export default class ContactsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            contacts: null,
            err: null
        };

        this.handleDelete = this.handleDelete.bind(this);
    }

    loadData(){
        ContactsService.getAllContacts()
        .then(
            (response) => {
                this.setState({ contacts: response.data });
            }
        ).catch(
            (err) => {
                this.setState({ err: 'Unable To Reach The Data Server..!' });
            }
        );
    }

    componentDidMount() {
      this.loadData();
    }

    handleDelete(event){
        let cid=event.target.value;
        ContactsService.deleteContact(cid)
        .then(
            ()=>{
               this.loadData();
            }
        );
    }

    render() {
        let { contacts, err } = this.state;

        let resultantDom;

        if (err) {
            resultantDom = <ErrorCard errText={err} />
        } else if (contacts) {
            resultantDom = <ContactsTable contacts={contacts} handleDelete={this.handleDelete}/>
        } else {
            resultantDom = <p>Loading...</p>
        }

        return resultantDom;
    }
}