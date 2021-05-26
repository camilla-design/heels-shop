
import Head from 'next/head';

import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FormStyle from '../styles/Form.module.css';

function ContactForm() {
  const [state, handleSubmit] = useForm("myylkany");
  if (state.succeeded) {
    return (
      <p className={FormStyle.container}>
        <i class="fas fa-check-circle"></i> Thank you for your response, we will contact you as fast as possible!
      </p>
    );
  }
  return (
      <>
    <Head>
    <title>Contact</title>
  </Head>
  <h1>Contact</h1>
  <h3>Got any question?</h3>

          
    <Form onSubmit={handleSubmit} className={FormStyle.container}>
      <Form.Label>Name</Form.Label>

      <Form.Control className={FormStyle.input} id="name" name="name" placeholder="Your Name" />
      <Form.Label>Email Adress</Form.Label>

      <Form.Control className={FormStyle.input}
        id="email"
        type="email"
        name="email"
        placeholder="Your email adress"
        
      />
      <ValidationError prefix="Email" field="email" errors={state.errors} />

      <Form.Label>Message</Form.Label>
      <Form.Control className={FormStyle.textarea}
        as="textarea"
        rows={3}
        id="message"
        name="message"
        placeholder="Write your message..."
        
      />
      <ValidationError prefix="Message" field="message" errors={state.errors} />

      <Button className={FormStyle.btn} type="submit" disabled={state.submitting}>
        Submit
      </Button>
    </Form>
    </>
  );
}

export default ContactForm;

