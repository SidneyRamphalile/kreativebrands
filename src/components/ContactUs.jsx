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
    if (!formData.email.trim()) tempErrors.email = "Email is required";
    else if (!emailRegex.test(formData.email))
      tempErrors.email = "Email is invalid";
    if (!formData.phone.trim()) tempErrors.phone = "Phone Number is required";
    if (!formData.subject.trim()) tempErrors.subject = "Subject is required";
    if (!formData.message.trim()) tempErrors.message = "Message is required";

    setErrors(tempErrors);

    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    setErrors((prev) => ({ ...prev, [e.target.name]: "" }));
    setSuccessMsg("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    const form = new FormData();
    form.append("access_key", import.meta.env.VITE_WEB3FORMS_ACCESS_KEY);
    Object.keys(formData).forEach((key) => form.append(key, formData[key]));

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
      className="max-w-6xl mx-auto px-6 py-12 bg-white rounded shadow-md mt-12"
      id="contact"
    >
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left column: Form */}
        <div className="lg:w-1/2 bg-white p-6 rounded shadow">
          <h2 className="text-2xl font-bold mb-6 text-red-600">
            Send Us a Message
          </h2>
          <form onSubmit={handleSubmit} noValidate>
            <InputField
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              error={errors.name}
              required
              placeholder="Your full name"
            />
            <InputField
              label="Company Name"
              name="company"
              value={formData.company}
              onChange={handleChange}
              error={errors.company}
              required
              placeholder="Your company name"
            />
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
            <InputField
              label="Phone Number"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              error={errors.phone}
              required
              placeholder="+27 00 000 0000"
            />
            <InputField
              label="Subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              error={errors.subject}
              required
              placeholder="Subject of your message"
            />
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
            <div className="text-left">
              <button
                type="submit"
                className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded transition-colors duration-300"
              >
                Send Message
              </button>
            </div>
            {successMsg && (
              <p className="mt-4 text-green-600 font-semibold">{successMsg}</p>
            )}
          </form>
        </div>

        {/* Right column: Contact info + map */}
        <div className="lg:w-1/2 flex flex-col gap-6">
          <div className="bg-white p-6 rounded shadow">
            <h2 className="text-2xl font-bold mb-4 text-red-600">
              Contact Info
            </h2>
            <p>
              <strong>Address:</strong> 63 Aliwal Street, Opposite VW, Shop 1
              Inez Court, Bloemfontein, 9301
            </p>
            <p>
              <strong>Phone:</strong> +27 69 668 4616
            </p>
            <p>
              <strong>Email:</strong> info@kreativebrands.co.za
            </p>
            <p>
              <strong>Follow us:</strong>{" "}
              <a
                href="https://www.facebook.com/profile.php?id=61578710158593"
                className="text-blue-600"
                target="_blank"
              >
                Facebook
              </a>{" "}
              |{" "}
              <a
                href="https://www.instagram.com/kreativdesign_print/"
                className="text-pink-500"
                target="_blank"
              >
                Instagram
              </a>
            </p>
          </div>
          <div className="h-80">
            <iframe
              title="Kreativ Design & Print Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3109.0569742687317!2d26.2192425!3d-29.1123284!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1e8fc55cff331189%3A0x2365777c82848f8!2sKreativ%20Design%20%26%20Print!5e1!3m2!1sen!2sza!4v1761555379800!5m2!1sen!2sza"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

// Input component remains the same
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
