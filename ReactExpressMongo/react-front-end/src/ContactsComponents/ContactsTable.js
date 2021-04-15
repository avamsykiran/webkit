import React from 'react';
import ContactRow from './ContactRow';

const ContactsTable = (props) => (
    <section className="contaienr-fluide p-4">
        <table className="table table-bordered">
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Mobile</th>
                    <th>Mail Id</th>
                </tr>
            </thead>
            <tbody>
                {props.contacts.map( c => 
                        <ContactRow key={c._Id} contact={c} handleDelete={props.handleDelete} />
                    )
                }
            </tbody>
        </table>
    </section>
);

export default ContactsTable;