import React from 'react';
import {Link } from 'react-router-dom';

const ContactRow = (props) => (
    <tr>
        <td>{props.contact.firstName}</td>
        <td>{props.contact.lastName}</td>
        <td>{props.contact.mobile}</td>
        <td>{props.contact.mail}</td>
        <td>
            <Link to={'/edit/'+props.contact._Id} className="btn btn-sm btn-info mr-2">Edit</Link>
            <button className="btn btn-sm btn-danger" value={props.contact._Id} 
            onClick={props.handleDelete}>Delete</button>
        </td>
    </tr>
);

export default ContactRow;