import React from "react";
import * as Yup from "yup";
import { Form } from "formik";
import styled from "styled-components";
import FormikContainer from "./common/Forms/FormikContainer";
import FormikControl from "./common/Forms/FormikControl";

function ContactForm() {
  const initialValues = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    email: Yup.string().email("Invalid Email").required("Required"),
    subject: Yup.string().required("Required"),
    message: Yup.string().required("Required"),
  });

  const onSubmit = (values) => {
    console.log("Form data", values);
  };

  return (
    <ContactWrapper>
      <FormikContainer
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {(formik) => {
          return (
            <Form>
              <FormikControl
                control="input"
                type="name"
                label="Name"
                name="name"
              />
              <FormikControl
                control="input"
                type="email"
                label="Email"
                name="email"
              />
              <FormikControl
                control="input"
                type="subject"
                label="Subject"
                name="subject"
              />
              <FormikControl
                control="textarea"
                type="message"
                label="Message"
                name="message"
              />
              <button type="submit">Submit</button>
            </Form>
          );
        }}
      </FormikContainer>
    </ContactWrapper>
  );
}

const ContactWrapper = styled.div`
  background-color: var(--white);
  margin-bottom: 2rem;
  .contact form {
    padding: 3rem 8rem;
  }

  .form-control {
    display: flex;
    flex-direction: column;
    padding-bottom: 2rem;
    border: none !important;
    font-size: 1.6rem;
  }

  label {
    display: block;
    font-weight: 700;
    margin-bottom: 1rem;
  }

  input {
    padding: 1.5rem 1rem;
    width: 45rem;
    border-radius: 5px;
    box-shadow: 1px 0.5px 4px var(--primaryColor);
    border: none;
    font-size: 1.6rem;
  }

  textarea {
    height: 15rem;
    width: 50rem;
    border-radius: 5px;
    box-shadow: 1px 0.5px 4px var(--primaryColor);
    border: none;
    padding: 1.5rem 1rem;
    font-size: 1.6rem;
  }

  button {
    padding: 1rem 2rem;
    text-transform: uppercase;
    font-family: "roboto";
    font-size: 1.6rem;
    color: var(--offWhite);
    background-color: var(--secondaryColor);
    cursor: pointer;
    border: none;
    border-radius: 5px;
    box-shadow: 1px 2px 4px var(--black);
    transition: all 0.3s;
  }

  button:hover,
  button:active {
    box-shadow: 1px 1px 2px var(--black);
    background-color: var(--offWhite-2);
    color: var(--secondaryColor);
  }

  .error {
    color: rgb(170, 27, 27);
    margin-top: 0.5rem;
  }

  @media (max-width: 1024px) {
    input {
      width: 35rem;
    }

    textarea {
      width: 35rem;
    }
  }

  @media (max-width: 992px) {
  }

  @media (max-width: 768px) {
    .contact form {
      padding: 2rem !important;
    }

    input {
      width: 100%;
    }

    textarea {
      width: 100%;
    }
  }

  @media (max-width: 576px) {
  }
`;

export default ContactForm;
