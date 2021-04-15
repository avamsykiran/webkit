import React from 'react';
import ContactRow from './ContactRow';

const ContactsTable = (props) => (
    <section className="container-fluid p-4">
        <table className="table table-bordered">
            <thead>
                <tr>
                    <th>Contact#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Mobile</th>
                    <th>Mail Id</th>
                </tr>
            </thead>
            <tbody>
                {props.contacts.map( c => 
                        <ContactRow key={c.cid} contact={c} handleDelete={props.handleDelete} />
                    )
                }
            </tbody>
        </table>
    </section>
);

export default ContactsTable;