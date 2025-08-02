import React, { useRef } from "react";
import emailjs from "emailjs-com";
import "../styles/Contact.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import contactIllustration from "../assets/Connect portfolio.jpg";

const Contact = () => {
  const form = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();

    const formData = {
      user_name: form.current.user_name.value,
      user_email: form.current.user_email.value,
      message: form.current.message.value,
    };

    // 1. Save to MongoDB backend (no toast shown)
    try {
      await fetch(import.meta.env.VITE_BACKEND_URL + "/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
    } catch (err) {
      console.error("Backend save failed:", err);
      // Optional: silently fail or log
    }

    // 2. Send via EmailJS
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          toast.success("✅ Message sent via email!", {
            position: "top-right",
            autoClose: 3000,
            theme: "colored",
          });
        },
        () => {
          toast.error("❌ Email sending failed!", {
            position: "top-right",
            autoClose: 3000,
            theme: "colored",
          });
        }
      );

    e.target.reset();
  };

  return (
    <section id="contact" className="contact-section">
      <h2 className="contact-title">Let's Connect</h2>
      <p className="contact-subtitle">
        I'm always interested in new opportunities and exciting projects. Feel
        free to reach out if you'd like to collaborate or just say hello!
      </p>

      <div className="contact-content">
        <div className="contact-image">
          <img
            src={contactIllustration}
            alt="Contact Illustration"
            loading="lazy"
          />
        </div>

        <form ref={form} onSubmit={sendEmail} className="contact-form" noValidate>
          <input
            type="text"
            name="user_name"
            placeholder="Enter Your Name"
            className="contact-input"
            required
            minLength={3}
          />
          <input
            type="email"
            name="user_email"
            placeholder="Enter Your Email"
            className="contact-input"
            required
          />
          <textarea
            name="message"
            placeholder="Write Your Message Here"
            className="contact-textarea"
            required
            minLength={10}
          ></textarea>

          <button type="submit" className="contact-button-submit">
            Send a Message
          </button>
        </form>
      </div>

      <ToastContainer />
    </section>
  );
};

export default Contact;






// import React, { useRef } from "react";
// import emailjs from "emailjs-com";
// import "../styles/Contact.css";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const Contact = () => {
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm(
//         "service_qudvla6",
//         "template_8z5qbpz",
//         form.current,
//         "QUIoshBzX9cAhMg6B"
//       )
//       .then(
//         () => {
//           toast.success("✅ Message sent successfully!", {
//             position: "top-right",
//             autoClose: 2000,
//             hideProgressBar: false,
//             pauseOnHover: true,
//             draggable: true,
//             theme: "colored",
//           });
//         },
//         () => {
//           toast.error("❌ Failed to send message. Please try again.", {
//             position: "top-right",
//             autoClose: 2000,
//             theme: "colored",
//           });
//         }
//       );

//     e.target.reset();
//   };

//   return (
//     <section id="contact" className="contact-section">
//       <h2 className="contact-title">Let's Connect</h2>
//       <p className="contact-subtitle">
//         I'm always interested in new opportunities and exciting projects. Feel free to reach out if you'd like to collaborate or just say hello!
//       </p>

//       <form ref={form} onSubmit={sendEmail} className="contact-form" noValidate>
//         <input
//           type="text"
//           name="user_name"
//           placeholder="Enter Your Name"
//           className="contact-input"
//           required
//           minLength={3}
//         />
//         <input
//           type="email"
//           name="user_email"
//           placeholder="Enter Your Email"
//           className="contact-input"
//           required
//         />
//         <textarea
//           name="message"
//           placeholder="Enter Your Message"
//           className="contact-textarea"
//           required
//           minLength={10}
//         ></textarea>
//         <button type="submit" className="contact-button">
//           Send Message
//         </button>
//       </form>

//       {/* Toast Notification Container */}
//       <ToastContainer />
//     </section>
//   );
// };

// export default Contact;


// import React, { useRef } from "react";
// import emailjs from "emailjs-com";
// import "../styles/Contact.css";

// const Contact = () => {
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm(
//         "service_qudvla6",     // Replace with your actual EmailJS service ID
//         "template_8z5qbpz",    // Replace with your actual EmailJS template ID
//         form.current,
//         "QUIoshBzX9cAhMg6B"         // Replace with your actual EmailJS public key
//       )
//       .then(
//         (result) => {
//           alert("Message sent successfully!");
//         },
//         (error) => {
//           alert("Failed to send message. Please try again later.");
//         }
//       );

//     e.target.reset();
//   };

//   return (
//     <section id="contact" className="contact-section">
//       <h2 className="contact-title">Let's Connect</h2>
//       <p className="contact-subtitle">
//         I'm always interested in new opportunities and exciting projects. Feel free to reach out if you'd like to collaborate or just say hello!
//       </p>

//       <form ref={form} onSubmit={sendEmail} className="contact-form">
//         <input
//           type="text"
//           name="user_name"
//           placeholder="   Enter Your Name"
//           className="contact-input"
//           required
//         />
//         <input
//           type="email"
//           name="user_email"
//           placeholder="   Enter Your Email"
//           className="contact-input"
//           required
//         />
//         <textarea
//           name="message"
//           placeholder=" Enter Your Message"
//           className="contact-textarea"
//           required
//         ></textarea>
//         <button type="submit" className="contact-button">
//           Send Message
//         </button>
//       </form>
//     </section>
//   );
// };

// export default Contact;
