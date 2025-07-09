import { Helmet } from 'react-helmet-async';
import React, { useRef, useState } from "react";
// import emailjs from "emailjs-com";
import emailjs from '@emailjs/browser';

const ContactMe = () => {
  const formRef = useRef();
  const [success, setSuccess] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ex94m43",     // Replace with actual YOUR_SERVICE_ID
        "template_5yn6hqg",    // Replace with actual YOUR_TEMPLATE_ID
        formRef.current,
        "UFLgRUB3KBnkwrw5_"      // Replace with actual YOUR_USER_ID ✅ This is your public key (can also be called "public key" in newer docs)
      )


      .then(
        (result) => {
          console.log("Email sent:", result.text);
          setSuccess(true);
          e.target.reset();
        },
        (error) => {
          console.error("Email error:", error.text);
          setSuccess(false);
        }
      );
  };

  return (
    <>
      <Helmet>
        <title>Mehedi Hasan - Contact</title>
      </Helmet>
    <div className="md:pl-24 mb-16 mt-16 min-h-screen px-6 py-10 bg-base-100 text-base-content">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold mb-4">Contact Me</h2>
        <hr className="border-base-content opacity-30 mb-10" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Left Side */}
          <div>
            <h3 className="text-2xl mb-4">Get in touch</h3>
            <p className="mb-4">
              <span className="font-bold">Email:</span>{" "}
              <a
                href="mailto:dev.hasan10@gmail.com"
                className="underline hover:text-primary"
              >
                dev.hasan10@gmail.com
              </a>
            </p>
            <p className="mb-4">
              <span className="font-bold">Phone:</span> +8801747874773
            </p>
            <p className="mb-4">
              <span className="font-bold">Location:</span> Mymensingh, Bangladesh.
            </p>
            <hr className="border-base-content opacity-30 mb-4" />
            
            <p>
              Feel free to reach out for projects, collaborations, or just a
              friendly chat. I'm open to connecting !
            </p>
          </div>






          {/* Right Side: Form */}
          <form
            ref={formRef}
            onSubmit={sendEmail}
            className="flex flex-col gap-4"
          >
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                name="name"
                placeholder="Name"
                required
                className="flex-1 border border-base-content bg-transparent px-4 py-3 outline-none focus:ring focus:ring-primary"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                required
                className="flex-1 border border-base-content bg-transparent px-4 py-3 outline-none focus:ring focus:ring-primary"
              />
            </div>
            <textarea
              name="message"
              rows="6"
              placeholder="Message"
              required
              className="border border-base-content bg-transparent px-4 py-3 outline-none focus:ring focus:ring-primary"
            ></textarea>
            <button
              type="submit"
              className="btn btn-outline border-base-content text-base-content hover:bg-primary hover:text-white"
            >
              Send
            </button>

            {success === true && (
              <p className="text-success mt-2">Message sent successfully!</p>
            )}
            {success === false && (
              <p className="text-error mt-2">Failed to send. Try again.</p>
            )}
          </form>
        </div>
      </div>
    </div>
    </>
  );
};

export default ContactMe;
