import Head from "next/head";
import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import FormStyle from "../styles/Form.module.css";

function ContactForm() {
  const [state, handleSubmit] = useForm("myylkany");
  if (state.succeeded) {
    return (
      <p className={FormStyle.container}>
        <i class="fas fa-check-circle"></i> Thank you for your response, we will
        contact you as fast as possible!
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

      <form onSubmit={handleSubmit} className={FormStyle.container}>
        <label>Name</label>

        <input
          className={FormStyle.input}
          id="name"
          name="name"
          placeholder="Your Name"
        />
        <label>Email Adress</label>

        <input
          className={FormStyle.input}
          id="email"
          type="email"
          name="email"
          placeholder="Your email adress"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />

        <lable>Message</lable>
        <input
          className={FormStyle.textarea}
          as="textarea"
          rows={3}
          id="message"
          name="message"
          placeholder="Write your message..."
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />

        <button
          className={FormStyle.btn}
          type="submit"
          disabled={state.submitting}
        >
          Submit
        </button>
      </form>
    </>
  );
}

export default ContactForm;
