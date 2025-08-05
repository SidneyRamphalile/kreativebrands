import React, { useState } from "react";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [successMsg, setSuccessMsg] = useState("");

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validate = () => {
    let tempErrors = {};

    if (!formData.name.trim()) tempErrors.name = "Name is required";
    if (!formData.company.trim())
      tempErrors.company = "Company Name is required";
    if (!formData.email.trim()) {
      tempErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      tempErrors.email = "Email is invalid";
    }
    if (!formData.phone.trim()) tempErrors.phone = "Phone Number is required";
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    const form = new FormData();
    form.append("access_key", import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);
    form.append("name", formData.name);
    form.append("company", formData.company);
    form.append("email", formData.email);
    form.append("phone", formData.phone);
    form.append("subject", formData.subject);
    form.append("message", formData.message);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: form,
      });

      const json = await res.json();

      if (json.success) {
        setSuccessMsg("Thank you for contacting us! We'll be in touch soon.");
        setFormData({
          name: "",
          company: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
        setErrors({});
      } else {
        setSuccessMsg("Oops! Something went wrong. Please try again.");
      }
    } catch (error) {
      setSuccessMsg("Submission failed. Please try again.");
    }
  };

  return (
    <section
      className="max-w-4xl mx-auto px-6 py-12 bg-white rounded shadow-md mt-12"
      id="contact"
    >
      <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">
        Contact Us
      </h2>

      <form onSubmit={handleSubmit} noValidate>
        {/* Name */}
        <InputField
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          error={errors.name}
          required
          placeholder="Your full name"
        />

        {/* Company Name */}
        <InputField
          label="Company Name"
          name="company"
          value={formData.company}
          onChange={handleChange}
          error={errors.company}
          required
          placeholder="Your company name"
        />

        {/* Email */}
        <InputField
          label="Email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          error={errors.email}
          required
          type="email"
          placeholder="you@example.com"
        />

        {/* Phone Number */}
        <InputField
          label="Phone Number"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          error={errors.phone}
          required
          placeholder="+27 00 000 0000"
        />

        {/* Subject */}
        <InputField
          label="Subject"
          name="subject"
          value={formData.subject}
          onChange={handleChange}
          error={errors.subject}
          required
          placeholder="Subject of your message"
        />

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

        {/* Success Message */}
        {successMsg && (
          <p className="mt-4 text-center text-green-600 font-semibold">
            {successMsg}
          </p>
        )}
      </form>
    </section>
  );
};

// Reusable input component
const InputField = ({
  label,
  name,
  value,
  onChange,
  error,
  required = false,
  placeholder,
  type = "text",
}) => (
  <div className="mb-6">
    <label htmlFor={name} className="block mb-2 font-semibold text-gray-700">
      {label}
      {required && <span className="text-red-600">*</span>}
    </label>
    <input
      type={type}
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-red-500 ${
        error ? "border-red-500" : "border-gray-300"
      }`}
    />
    {error && <p className="text-red-600 mt-1 text-sm">{error}</p>}
  </div>
);

export default ContactUs;
