import React from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import ContactForm from "../components/ContactForm";

const Contact: React.FC = () => {
  const contactInfo = [
    {
      icon: <MapPin size={24} />,
      title: "Location",
      details: "Madrid, Spain",
    },
    {
      icon: <Mail size={24} />,
      title: "Email",
      details: "dorianrkelly@gmail.com",
    },
    {
      icon: <Phone size={24} />,
      title: "Phone",
      details: "+34 684 320 350",
    },
    {
      icon: <Clock size={24} />,
      title: "Working Hours",
      details: "Mon - Fri: 9AM - 5PM",
    },
  ];

  return (
    <div className="py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl font-bold mb-4">Get In Touch</h1>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            I'm always interested in hearing about new projects and
            opportunities. Whether you have a question or just want to say hi,
            feel free to reach out!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {contactInfo.map((info) => (
              <div
                key={info.title}
                className="bg-white dark:bg-primary p-6 rounded-lg shadow-md"
              >
                <div className="text-primary dark:text-secondary-light mb-3">
                  {info.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2">{info.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {info.details}
                </p>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <ContactForm />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="w-full rounded-lg overflow-hidden shadow-md"
        >
          <iframe
            title="Location Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d194347.38440883534!2d-3.819623170898435!3d40.43813108210035!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd422997800a3c81%3A0xc436dec1618c2269!2sMadrid%2C%20Spain!5e0!3m2!1sen!2sus!4v1645000000000!5m2!1sen!2sus"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
