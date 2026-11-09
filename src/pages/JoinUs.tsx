import React from 'react';
import { motion } from 'framer-motion';
import { Users, Lightbulb, HandHeart, TrendingUp, ArrowRight, CheckCircle, Star, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

const JoinUs = () => {
  const roles = [
    {
      icon: <Users className="h-12 w-12 text-emerald-600" />,
      title: 'Founders',
      subtitle: 'Looking to build from the roots up',
      description: 'Join our incubation programs and build your venture with purpose-driven mentorship.',
      benefits: [
        'Personalized mentorship',
        'Access to funding networks',
        'Product development support',
        'Community of like-minded founders'
      ]
    },
    {
      icon: <Lightbulb className="h-12 w-12 text-blue-600" />,
      title: 'Mentors',
      subtitle: 'Who guide with experience, not ego',
      description: 'Share your expertise and help shape the next generation of entrepreneurs.',
      benefits: [
        'Meaningful impact on startups',
        'Access to innovative founders',
        'Flexible time commitment',
        'Recognition in our community'
      ]
    },
    {
      icon: <HandHeart className="h-12 w-12 text-purple-600" />,
      title: 'CSR & Institutional Partners',
      subtitle: 'Looking to create real impact',
      description: 'Partner with us to support entrepreneurship in underserved regions.',
      benefits: [
        'Co-branded impact programs',
        'Detailed progress reports',
        'Regional outreach opportunities',
        'Measurable social impact'
      ]
    },
    {
      icon: <TrendingUp className="h-12 w-12 text-orange-600" />,
      title: 'Investors',
      subtitle: 'Seeking value-driven businesses',
      description: 'Discover startups with long-term potential and strong social impact.',
      benefits: [
        'Access to vetted startups',
        'Purpose-driven deal flow',
        'Early-stage opportunities',
        'Impact measurement support'
      ]
    }
  ];

  const partnershipBenefits = [
    'Co-branded impact programs',
    'Access to vetted startup pipelines',
    'Detailed reports on founder progress',
    'Regional language & Tier 2–3 outreach opportunities'
  ];

  const testimonials = [
    {
      quote: "I had only an idea and zero startup background. After Vaazhai, I had a real plan and my first customers. The mentorship was life-changing.",
      author: "M. Reshma",
      role: "Founder, AgroConnect",
      company: "AgriTech Startup",
      avatar: "https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=200"
    },
    {
      quote: "This is not just an incubator. It's a space where you are seen, guided, and genuinely respected. The community support is incredible.",
      author: "R. Naveen",
      role: "Founder, WeCare Waste",
      company: "Social Impact Startup",
      avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200"
    },
    {
      quote: "I wish more programs were like this—quietly powerful and founder-first. The 0% equity model shows they truly care about our success.",
      author: "K. Priya",
      role: "Founder, EduTide",
      company: "EdTech Startup",
      avatar: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-900 via-emerald-800 to-teal-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl font-bold mb-8">Join the Vaazhai Ecosystem</h1>
            <p className="text-xl text-emerald-100 max-w-3xl mx-auto mb-8 leading-relaxed">
              Be part of a movement that nurtures purpose-driven entrepreneurship and creates lasting impact in communities that need it most.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Roles Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-8">We Invite</h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {roles.map((role, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="flex items-start space-x-6">
                  <div className="flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                    {role.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{role.title}</h3>
                    <p className="text-emerald-600 font-semibold mb-4">{role.subtitle}</p>
                    <p className="text-gray-600 leading-relaxed mb-6">{role.description}</p>
                    <ul className="space-y-2">
                      {role.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-700">
                          <CheckCircle className="h-4 w-4 text-emerald-500 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="py-20 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-4xl font-bold text-gray-900">Partnership Benefits</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                When you partner with Vaazhai Ventures, you're not just supporting startups—you're investing in sustainable, community-driven innovation.
              </p>
              <ul className="space-y-4">
                {partnershipBenefits.map((benefit, index) => (
                  <li key={index} className="flex items-start">
                    <Award className="h-6 w-6 text-emerald-600 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-gray-700 leading-relaxed">{benefit}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className="bg-emerald-600 text-white px-8 py-4 rounded-full hover:bg-emerald-700 transition-all duration-200 font-semibold inline-flex items-center group"
              >
                Partner With Us
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Impact at a Glance</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-600 mb-2">30+</div>
                  <div className="text-sm text-gray-600">Startups Supported</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-600 mb-2">60%</div>
                  <div className="text-sm text-gray-600">Rural Founders</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-600 mb-2">100+</div>
                  <div className="text-sm text-gray-600">Mentoring Hours</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-600 mb-2">0%</div>
                  <div className="text-sm text-gray-600">Equity Taken</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-8">What Our Community Says</h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed mb-6 italic">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.author}</div>
                    <div className="text-sm text-emerald-600">{testimonial.role}</div>
                    <div className="text-xs text-gray-500">{testimonial.company}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl font-bold">Let's Create Lasting Impact Together</h2>
            <p className="text-xl text-emerald-100">
              Whether you're a founder, mentor, partner, or investor—there's a place for you in our ecosystem.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-emerald-600 px-8 py-4 rounded-full hover:bg-gray-100 transition-all duration-200 font-semibold"
              >
                Get Started
              </Link>
              <Link
                to="/programs"
                className="border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-emerald-600 transition-all duration-200 font-semibold"
              >
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default JoinUs;