import React, { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [successMsg, setSuccessMsg] = useState("");

  // Simple email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validate = () => {
    let tempErrors = {};

    if (!formData.name.trim()) tempErrors.name = "Name is required";
    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      tempErrors.email = "Email is invalid";
    }
    if (!formData.subject.trim()) tempErrors.subject = "Subject is required";
    if (!formData.message.trim()) tempErrors.message = "Message is required";

    setErrors(tempErrors);

    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
    setSuccessMsg("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) return;

    // Placeholder for submission logic, e.g. API call
    console.log("Form submitted", formData);

    setSuccessMsg("Thank you for contacting us! We will get back to you soon.");
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <section
      id="contact"
      className="max-w-4xl mx-auto px-6 py-12 bg-white rounded shadow-md mt-12"
    >
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">
        Contact Us
      </h2>

      <form onSubmit={handleSubmit} noValidate>
        {/* Name */}
        <div className="mb-6">
          <label
            htmlFor="name"
            className="block mb-2 font-semibold text-gray-700"
          >
            Name<span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-red-500 ${
              errors.name ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Your full name"
          />
          {errors.name && (
            <p className="text-red-600 mt-1 text-sm">{errors.name}</p>
          )}
        </div>

        {/* Email */}
        <div className="mb-6">
          <label
            htmlFor="email"
            className="block mb-2 font-semibold text-gray-700"
          >
            Email<span className="text-red-600">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-red-500 ${
              errors.email ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="you@example.com"
          />
          {errors.email && (
            <p className="text-red-600 mt-1 text-sm">{errors.email}</p>
          )}
        </div>

        {/* Subject */}
        <div className="mb-6">
          <label
            htmlFor="subject"
            className="block mb-2 font-semibold text-gray-700"
          >
            Subject<span className="text-red-600">*</span>
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-red-500 ${
              errors.subject ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Subject of your message"
          />
          {errors.subject && (
            <p className="text-red-600 mt-1 text-sm">{errors.subject}</p>
          )}
        </div>

        {/* Message */}
        <div className="mb-6">
          <label
            htmlFor="message"
            className="block mb-2 font-semibold text-gray-700"
          >
            Message<span className="text-red-600">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            className={`w-full px-4 py-2 border rounded resize-y focus:outline-none focus:ring-2 focus:ring-red-500 ${
              errors.message ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Write your message here..."
          />
          {errors.message && (
            <p className="text-red-600 mt-1 text-sm">{errors.message}</p>
          )}
        </div>

        {/* Submit */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-8 rounded transition-colors duration-300"
          >
            Send Message
          </button>
        </div>

        {/* Success message */}
        {successMsg && (
          <p className="mt-4 text-center text-green-600 font-semibold">
            {successMsg}
          </p>
        )}
      </form>
    </section>
  );
};

export default ContactUs;
