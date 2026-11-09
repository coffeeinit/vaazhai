import React, { useState } from 'react';
import { motion} from 'framer-motion';
import { Mail, Phone, MapPin, Send, MessageCircle, Clock, Globe } from 'lucide-react';
import FAQ from './FAQ';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: <MapPin className="h-6 w-6 text-emerald-600" />,
      title: 'Office Address',
      info: 'Tenkasi, Tamil Nadu, India',
      description: 'Our main office is located in the heart of Tenkasi, serving entrepreneurs across South India.'
    },
    {
      icon: <Mail className="h-6 w-6 text-emerald-600" />,
      title: 'Email',
      info: 'hello@vaazhai.org',
      description: 'For general inquiries, partnerships, and program applications.'
    },
    {
      icon: <Phone className="h-6 w-6 text-emerald-600" />,
      title: 'Phone',
      info: '+91 9787030811',
      description: 'Available Monday to Friday, 9 AM to 6 PM IST.'
    },
    {
      icon: <Globe className="h-6 w-6 text-emerald-600" />,
      title: 'Website',
      info: 'www.vaazhai.org',
      description: 'Visit our website for detailed program information and online applications.'
    }
  ];

  const subjects = [
    'General Inquiry',
    'Startup Application',
    'Partnership Opportunity',
    'Mentorship Interest',
    'Media & Press',
    'Other'
  ];

  return (
    <div className="min-h-screen ">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="flex justify-center mb-6">
              <MessageCircle className="h-16 w-16 text-emerald-600" />
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-8">Let's Start a Conversation</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Ready to turn your idea into reality? Have questions about our programs? Want to partner with us? We'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors duration-200"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors duration-200"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors duration-200"
                  >
                    <option value="">Select a subject</option>
                    {subjects.map((subject) => (
                      <option key={subject} value={subject}>
                        {subject}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors duration-200 resize-none"
                    placeholder="Tell us about your idea, questions, or how we can help..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-emerald-600 text-white px-8 py-4 rounded-xl hover:bg-emerald-700 transition-all duration-200 font-semibold flex items-center justify-center group"
                >
                  Send Message
                  <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                </button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Get in Touch</h2>
              
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex items-start space-x-4 p-6 bg-gray-50 rounded-2xl hover:shadow-lg transition-all duration-300">
                    <div className="flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                      <p className="text-gray-600 font-medium">{item.info}</p>
                      <p className="text-gray-500 text-sm mt-1">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-emerald-50 p-8 rounded-2xl">
                <div className="flex items-center mb-4">
                  <Clock className="h-6 w-6 text-emerald-600 mr-3" />
                  <h3 className="font-semibold text-emerald-800">Response Time</h3>
                </div>
                <p className="text-emerald-700 leading-relaxed">
                  We typically respond to all inquiries within 24-48 hours. For urgent matters, please mention it in your message.
                </p>
              </div>

              <div className="bg-blue-50 p-8 rounded-2xl">
                <h3 className="font-semibold text-blue-800 mb-4">Ready to Apply?</h3>
                <p className="text-blue-700 leading-relaxed mb-4">
                  If you're ready to start your entrepreneurial journey with us, we'd love to learn more about your idea and vision.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <button className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-all duration-200 font-semibold text-sm">
                    Apply Now
                  </button>
                  <button className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-200 font-semibold text-sm">
                    Learn More
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section (Placeholder) */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Find Us</h2>
            <p className="text-gray-600">
              Located in the heart of Tenkasi, Tamil Nadu, we're building a thriving startup ecosystem in South India.
            </p>
          </motion.div>
          
          <div className="bg-gradient-to-br from-emerald-100 to-teal-100 rounded-2xl h-96 flex items-center justify-center">
            <div className="text-center">
              <MapPin className="h-16 w-16 text-emerald-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Tenkasi, Tamil Nadu</h3>
              <p className="text-gray-600">Interactive map coming soon</p>
            </div>
          </div>
        </div>
      </section>
      <FAQ />
    </div>
  );
};

export default Contact;