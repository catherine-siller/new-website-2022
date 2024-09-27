import React, { useRef, useState } from "react";
import "./Form.css";

const Form = () => {
  // create a Ref to access our form element
  const formRef = useRef(null);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const sendFormData = async (event) => {
    // this will prevent your form to redirect to another page.
    event.preventDefault();

    if (!formRef.current) {
      console.log("something wrong with form ref");
      return;
    }

    // get our form data
    const formData = new FormData(formRef.current);

    // add some additional data if you want
    // formData.append('language', window.navigator.language)

    fetch("https://formcarry.com/s/YOno0K5yaQr", {
      method: "POST",
      body: formData,
      headers: {
        // you don't have to set Content-Type
        // otherwise it won't work due to boundary!
        Accept: "application/json",
      },
    })
      // convert response to json
      .then((r) => r.json())
      .then((res) => {
        console.log(res.code);
      });
    setSuccess(true);
  };

  return (
    // bind formRef to our form element
    <>
      <form ref={formRef} onSubmit={sendFormData}>
        <label htmlFor="nameInput">Full name*</label>
        <input type="text" id="nameInput" name="name" required />

        <label htmlFor="emailInput">Email address*</label>
        <input type="email" id="emailInput" name="name" required />

        <label htmlFor="messageInput">
          Tell me a little about your project + business!*
        </label>
        <textarea id="messageInput" name="message" required></textarea>

        <button type="submit">Send</button>
      </form>

      {success && (
        <div className="successMessage">
          {"Thank you for reaching out, I will contact you soon!"}
        </div>
      )}
    </>
  );
};

export default Form;
