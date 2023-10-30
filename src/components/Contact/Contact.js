import React, { useRef } from "react";
import {
  ContactButton,
  ContactForm,
  ContactInput,
  ContactInputMessage,
  ContactItem,
  ContactTitle,
  Container,
  Desc,
  Title,
  Wrapper,
} from "./ContactStyled";
import { notification } from "antd";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();
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

  const handleSubmit = (e) => {
    e.preventDefault();
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
        },
        (error) => {
          openNotificationWithIcon("error");
          console.log(error.text);
        }
      );
  };

  return (
    <>
      {contextHolder}
      <Container id="contact">
        <Wrapper>
          <Title>Contact</Title>
          <Desc>Do not hesitate to contact me for any reason!</Desc>
          <ContactForm ref={form} onSubmit={handleSubmit}>
            <ContactTitle>Write me an email 📧</ContactTitle>
            <ContactInput type="email" placeholder="Email" name="from_email" />
            <ContactInput type="text" placeholder="Name" name="from_name" />
            <ContactInput type="text" placeholder="Subject" name="subject" />
            <ContactInputMessage
              placeholder="Message"
              rows="4"
              name="message"
            />
            <ContactButton type="submit" value="Send" />
          </ContactForm>
        </Wrapper>
      </Container>
    </>
  );
}

export default Contact;
