"use client"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import {
  ArrowRight,
  Users,
  Target,
  Award,
  TrendingUp,
  Heart,
  Lightbulb,
  Shield,
  Star,
  CheckCircle,
  Sparkles,
  TreePine,
} from "lucide-react"

const Home = () => {
  // Background image path
  const bgHero = "/asset/bg-hero3.png"

  // Move arrays INSIDE the component to fix rendering issues
  const values = [
    {
      icon: <Heart className="h-6 w-6 text-red-500" />,
      title: "Rootedness",
      description: "Stay connected to people, places, and problems",
    },
    {
      icon: <Shield className="h-6 w-6 text-blue-500" />,
      title: "Integrity",
      description: "Grow with honesty and transparency",
    },
    {
      icon: <Lightbulb className="h-6 w-6 text-yellow-500" />,
      title: "Clarity",
      description: "Know what to build, why, and for whom",
    },
    {
      icon: <Star className="h-6 w-6 text-purple-500" />,
      title: "Impact",
      description: "Solve problems that matter",
    },
  ]

  const stats = [
    { number: "30+", label: "Startups Incubated" },
    { number: "60%", label: "Rural Founders" },
    { number: "100+", label: "Mentoring Hours" },
    { number: "0%", label: "Equity Taken" },
  ]

  const offerings = [
    {
      icon: <Users className="h-8 w-8 text-emerald-600" />,
      title: "1:1 Founder Mentorship",
      description: "Personalized guidance from experienced entrepreneurs and subject experts",
    },
    {
      icon: <Target className="h-8 w-8 text-emerald-600" />,
      title: "Pre-seed Support & Business Model Design",
      description: "Help with idea validation, market research, product clarity, and storytelling",
    },
    {
      icon: <Award className="h-8 w-8 text-emerald-600" />,
      title: "Startup Ecosystem Access",
      description: "Meet mentors, advisors, early customers, and potential collaborators",
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-emerald-600" />,
      title: "Founder-Focused Growth Path",
      description: "We help you grow at your pace—with long-term sustainability in mind",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#f2f2f0" }}>
      {/* Hero Section - UNCHANGED */}
      <section
        className="relative min-h-screen flex items-center"
        style={{
          backgroundImage: `url(${bgHero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative z-10 w-full flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto px-4 py-24">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 space-y-8"
          >
            <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-white drop-shadow-lg">
              Rooted in Purpose. <span className="text-emerald-700 drop-shadow-lg">Growing for Impact.</span>
            </h1>
            <p className="text-xl text-gray-800 leading-relaxed drop-shadow-md font-medium">
              Vaazhai Ventures is a startup incubator that nurtures early-stage entrepreneurs with personalized
              mentorship, deep values, and practical support to build businesses that matter.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/join-us"
                style={{ backgroundColor: "#e6b51d" }}
                className="text-white px-8 py-4 rounded-full transition-all duration-200 font-semibold text-center inline-flex items-center justify-center group shadow-lg hover:brightness-90"
              >
                Apply Now
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex-1 lg:pl-12"
          >
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className=" bg-opacity-90 backdrop-blur-sm rounded-xl p-6 text-center shadow-lg"
                >
                  <div className="text-3xl font-bold mb-2" style={{ color: "#7c4000ff" }}>
                    {stat.number}
                  </div>
                  <div className="text-sm text-white font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why We Exist - Enhanced with Box Layout */}
      <section className="py-16 bg-gradient-to-br from-gray-50 via-white to-emerald-50 relative overflow-hidden " style={{ backgroundColor: "#fdfdf6ff" }}>
        {/* Background decoration */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          <div className="absolute top-10 left-10 w-32 h-32 bg-emerald-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-blue-500 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mb-6"
            >
              <Sparkles className="h-8 w-8 text-emerald-600" />
            </motion.div>
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Why We Exist</h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-start gap-4">
                <CheckCircle className="h-6 w-6 text-emerald-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    <strong>Startups don't fail because they lack ideas.</strong>
                    <br />
                    They fail because they lack direction, belief, and the right kind of support—especially in non-metro
                    regions.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-start gap-4">
                <CheckCircle className="h-6 w-6 text-emerald-600 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Vaazhai Ventures was created to bridge this gap—to help startups from small towns and passionate
                    founders from underrepresented backgrounds turn their ideas into scalable, meaningful businesses.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white rounded-2xl p-8 text-center shadow-xl"
          >
            <p className="text-xl font-semibold mb-2">We're not just an incubator.</p>
            <p className="text-xl font-semibold">We're a movement led by changemakers who've walked the path.</p>
          </motion.div>
        </div>
      </section>

      {/* Why Vaazhai - Enhanced */}
      <section className="py-16 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center">
                  <Sparkles className="h-6 w-6 text-emerald-600" />
                </div>
                <h2 className="text-4xl font-bold text-gray-900">Why Vaazhai?</h2>
              </div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-lg text-gray-700 leading-relaxed"
              >
                Just like the banana tree it's named after, Vaazhai stands for{" "}
                <strong className="text-emerald-700">growth, resilience, and abundance</strong>.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
                className="text-lg text-gray-700 leading-relaxed"
              >
                Every part of the banana tree is useful—and it grows again and again. We believe startups should grow
                the same way: useful, regenerative, and rooted in values.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="text-xl font-semibold text-emerald-700"
              >
                We are more than a business incubator—we are a community of changemakers, supporting:
              </motion.p>

              <motion.ul
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="space-y-3 text-gray-700"
              >
                {[
                  "Aspiring entrepreneurs from small towns",
                  "Founders with purpose-driven ideas",
                  "Innovators looking for meaningful mentorship",
                ].map((item, index) => (
                  <motion.li key={index} variants={itemVariants} className="flex items-center">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mr-4"></div>
                    {item}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Background decoration */}
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-3xl transform rotate-3"></div>

              {/* Main content area */}
              <div className="relative bg-white rounded-3xl p-8 shadow-xl">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center justify-center w-20 h-20 bg-emerald-100 rounded-full mb-4">
                    <TreePine className="h-10 w-10 text-emerald-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Our Values</h3>
                  <p className="text-gray-600">The principles that guide our mission</p>
                </div>

                {/* VALUES GRID - This is the important part */}
                <div className="grid grid-cols-2 gap-4">
                  {values.map((value, index) => (
                    <div
                      key={`value-${index}-${value.title}`}
                      className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 text-center hover:shadow-xl transition-all duration-300 border border-gray-100 hover:scale-105 hover:-translate-y-1"
                    >
                      <div className="flex justify-center mb-4 hover:rotate-12 transition-transform duration-300">
                        {value.icon}
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-2">{value.title}</h3>
                      <p className="text-sm text-gray-600">{value.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Offer - Enhanced */}
      <section className="py-16 bg-gradient-to-br from-emerald-50 via-teal-50 to-blue-50 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-200 rounded-full blur-3xl opacity-20 -translate-y-48 translate-x-48"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-200 rounded-full blur-3xl opacity-20 translate-y-48 -translate-x-48"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
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
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What We Offer</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-teal-500 mx-auto rounded-full"></div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {offerings.map((offering, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{
                  scale: 1.02,
                  y: -8,
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
                }}
                className="bg-white rounded-3xl p-8 hover:shadow-2xl transition-all duration-500 group border border-gray-100 relative overflow-hidden"
              >
                {/* Background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-teal-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10 flex items-start space-x-4">
                  <motion.div
                    className="flex-shrink-0 p-3 bg-emerald-50 rounded-2xl group-hover:bg-emerald-100 transition-colors duration-300"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    {offering.icon}
                  </motion.div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-emerald-700 transition-colors duration-300">
                      {offering.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">{offering.description}</p>
                  </div>
                </div>

                {/* Decorative element */}
                <div className="absolute top-4 right-4 w-2 h-2 bg-emerald-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section - Enhanced */}
      <section className="py-16 bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 text-white relative overflow-hidden">
        {/* Background animation */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-emerald-600/20 to-teal-600/20"></div>
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 20,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
            className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-xl"
          ></motion.div>
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [360, 180, 0],
            }}
            transition={{
              duration: 15,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
            className="absolute bottom-10 left-10 w-24 h-24 bg-white/10 rounded-full blur-xl"
          ></motion.div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-6"
            >
              <ArrowRight className="h-10 w-10 text-white" />
            </motion.div>

            <h2 className="text-4xl font-bold">Ready to Start Your Journey?</h2>
            <p className="text-xl text-emerald-100 max-w-2xl mx-auto">
              Join our community of purpose-driven entrepreneurs and turn your ideas into impactful businesses.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/contact"
                  className="bg-white text-emerald-600 px-8 py-4 rounded-full hover:bg-gray-100 transition-all duration-200 font-semibold inline-flex items-center justify-center group shadow-lg h-14"
                >
                  Apply Now
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </motion.div>

              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/programs"
                  className="border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white hover:text-emerald-600 transition-all duration-200 font-semibold backdrop-blur-sm h-14 inline-flex items-center justify-center"
                >
                  Explore Programs
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home
