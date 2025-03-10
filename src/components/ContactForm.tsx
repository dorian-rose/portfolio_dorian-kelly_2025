import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const serviceId = import.meta.env.VITE_EMAIL_SERVICE_ID;
  const templateId = import.meta.env.VITE_EMAIL_TEMPLATE_ID;
  const publicKey = import.meta.env.VITE_EMAIL_PUBLIC_KEY;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs
      .send(serviceId, templateId, formData, {
        publicKey: publicKey,
      })
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setIsSubmitting(false);
          setSubmitSuccess(true);
          setFormData({ name: "", email: "", subject: "", message: "" });
        },
        (err) => {
          console.log("FAILED...", err);
          setIsSubmitting(false);
          setSubmitError(true);
          setFormData({ name: "", email: "", subject: "", message: "" });
        }
      );
    setTimeout(() => {
      setSubmitSuccess(false);
      setSubmitError(false);
    }, 5000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-white dark:bg-primary rounded-lg shadow-md p-8"
    >
      {submitSuccess || submitError ? (
        <div className="text-center py-8">
          {submitSuccess && (
            <>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4"
              >
                <svg
                  className="w-8 h-8 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </motion.div>
              <h3 className="text-xl font-bold mb-2">Message Sent!</h3>
              <p className="text-black dark:text-secondary-light">
                Thank you for reaching out. I'll get back to you as soon as
                possible.
              </p>
            </>
          )}
          {submitError && (
            <>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center mx-auto mb-4"
              >
                <svg
                  className="w-8 h-8 text-green-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </motion.div>
              <h3 className="text-xl font-bold mb-2">
                There was an error sending message.
              </h3>
              <p className="text-black dark:text-secondary-light">
                Please try again later,{" "}
                <a
                  href="mailto:dorianrkelly@gmail.com"
                  className="cursor-pointer text-primary dark:text-secondary-light hover:text-secondary dark:hover:text-secondary-medium transition-colors"
                >
                  send me an email
                </a>{" "}
                or{" "}
                <a
                  href="tel:+34684320350"
                  className="cursor-pointer text-primary dark:text-secondary-light hover:text-secondary dark:hover:text-secondary-medium transition-colors"
                >
                  give me a call
                </a>
                .
              </p>
            </>
          )}
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-black dark:text-secondary-light mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-secondary-medium dark:border-secondary rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:bg-primary dark:text-white"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-black dark:text-secondary-light mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-secondary-medium dark:border-secondary rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:bg-primary dark:text-white"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="subject"
              className="block text-sm font-medium text-black dark:text-secondary-light mb-2"
            >
              Subject
            </label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-secondary-medium dark:border-secondary rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:bg-primary dark:text-white"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="block text-sm font-medium text-black dark:text-secondary-light mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-2 border border-secondary-medium dark:border-secondary rounded-md focus:outline-none focus:ring-2 focus:ring-primary dark:bg-primary dark:text-white"
            ></textarea>
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-primary dark:bg-gray-800 hover:bg-opacity-90 text-white font-medium py-2 px-4 rounded-md transition-colors duration-300 flex items-center justify-center"
          >
            {isSubmitting ? (
              <svg
                className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
            ) : (
              <Send size={18} className="mr-2" />
            )}
            {isSubmitting ? "Sending..." : "Send Message"}
          </button>
        </form>
      )}
    </motion.div>
  );
};

export default ContactForm;
