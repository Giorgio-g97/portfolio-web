import React, {useRef} from 'react';
import styles from './Contact.module.css';
import emailjs from '@emailjs/browser';

const Contact = ({contactRef}) => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_lb4w0ih', 'template_ia4ebvw', form.current, {
        publicKey: 'VehyATadkyQIal0fb',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <>
      <section id="contact" className={styles.container}>
        <h1 className="sectionTitle">Contact</h1>
        <form ref={form} onSubmit={sendEmail}>
          <div className="formGroup">
            <label htmlFor="name" hidden>Name</label>
            <input
              type="text"
              id="name"
              name="from_name"
              placeholder="Name"
              required
            />
          </div>
          <div className="formGroup">
            <label htmlFor="email" hidden>Email</label>
            <input
              type="text"
              id="email"
              name="from_email"
              placeholder="Email"
              required
            />
          </div>
          <div className="formGroup">
            <label htmlFor="message" hidden>Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Message"
              required
            />
          </div>
          <button className="hover btn" value="Submit" type="submit">Submit</button>
        </form>
      </section>
    </>
  );
};

export default Contact;
