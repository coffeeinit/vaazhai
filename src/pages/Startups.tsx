import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Leaf, GraduationCap, Recycle, ShoppingCart, Users, Target, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const Startups = () => {
  const startups = [
    {
      name: 'AgroConnect',
      icon: <Leaf className="h-12 w-12 text-green-600" />,
      description: 'Connecting farmers to direct buyers with a mobile-first model, eliminating middlemen and increasing farmer income by 40%.',
      impact: 'Reached 500+ farmers in rural Tamil Nadu',
      revenue: '₹25 Lakhs ARR',
      jobs: '12 direct jobs created',
      image: 'https://images.pexels.com/photos/2253881/pexels-photo-2253881.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'AgriTech'
    },
    {
      name: 'EduTide',
      icon: <GraduationCap className="h-12 w-12 text-blue-600" />,
      description: 'Regional language-based learning app for first-gen learners, making quality education accessible in local languages.',
      impact: '10,000+ students using the platform',
      revenue: '₹15 Lakhs ARR',
      jobs: '8 direct jobs created',
      image: 'https://images.pexels.com/photos/301926/pexels-photo-301926.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'EdTech'
    },
    {
      name: 'WeCare Waste',
      icon: <Recycle className="h-12 w-12 text-emerald-600" />,
      description: 'Women-led solid waste management business in small towns, creating sustainable employment while solving environmental challenges.',
      impact: 'Processing 2 tons of waste daily',
      revenue: '₹8 Lakhs ARR',
      jobs: '15 direct jobs created',
      image: 'https://images.pexels.com/photos/3735747/pexels-photo-3735747.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'Social Impact'
    },
    {
      name: 'Namma Cart',
      icon: <ShoppingCart className="h-12 w-12 text-orange-600" />,
      description: 'Local produce delivery model using electric cycles, reducing carbon footprint while supporting local farmers and providing fresh produce.',
      impact: 'Serving 200+ families weekly',
      revenue: '₹12 Lakhs ARR',
      jobs: '10 direct jobs created',
      image: 'https://images.pexels.com/photos/4492126/pexels-photo-4492126.jpeg?auto=compress&cs=tinysrgb&w=600',
      category: 'Logistics'
    }
  ];

  const stats = [
    {
      icon: <Users className="h-8 w-8 text-emerald-600" />,
      number: '30+',
      label: 'Startups Supported'
    },
    {
      icon: <Target className="h-8 w-8 text-emerald-600" />,
      number: '60%',
      label: 'Rural Founders'
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-emerald-600" />,
      number: '85%',
      label: 'Still Operating'
    },
    {
      icon: <Leaf className="h-8 w-8 text-emerald-600" />,
      number: '0%',
      label: 'Equity Taken'
    }
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
            <h1 className="text-5xl font-bold text-gray-900 mb-8">Startups We've Supported</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We take pride in working with founders who stay grounded while building upward. Here are a few of our success stories.
            </p>
          </motion.div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 text-center shadow-lg"
              >
                <div className="flex justify-center mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-600">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {startups.map((startup, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gray-50 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300 group"
              >
                <div className="h-48 bg-gradient-to-br from-emerald-100 to-teal-100 relative overflow-hidden">
                  <img
                    src={startup.image}
                    alt={startup.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white px-3 py-1 rounded-full text-xs font-semibold text-gray-700">
                      {startup.category}
                    </span>
                  </div>
                </div>
                
                <div className="p-8">
                  <div className="flex items-center mb-4">
                    <div className="group-hover:scale-110 transition-transform duration-300">
                      {startup.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 ml-4">{startup.name}</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    {startup.description}
                  </p>
                  <div className="bg-emerald-50 p-4 rounded-xl">
                    <p className="text-sm font-semibold text-emerald-800 mb-1">Impact:</p>
                    <p className="text-emerald-700 mb-2">{startup.impact}</p>
                    <div className="grid grid-cols-2 gap-2 text-xs">
                      <div>
                        <span className="font-semibold text-emerald-800">Revenue:</span>
                        <p className="text-emerald-700">{startup.revenue}</p>
                      </div>
                      <div>
                        <span className="font-semibold text-emerald-800">Jobs:</span>
                        <p className="text-emerald-700">{startup.jobs}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 bg-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-8">What Makes Them Special</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 text-center"
            >
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Leaf className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Purpose-Driven</h3>
              <p className="text-gray-600 leading-relaxed">
                Every startup solves real problems that matter to their communities.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 text-center"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Community-First</h3>
              <p className="text-gray-600 leading-relaxed">
                Built by founders who understand their local context and needs.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 text-center"
            >
              <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Sustainable Growth</h3>
              <p className="text-gray-600 leading-relaxed">
                Growing at their own pace with long-term sustainability in mind.
              </p>
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
            <h2 className="text-4xl font-bold">Want to be Featured Here?</h2>
            <p className="text-xl text-emerald-100">
              Apply to our next cohort and join our community of changemakers.
            </p>
            <Link
              to="/contact"
              className="bg-white text-emerald-600 px-8 py-4 rounded-full hover:bg-gray-100 transition-all duration-200 font-semibold inline-flex items-center group"
            >
              Apply Now
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Startups;