import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What is Vaazhai Ventures?",
      answer: "Vaazhai Ventures is a startup incubator that supports early-stage entrepreneurs with personalized mentorship, deep values, and practical support to build businesses that matter. We focus on rural and underrepresented founders, offering a 0% equity model to ensure founders retain full ownership of their ventures."
    },
    {
      question: "Who can apply to Vaazhai's incubation program?",
      answer: "We welcome applications from first-time founders and early-stage entrepreneurs, tech-enabled startups or small business innovators, and founders with scalable ideas and social, economic, or environmental impact. Whether you're from a rural background, a college graduate, or a founder from an underrepresented community—we're here for you. We particularly encourage applications from Tier 2 and Tier 3 cities."
    },
    {
      question: "What support does Vaazhai Ventures offer to startups?",
      answer: "We provide personalized 1:1 mentorship from industry experts, business model refinement and market validation support, workshops on branding, pitch decks, product design, and GTM strategy, access to a collaborative peer network and demo days, and connections to potential investors and partners. Our programs are available in English, Tamil, and hybrid formats."
    },
    {
      question: "Is Vaazhai Ventures only for tech startups?",
      answer: "While we have a strong focus on tech-enabled ventures, we also support innovative small businesses and social impact startups in sectors like education, rural entrepreneurship, creative industries, and digital services. We believe great ideas can come from any sector."
    },
    {
      question: "Is funding guaranteed for every startup accepted?",
      answer: "No. We help you become funding-ready by refining your business model and connecting you to relevant opportunities. Funding decisions depend on your startup's potential, stage, traction, and alignment with impact goals. We focus on making you investment-ready rather than guaranteeing funding."
    },
    {
      question: "How long is the incubation program?",
      answer: "Our flagship incubation program runs for 4 to 6 months, depending on your stage and needs. We also offer short-term accelerator cohorts, weekend clinics, and pitch readiness bootcamps. The program is designed to be flexible and personalized to each founder's requirements."
    },
    {
      question: "Where is Vaazhai Ventures located?",
      answer: "We are based in Tenkasi, Tamil Nadu, with a growing presence across Tier-2 and Tier-3 cities in India. We offer both in-person and hybrid programs to support rural and urban entrepreneurs alike. Our physical presence in smaller cities helps us better understand and serve local entrepreneurs."
    },
    {
      question: "How do I apply?",
      answer: "You can apply directly through our website contact form. We accept applications on a rolling basis and open specific cohort intakes multiple times a year. The application process includes a detailed form about your idea, background, and goals, followed by a personal interview."
    },
    {
      question: "Can I join just for mentorship without a full incubation program?",
      answer: "Yes! We offer standalone mentorship clinics, expert talks, and founder guidance sessions under our 'Vaazhai Circles' initiative. These are open to all entrepreneurs and provide valuable insights without the full program commitment. Stay updated on our Events page for upcoming sessions."
    },
    {
      question: "Do you support student startups?",
      answer: "Absolutely. We have dedicated tracks for college innovators, student startups, and final-year project founders. Our goal is to turn early ideas into real-world impact, regardless of whether you're still in college or a working professional."
    },
    {
      question: "What makes Vaazhai different from other incubators?",
      answer: "Our 0% equity model, focus on rural and underrepresented founders, personalized mentorship approach, and emphasis on values-driven entrepreneurship set us apart. We believe in building sustainable businesses that create lasting impact in communities."
    },
    {
      question: "Do you provide office space or infrastructure?",
      answer: "While we don't provide permanent office space, we offer access to our co-working facilities during program sessions, networking events, and demo days. We focus more on providing the knowledge, connections, and support you need to succeed."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="flex justify-center mb-6">
              <HelpCircle className="h-16 w-16 text-emerald-600" />
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-8">Frequently Asked Questions</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Explore answers to common questions about Vaazhai Ventures, our incubation programs, funding process, and more.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-inset"
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.question}
                  </h3>
                  <div className="flex-shrink-0">
                    {openIndex === index ? (
                      <Minus className="h-5 w-5 text-emerald-600" />
                    ) : (
                      <Plus className="h-5 w-5 text-emerald-600" />
                    )}
                  </div>
                </button>
                
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-8 pb-6">
                        <p className="text-gray-600 leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Help Section */}
      <section className="py-20 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-4xl font-bold text-gray-900">Still Have Questions?</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                We're here to help! If you couldn't find the answer you were looking for, don't hesitate to reach out to our team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="bg-emerald-600 text-white px-8 py-4 rounded-full hover:bg-emerald-700 transition-all duration-200 font-semibold text-center"
                >
                  Contact Us
                </Link>
                <Link
                  to="/programs"
                  className="border-2 border-emerald-600 text-emerald-600 px-8 py-4 rounded-full hover:bg-emerald-600 hover:text-white transition-all duration-200 font-semibold text-center"
                >
                  View Programs
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Quick Actions</h3>
              <div className="space-y-4">
                <Link
                  to="/contact"
                  className="block p-4 bg-emerald-50 rounded-xl hover:bg-emerald-100 transition-colors duration-200"
                >
                  <h4 className="font-semibold text-emerald-800 mb-2">Apply Now</h4>
                  <p className="text-emerald-600 text-sm">Start your journey with Vaazhai Ventures</p>
                </Link>
                <Link
                  to="/join-us"
                  className="block p-4 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors duration-200"
                >
                  <h4 className="font-semibold text-blue-800 mb-2">Join the Waitlist</h4>
                  <p className="text-blue-600 text-sm">Get notified about upcoming cohorts</p>
                </Link>
                <Link
                  to="/programs"
                  className="block p-4 bg-purple-50 rounded-xl hover:bg-purple-100 transition-colors duration-200"
                >
                  <h4 className="font-semibold text-purple-800 mb-2">Explore Programs</h4>
                  <p className="text-purple-600 text-sm">Learn about our different tracks</p>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;