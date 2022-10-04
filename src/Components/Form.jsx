import React from "react";
import { useState } from "react";
import { send } from "emailjs-com";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../Styles/SectionTow.css";

function Form() {
  const snotify = () => toast.success("Email sent.");
  const enotify = () => toast.error("Email didn't sent.");
  const [toSend, setToSend] = useState({
    from_name: "",
    to_name: "",
    message: "",
    reply_to: "",
  });

  const onSubmit = (e) => {
    e.preventDefault();
    send("service_tlhc778", "template_745fr69", toSend, "juoAL04a42rFs-7Oa")
      .then((response) => {
        snotify();
      })
      .catch((err) => {
        enotify();
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <h3>Fill the form Below!</h3>
        <input
          type="text"
          name="from_name"
          placeholder="Name"
          value={toSend.from_name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="to_name"
          placeholder="Telephone/whatsapp"
          value={toSend.to_name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="reply_to"
          placeholder="Your email"
          value={toSend.reply_to}
          onChange={handleChange}
        />
        <textarea
          rows="8"
          type="text"
          name="message"
          placeholder="Your message"
          value={toSend.message}
          onChange={handleChange}
        />
        <button type="submit">Send Message</button>
      </form>
      <ToastContainer />
    </div>
  );
}

export default Form;
