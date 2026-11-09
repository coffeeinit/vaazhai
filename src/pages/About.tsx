"use client"

import { motion } from "framer-motion"
import {
  Heart,
  Shield,
  Lightbulb,
  Users,
  Target,
  ImageIcon as IdeaIcon,
  Sparkles,
  TreePine,
  Award,
  Eye,
  Compass,
  Sprout,
  HelpCircle,
} from "lucide-react"

const About = () => {
  const values = [
    {
      icon: <Heart className="h-8 w-8 text-red-500" />,
      title: "Rootedness",
      description: "Stay connected to people, places, and problems",
    },
    {
      icon: <Shield className="h-8 w-8 text-blue-500" />,
      title: "Integrity",
      description: "Grow with honesty and transparency",
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-yellow-500" />,
      title: "Clarity",
      description: "Know what to build, why, and for whom",
    },
    {
      icon: <Users className="h-8 w-8 text-green-500" />,
      title: "Empathy",
      description: "Guide with kindness, not pressure",
    },
    {
      icon: <Target className="h-8 w-8 text-purple-500" />,
      title: "Impact",
      description: "Solve problems that matter",
    },
  ]

  const founders = [
    {
      name: "Sridhar Vembu",
      title: "Founder & Chief Scientist, Zoho Corporation",
      description: "Believed that world-class innovation could rise from small towns—not just Silicon Valley. His vision of democratizing technology inspired our approach to inclusive entrepreneurship.",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400",
      expertise: "Technology Innovation, Rural Development"
    },
    {
      name: "Ananthan Ayyasamy",
      title: "Founder, Voice of Tenkasi",
      description: "Saw talent in every lane, every home—just waiting to be nurtured. His grassroots approach to community development shaped our mentorship philosophy.",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400",
      expertise: "Community Development, Social Impact"
    },
    {
      name: "Karunya Gunavathy",
      title: "Founder, Raphael Creatives",
      description: "Knew that clarity, storytelling, and support could transform quiet ideas into powerful ventures. Her creative approach to business development guides our programs.",
      image: "https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=400",
      expertise: "Creative Entrepreneurship, Brand Development"
    },
  ];

  return (
    <div className="min-h-screen ">
      {/* Hero Section */}
      <section className="py-4 bg-gradient-to-br from-emerald-50 via-white to-teal-50 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-20 left-20 w-40 h-40 bg-emerald-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-32 h-32 bg-teal-400 rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-4"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mb-4"
            >
              <Sparkles className="h-8 w-8 text-emerald-600" />
            </motion.div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Story</h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Vaazhai Ventures didn't begin in a boardroom. It started in villages and classrooms.
            </p>
          </motion.div>
        </div>
      </section>

      {/* How It All Began - Growth Chart Structure */}
      <section className="py-6 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-6"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-6">How It All Began</h2>
            <div className="w-32 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto rounded-full"></div>
          </motion.div>

          {/* Growth Chart Container */}
          <div className="relative max-w-6xl mx-auto h-[400px]">
            {/* Growth Line Path - More realistic growth pattern */}
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 800 320"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <motion.path
                d="M80 280 L200 220 L320 250 L480 140 L650 60 L720 40"
                stroke="url(#gradient)"
                strokeWidth="4"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                transition={{ duration: 2, ease: "easeInOut" }}
                viewport={{ once: true }}
              />
              {/* Arrow head */}
              <motion.polygon
                points="715,35 730,40 715,45"
                fill="url(#gradient)"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.8 }}
                viewport={{ once: true }}
              />
              <defs>
                <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#10b981" />
                  <stop offset="50%" stopColor="#059669" />
                  <stop offset="100%" stopColor="#0d9488" />
                </linearGradient>
              </defs>
            </svg>

            {/* Point 1 - The Roots (Bottom Left) */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              className="absolute bottom-8 left-4"
              style={{ zIndex: 10 }}
            >
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-full flex items-center justify-center shadow-lg mb-3">
                  <Sprout className="h-6 w-6 text-white" />
                </div>
                <div className="bg-white rounded-xl p-4 shadow-lg border border-amber-200 w-48">
                  <h3 className="text-sm font-bold text-gray-900 mb-2">Our Roots</h3>
                  <p className="text-xs text-gray-700">
                    Started in villages and classrooms with brilliant students and local innovators.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Point 2 - The Gap (Lower Middle) */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              viewport={{ once: true }}
              className="absolute bottom-32 left-60"
              style={{ zIndex: 10 }}
            >
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center shadow-lg mb-3">
                  <IdeaIcon className="h-6 w-6 text-white" />
                </div>
                <div className="bg-white rounded-xl p-4 shadow-lg border border-blue-200 w-52">
                  <h3 className="text-sm font-bold text-gray-900 mb-2">We Saw a Gap</h3>
                  <ul className="text-xs text-gray-600 space-y-1">
                    <li>• People had potential, lacked direction</li>
                    <li>• Ideas had value, lacked validation</li>
                    <li>• Communities had needs, no voice</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Point 3 - The Questions (Upper Middle) */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              viewport={{ once: true }}
              className="absolute top-32 right-64"
              style={{ zIndex: 10 }}
            >
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg mb-3">
                  <HelpCircle className="h-6 w-6 text-white" />
                </div>
                <div className="bg-white rounded-xl p-4 shadow-lg border border-purple-200 w-48">
                  <h3 className="text-sm font-bold text-gray-900 mb-2">We Asked</h3>
                  <div className="space-y-1 text-xs text-gray-700">
                    <p>Why limit innovation to metros?</p>
                    <p>Why let good ideas fail?</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Point 4 - The Solution (Top Right) */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              viewport={{ once: true }}
              className="absolute top-4 right-8"
              style={{ zIndex: 10 }}
            >
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center shadow-xl mb-3">
                  <TreePine className="h-8 w-8 text-white" />
                </div>
                <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-xl p-4 shadow-xl w-56">
                  <h3 className="text-sm font-bold mb-2">Vaazhai Was Born</h3>
                  <p className="text-xs text-emerald-100">
                    We created a platform to democratize entrepreneurship for everyone, everywhere.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision - Modern UI */}
      <section className="py-6 bg-gradient-to-br from-gray-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-3xl transform rotate-3"></div>
              <div className="relative bg-white rounded-3xl p-10 shadow-xl">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mr-4">
                    <Compass className="h-8 w-8 text-emerald-600" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900">Our Mission</h3>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  To nurture founders who are driven by purpose, not just profit—and help them build ventures that solve
                  real problems, especially in underserved regions.
                </p>
                <div className="mt-6 flex items-center text-emerald-600 font-semibold">
                  <TreePine className="h-5 w-5 mr-2" />
                  Purpose-Driven Growth
                </div>
              </div>
            </motion.div>
            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-purple-100 rounded-3xl transform -rotate-3"></div>
              <div className="relative bg-white rounded-3xl p-10 shadow-xl">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <Eye className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900">Our Vision</h3>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  To create a future where entrepreneurship is accessible, inclusive, and deeply human.
                </p>
                <div className="mt-6 flex items-center text-blue-600 font-semibold">
                  <Sparkles className="h-5 w-5 mr-2" />
                  Inclusive Innovation
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values - Enhanced */}
      <section className="py-6 bg-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-200 rounded-full blur-3xl opacity-10 -translate-y-48 translate-x-48"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-200 rounded-full blur-3xl opacity-10 translate-y-48 -translate-x-48"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="inline-flex items-center justify-center w-16 h-16 bg-emerald-600 rounded-full mb-6"
            >
              <Award className="h-8 w-8 text-white" />
            </motion.div>
            <h2 className="text-5xl font-bold text-gray-900 mb-8">Our Values</h2>
            <div className="w-32 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto rounded-full"></div>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.05,
                  y: -10,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                }}
                className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 text-center hover:shadow-2xl transition-all duration-500 group border border-gray-100 relative overflow-hidden"
              >
                {/* Background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-teal-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <motion.div
                    className="flex justify-center mb-6"
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.6 }}
                  >
                    <div className="p-4 bg-gray-50 rounded-2xl group-hover:bg-white transition-colors duration-300">
                      {value.icon}
                    </div>
                  </motion.div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-emerald-700 transition-colors duration-300">
                    {value.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
                {/* Decorative element */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-emerald-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Founders - Enhanced */}
      <section className="py-6 bg-gradient-to-br from-gray-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mb-6"
            >
              <Users className="h-8 w-8 text-emerald-600" />
            </motion.div>
            <h2 className="text-5xl font-bold text-gray-900 mb-8">Meet Our Founders</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Visionaries who believed in the power of inclusive entrepreneurship
            </p>
          </motion.div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {founders.map((founder, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{
                  scale: 1.02,
                  y: -8,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                }}
                className="bg-white rounded-3xl p-8 text-center hover:shadow-2xl transition-all duration-500 group relative overflow-hidden"
              >
                {/* Background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-teal-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="relative z-10">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                    className="relative inline-block mb-6"
                  >
                    <img
                      src={founder.image || "/placeholder.svg"}
                      alt={founder.name}
                      className="w-28 h-28 rounded-full mx-auto object-cover border-4 border-white shadow-lg"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full blur-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
                  </motion.div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-emerald-700 transition-colors duration-300">
                    {founder.name}
                  </h3>
                  <p className="text-emerald-600 font-medium mb-2 text-sm">{founder.title}</p>
                  <p className="text-gray-600 leading-relaxed mb-3">{founder.description}</p>
                  <p className="text-sm text-gray-500 font-medium">{founder.expertise}</p>
                </div>
                {/* Decorative element */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-emerald-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default About
