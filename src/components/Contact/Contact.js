import React from "react";
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
import { notification, Form } from "antd";
import emailjs from "@emailjs/browser";

function Contact() {
  const [form] = Form.useForm();

  const onFinish = (e) => {
    console.log("Success:", e);

    emailjs.sendForm("", "YOUR_TEMPLATE_ID", e.target, "YOUR_USER_ID").then(
      (result) => {
        console.log("Email sent successfully:", result.text);
        openNotificationWithIcon("success");
        form.resetFields();
      },
      (error) => {
        console.log("Email sending failed:", error.text);
        //   openNotificationWithIcon("error");
      }
    );
  };

  const [api, contextHolder] = notification.useNotification();
  const openNotificationWithIcon = (type) => {
    api[type]({
      message: "Message Notification",
      description:
        "Your email has been sent successfully! Thank you for your time, you will receive a response back as soon as possible!",
    });
  };

  return (
    <>
      {contextHolder}
      <Container>
        <Wrapper>
          <Title>Contact</Title>
          <Desc>Do not hesitate to contact me for any reason!</Desc>

          <ContactForm form={form} name="contact-form" onFinish={onFinish}>
            <ContactTitle>Write me an email 📧</ContactTitle>
            <ContactItem
              name="from_email"
              rules={[
                {
                  type: "email",
                  message: "Must be a valid email address @!",
                },
                {
                  required: true,
                  message: "Please input your email address!",
                },
              ]}
            >
              <ContactInput placeholder="Email" />
            </ContactItem>
            <ContactItem
              name="from_name"
              rules={[
                {
                  required: true,
                  message: "Please input your name!",
                },
              ]}
            >
              <ContactInput placeholder="Name" />
            </ContactItem>
            <ContactItem
              name="subject"
              rules={[
                {
                  required: true,
                  message: "Please input the subject!",
                },
              ]}
            >
              <ContactInput placeholder="Subject" />
            </ContactItem>
            <ContactItem
              name="message"
              rules={[
                {
                  required: true,
                  message: "Please input the message!",
                },
              ]}
            >
              <ContactInputMessage placeholder="Message" rows={4} />
            </ContactItem>
            <ContactItem>
              <ContactButton type="primary" htmlType="submit">
                Send message
              </ContactButton>
            </ContactItem>
          </ContactForm>
        </Wrapper>
      </Container>
    </>
  );
}

export default Contact;
