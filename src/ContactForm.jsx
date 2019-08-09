import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class ContactForm extends Component {

  handleSubmit = (values) => {
    // Do something with the form values
    console.log(values);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="firstName">First Name</label>&nbsp;
          <Field name="firstName" component="input" type="text"/>
        </div><br/>
        <div>
          <label htmlFor="lastName">Last Name</label>&nbsp;
          <Field name="lastName" component="input" type="text"/>
        </div><br/>
        <div>
          <label htmlFor="email">Email</label>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          <Field name="email" component="input" type="email"/>
        </div><br/>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

// Decorate the form component
ContactForm = reduxForm({
  form: 'contact' // a unique name for this form
})(ContactForm);

export default ContactForm;