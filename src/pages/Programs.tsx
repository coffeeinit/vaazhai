import React from 'react';
import { motion } from 'framer-motion';
import { Lightbulb, Rocket, Sprout, Users, Target, Award, Globe2, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Programs = () => {
  const programs = [
    {
      icon: <Lightbulb className="h-12 w-12 text-yellow-500" />,
      title: 'Seed Circle',
      stage: 'Idea Stage',
      description: 'For founders who have an idea but don\'t know where to start.',
      learnings: [
        'How to validate your idea',
        'Understand your user',
        'Craft a simple, clear business plan',
        'Gain confidence as a founder'
      ],
      color: 'yellow'
    },
    {
      icon: <Rocket className="h-12 w-12 text-blue-500" />,
      title: 'Vaazhai Build',
      stage: 'Early-Stage Startup Support',
      description: 'For startups with a prototype or first customers.',
      learnings: [
        'Product-market fit',
        'Storytelling & branding',
        'Financial model clarity',
        'Fundraising prep'
      ],
      color: 'blue'
    },
    {
      icon: <Sprout className="h-12 w-12 text-green-500" />,
      title: 'Vaazhai Roots',
      stage: 'Social & Rural Ventures',
      description: 'For grassroots and community-oriented startups.',
      learnings: [
        'How to build on limited resources',
        'Access government & CSR support',
        'Sustainable business thinking',
        'Community-first growth'
      ],
      color: 'green'
    }
  ];

  const features = [
    {
      icon: <Globe2 className="h-8 w-8 text-emerald-600" />,
      title: 'Multi-Language Support',
      description: 'Programs available in English, Tamil, and hybrid formats'
    },
    {
      icon: <Users className="h-8 w-8 text-emerald-600" />,
      title: 'Flexible Delivery',
      description: 'Virtual and in-person options based on founder need'
    },
    {
      icon: <Target className="h-8 w-8 text-emerald-600" />,
      title: 'Personalized Approach',
      description: 'We work with founders personally to build from the ground up'
    },
    {
      icon: <MessageCircle className="h-8 w-8 text-emerald-600" />,
      title: '1:1 Mentorship',
      description: 'Direct access to experienced entrepreneurs and experts'
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
            <h1 className="text-5xl font-bold mb-8">Our Programs</h1>
            <p className="text-xl text-emerald-100 max-w-3xl mx-auto mb-8 leading-relaxed">
              We don't offer cookie-cutter courses. We work with founders personally to build from the ground up.
            </p>
            <Link
              to="/contact"
              className="bg-emerald-600 text-white px-8 py-4 rounded-full hover:bg-emerald-700 transition-all duration-200 font-semibold inline-flex items-center"
            >
              Apply Now
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 group"
              >
                <div className="flex justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {program.icon}
                </div>
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{program.title}</h3>
                  <p className="text-emerald-600 font-semibold text-sm uppercase tracking-wide">
                    {program.stage}
                  </p>
                </div>
                <p className="text-gray-600 text-center mb-8 leading-relaxed">
                  {program.description}
                </p>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-4">You'll Learn:</h4>
                  <ul className="space-y-3">
                    {program.learnings.map((learning, idx) => (
                      <li key={idx} className="flex items-start">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        <span className="text-gray-700">{learning}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Features */}
      <section className="py-20 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Languages & Flexibility</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We believe great ideas shouldn't be limited by language or location.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 group"
              >
                <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Structure */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-4xl font-bold text-gray-900">How Our Programs Work</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Application & Assessment</h3>
                    <p className="text-gray-600">We review your idea, passion, and potential for impact.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Personalized Program Design</h3>
                    <p className="text-gray-600">We tailor the program to your specific needs and stage.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Intensive Mentorship</h3>
                    <p className="text-gray-600">Regular 1:1 sessions with experienced entrepreneurs.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-emerald-600 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                    4
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Demo Day & Beyond</h3>
                    <p className="text-gray-600">Showcase your progress and continue with ongoing support.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Program Highlights</h3>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <Award className="h-5 w-5 text-emerald-600 mr-3" />
                  <span className="text-gray-700">4-6 month intensive programs</span>
                </li>
                <li className="flex items-center">
                  <Users className="h-5 w-5 text-emerald-600 mr-3" />
                  <span className="text-gray-700">Small cohorts for personalized attention</span>
                </li>
                <li className="flex items-center">
                  <Target className="h-5 w-5 text-emerald-600 mr-3" />
                  <span className="text-gray-700">Practical, hands-on learning</span>
                </li>
                <li className="flex items-center">
                  <Globe2 className="h-5 w-5 text-emerald-600 mr-3" />
                  <span className="text-gray-700">Access to startup ecosystem</span>
                </li>
              </ul>
            </motion.div>
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
            <h2 className="text-4xl font-bold">Ready to Start Building?</h2>
            <p className="text-xl text-emerald-100">
              Join our next cohort and turn your idea into a meaningful venture.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-emerald-600 px-8 py-4 rounded-full hover:bg-gray-100 transition-all duration-200 font-semibold"
              >
                Apply Now
              </Link>
              <Link
                to="/startups"
                className="border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-emerald-600 transition-all duration-200 font-semibold"
              >
                View Portfolio
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Programs;