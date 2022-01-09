// For more help visit https://formspr.ee/react-help
import React from 'react';
import './contactform.css'

//Material ui
import TextField from '@mui/material/TextField';


import { useForm, ValidationError } from '@formspree/react';
function ContactForm() {
  const [state, handleSubmit] = useForm("mvolgnlj");
  if (state.succeeded) {
      return <p>Thanks for showing interest!</p>;
  }
  return (
      <form className='contact-form' onSubmit={handleSubmit}>
      <TextField className='contact-form-field' name='name' id='name' type='text'  label="Name" />
      <TextField className='contact-form-field' name='email' id='email' type='email' label="Email" />
      <TextField className='contact-form-field' name='subject' id='subject' type='text' label="Subject" />
      <TextField className='contact-form-field' name='message' id='message' type='text' label="Message" multiline rows={5} />


      <button type="submit" disabled={state.submitting}>
        Submit
      </button>
    </form>
  );
}
function App() {
  return (
    <ContactForm />
  );
}
export default App;