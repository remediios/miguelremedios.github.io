import { useEffect, useRef, useState } from 'react';
import {
  ContactButton,
  ContactForm,
  ContactInput,
  ContactInputMessage,
  ContactTitle,
  Container,
  Desc,
  ErrorMessage,
  Title,
  Wrapper,
} from './style';
import emailjs from '@emailjs/browser';

interface FormValues {
  from_email: string;
  from_name: string;
  subject: string;
  message: string;
}

interface FormErrors {
  from_email: string;
  from_name: string;
  subject: string;
  message: string;
}

const validate = (values: FormValues): Partial<FormErrors> => {
  const errors: Partial<FormErrors> = {};
  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

  if (!values.from_email) {
    errors.from_email = 'Please do not leave the email field empty!';
  } else if (!emailRegex.test(values.from_email)) {
    errors.from_email = 'Please enter a valid email address!';
  }
  if (!values.from_name) {
    errors.from_name = 'Please do not leave the name field empty!';
  }
  if (!values.subject) {
    errors.subject = 'Please do not leave the subject field empty!';
  }
  if (!values.message) {
    errors.message = 'Please do not leave the message field empty!';
  }

  return errors;
};

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [formValues, setFormValues] = useState<FormValues>({
    from_email: '',
    from_name: '',
    subject: '',
    message: '',
  });

  const [formErrors, setFormErrors] = useState<Partial<FormErrors>>({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [successMsg, setSuccessMsg] = useState(false);

  const handleChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    const sendEmail = async () => {
      try {
        if (Object.keys(formErrors).length === 0 && isSubmit) {
          if (form.current) {
            await emailjs.sendForm(
              'service_ta1v1pm',
              'template_bccmebd',
              form.current,
              '1POGadO4gcFJCiZXy'
            );
            setFormValues({
              from_email: '',
              from_name: '',
              subject: '',
              message: '',
            });
            form.current?.reset();
            setIsSubmit(false);
            setSuccessMsg(true);
          } else {
            console.error('Form reference is null');
          }
        }
      } catch (error) {
        if (error instanceof Error) {
          console.log(error.message);
        } else {
          console.log('Unknown error occurred');
        }
      }
    };
    setSuccessMsg(false);
    sendEmail();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formErrors]);

  return (
    <Container id="contact">
      <Wrapper>
        <Title>Contact</Title>
        <Desc>Please send any enquiries by filling the form below</Desc>
        <ContactForm ref={form} onSubmit={(e) => handleSubmit(e)}>
          <ContactTitle>Write me an email 📧</ContactTitle>
          {successMsg && (
            <p style={{ color: 'lime', paddingBottom: '10px' }}>
              Your message was sent successfully!
            </p>
          )}
          <ContactInput
            type="email"
            placeholder="Email"
            name="from_email"
            value={formValues.from_email}
            onChange={(e) => handleChange(e)}
          />
          {formErrors.from_email && (
            <ErrorMessage>{formErrors.from_email}</ErrorMessage>
          )}
          <ContactInput
            type="text"
            placeholder="Name"
            name="from_name"
            value={formValues.from_name}
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
            rows={4}
            name="message"
            value={formValues.message}
            onChange={(e) => handleChange(e)}
          />
          {formErrors.message && (
            <ErrorMessage>{formErrors.message}</ErrorMessage>
          )}
          <ContactButton type="submit" value="Send" />
        </ContactForm>
      </Wrapper>
    </Container>
  );
};

export default Contact;
