import React from 'react';
import ContactsService from '../services/ContactsService';

export default class ContactForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            contact: {
                cid: 0,
                firstName: '',
                lastName: '',
                mobile: '',
                mail: ''
            },
            isNew: false
        };
    }

    componentDidMount() {
        let cid = this.props.match.params.cid;
        if (cid) {
            this.setState({ isNew: false });
            ContactsService.getContactById(cid)
                .then(
                    (response) => { this.setState({ contact: response.data }); }
                );
        } else {
            this.setState({ isNew: true });
        }
    }

    handleChange = (event) => {
        let changedContact = { ...this.state.contact };
        changedContact[event.target.name] = event.target.value;
        this.setState({ contact: changedContact });
    }

    handleSubmit = (event) => {
        let promise;

        if (this.state.isNew) {
            promise = ContactsService.addContact(this.state.contact);
        } else {
            promise = ContactsService.saveContact(this.state.contact);
        }

        promise.then(() => {
            alert("Contact Saved!");
            this.setState({
                contact: {cid: 0,firstName: '',lastName: '',mobile: '',mail: ''},
                isNew:true
            });
        });
        event.preventDefault();
    }

    render() {
        return (
            <section className="container-fluid p-4">
                <div className="col-sm-6">
                    <form className="form" onSubmit={this.handleSubmit}>
                        
                        <div className="form-group">
                            <label className="form-label">Contact ID</label>
                            <input type="number" className="form-control"
                                value={this.state.contact.cid}
                                name="cid" onChange={this.handleChange} />
                        </div>

                        <div className="form-group">
                            <label className="form-label">First Name</label>
                            <input type="text" className="form-control"
                                value={this.state.contact.firstName}
                                name="firstName" onChange={this.handleChange} />
                        </div>

                        <div className="form-group">
                            <label className="form-label">Last Name</label>
                            <input type="text" className="form-control"
                                value={this.state.contact.lastName}
                                name="lastName" onChange={this.handleChange} />
                        </div>

                        <div className="form-group">
                            <label className="form-label">Mobile</label>
                            <input type="text" className="form-control" 
                                value={this.state.contact.mobile}
                                name="mobile" onChange={this.handleChange} />
                        </div>

                        <div className="form-group">
                            <label className="form-label">Mail Id</label>
                            <input type="email" className="form-control"
                                value={this.state.contact.mail}
                                name="mail" onChange={this.handleChange} />
                        </div>
                        
                        <div className="text-right">
                            <button className="btn btn-lg btn-primary">SAVE</button>
                        </div>

                    </form>
                </div>
            </section>
        );
    }
}