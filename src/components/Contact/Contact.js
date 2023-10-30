import React, { useRef, useState, useEffect } from "react";
import {
  ContactButton,
  ContactForm,
  ContactInput,
  ContactInputMessage,
  ContactItem,
  ContactTitle,
  Container,
  Desc,
  ErrorMessage,
  Title,
  Wrapper,
} from "./ContactStyled";
import { notification } from "antd";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();
  const [formValues, setFormValues] = useState({
    from_email: "",
    from_name: "",
    subject: "",
    message: "",
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [api, contextHolder] = notification.useNotification();

  const messages = {
    success:
      "Your email has been sent successfully! Thank you for your time, you will receive a response back as soon as possible!",
    error: "An error occurred while sending the email. Please try again later.",
  };

  const openNotificationWithIcon = (type) => {
    api[type]({
      message: "Message Notification",
      description: messages[type],
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };
  const validate = (values) => {
    const errors = {};
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    if (!values.from_email) {
      errors.from_email = "Please do not leave the email field empty!";
    } else if (!emailRegex.test(values.from_email)) {
      errors.from_email = "Please enter a valid email address!";
    }
    if (!values.from_name) {
      errors.from_name = "Please do not leave the name field empty!";
    }
    if (!values.subject) {
      errors.subject = "Please do not leave the subject field empty!";
    }
    if (!values.message) {
      errors.message = "Please do not leave the message field empty!";
    }
    return errors;
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      emailjs
        .sendForm(
          "service_ta1v1pm",
          "template_bccmebd",
          form.current,
          "1POGadO4gcFJCiZXy"
        )
        .then(
          (result) => {
            openNotificationWithIcon("success");
            form.current.reset();
            setFormValues({
              ...formValues,
              from_email: "",
              from_name: "",
              subject: "",
              message: "",
            });
          },
          (error) => {
            openNotificationWithIcon("error");
            console.log(error.text);
          }
        );
    }
  }, [formErrors]);

  return (
    <>
      {contextHolder}
      <Container id="contact">
        <Wrapper>
          <Title>Contact</Title>
          <Desc>Do not hesitate to contact me for any reason!</Desc>
          <ContactForm ref={form} onSubmit={handleSubmit}>
            <ContactTitle>Write me an email 📧</ContactTitle>
            <ContactInput
              type="email"
              placeholder="Email"
              name="from_email"
              value={formValues.email}
              onChange={handleChange}
            />
            {formErrors.from_email && (
              <ErrorMessage>{formErrors.from_email}</ErrorMessage>
            )}
            <ContactInput
              type="text"
              placeholder="Name"
              name="from_name"
              value={formValues.username}
              onChange={handleChange}
            />
            {formErrors.from_name && (
              <ErrorMessage>{formErrors.from_name}</ErrorMessage>
            )}
            <ContactInput
              type="text"
              placeholder="Subject"
              name="subject"
              value={formValues.subject}
              onChange={handleChange}
            />
            {formErrors.subject && (
              <ErrorMessage>{formErrors.subject}</ErrorMessage>
            )}
            <ContactInputMessage
              placeholder="Message"
              rows="4"
              name="message"
              value={formValues.message}
              onChange={handleChange}
            />
            {formErrors.message && (
              <ErrorMessage>{formErrors.message}</ErrorMessage>
            )}
            <ContactButton type="submit" value="Send" />
          </ContactForm>
        </Wrapper>
      </Container>
    </>
  );
}

export default Contact;
