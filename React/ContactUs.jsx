import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import contactUsSchema from "schemas/contactUsSchema";
import debug from "sabio-debug";
import contactService from "services/contactUsService";
import toastr from "toastr";

const _logger = debug.extend("ContactUs");

function ContactUs() {
  const initialFormData = {
    name: "",
    email: "",
    message: "",
  };
  const [formData, setFormData] = useState(initialFormData);

  function handleSubmit(values) {
    _logger(values);
    contactService
      .contactUs(values)
      .then(onContactUsSuccess)
      .catch(onContactUsError);
  }
  function onContactUsSuccess(response, { resetForm }) {
    _logger("onContactUsSuccess", response);
    toastr.success(
      "Message sent successfully",
      "Thank you for reaching out to our team."
    );
    resetForm();
    setFormData(initialFormData);
  }
  function onContactUsError(error) {
    _logger("onContactUsError", error);
    toastr.error(
      "Could not send your message please try again",
      "Error on submission"
    );
  }

  return (
    <div className="row justify-content-center align-items-center">
      <div className="col-md-5 center">
        <Formik
          enableReinitialize={true}
          initialValues={formData}
          onSubmit={handleSubmit}
          validationSchema={contactUsSchema}
        >
          <Form>
            <div className="col-md-2 w-100">
              <div className="mb-3">
                <p className="lead mb-8"></p>
                <div className="form-control me-2">
                  <p className="row justify-content-center align-items-center fw-bold fs-3">
                    Contact Us
                  </p>
                  <label htmlFor="name">
                    Your Name <span className="text-danger">*</span>
                  </label>
                  <Field
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Your Name"
                    className="form-control"
                  />
                  <ErrorMessage
                    name="name"
                    components="div"
                    className="has-error"
                  />
                </div>
                <div className="form-control">
                  <label htmlFor="email">
                    Your Email <span className="text-danger">*</span>
                  </label>
                  <Field
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Your Email"
                    className="form-control"
                  />
                  <ErrorMessage
                    name="email"
                    components="div"
                    className="has-error"
                  />
                </div>
                <div className="form-control mb-3">
                  <label htmlFor="message" className="form-label">
                    Message
                  </label>
                  <Field
                    as="textarea"
                    id="message"
                    name="message"
                    placeholder="Write Your Message Here"
                    className="form-control"
                    rows="10"
                  />
                  <button type="submit" className="btn btn-primary">
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
}
export default ContactUs;
