"use client";

import React from "react";
import { motion } from "framer-motion";
import { Target, Users, Award, Globe, Lightbulb, Shield, CheckCircle, Star, Clock, Zap } from "lucide-react";
import Link from "next/link";
import { Header1 } from "@/components/ui/header";

const values = [
  {
    icon: Lightbulb,
    title: 'Innovation',
    description: 'We embrace cutting-edge technologies and creative solutions to solve complex business challenges.'
  },
  {
    icon: Shield,
    title: 'Reliability',
    description: 'Our clients depend on us for consistent, secure, and high-quality IT services and support.'
  },
  {
    icon: Users,
    title: 'Partnership',
    description: 'We build long-term relationships with our clients, acting as their trusted technology partner.'
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'We strive for excellence in every project, delivering solutions that exceed expectations.'
  }
];

const stats = [
  { number: '50+', label: 'Projects Completed', icon: CheckCircle },
  { number: '25+', label: 'Happy Clients', icon: Star },
  { number: '24/7', label: 'Support Available', icon: Clock },
  { number: '99.9%', label: 'Uptime Guarantee', icon: Zap }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export default function AboutPage() {
  return (
    <>
      <Header1 />
      <div className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-20">
          <motion.div 
            className="max-w-7xl mx-auto px-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div variants={itemVariants}>
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  About{" "}
                  <span className="bg-gradient-to-r from-green-400 via-green-500 to-green-600 bg-clip-text text-transparent">
                    UNI Networks
                  </span>
                </h1>
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  We are a forward-thinking IT services company dedicated to empowering businesses 
                  with innovative technology solutions that drive growth and success.
                </p>
                <Link 
                  href="/#contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-lg hover:shadow-lg transition-all font-semibold transform hover:scale-105"
                >
                  Work With Us
                </Link>
              </motion.div>
              <motion.div variants={itemVariants} className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20">
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mx-auto mb-3">
                        <stat.icon className="w-6 h-6 text-green-400" />
                      </div>
                      <div className="text-3xl font-bold text-green-400 mb-2">{stat.number}</div>
                      <div className="text-gray-300 text-sm">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
          <motion.div 
            className="max-w-7xl mx-auto px-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div variants={itemVariants} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold bg-gradient-to-r from-green-600 via-green-500 to-green-400 bg-clip-text text-transparent">
                    Our Mission
                  </h2>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  To empower businesses and startups with cutting-edge technology solutions that drive 
                  digital transformation, increase efficiency, and accelerate growth. We are committed 
                  to delivering exceptional service and building lasting partnerships with our clients.
                </p>
              </motion.div>
              
              <motion.div variants={itemVariants} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold bg-gradient-to-r from-green-600 via-green-500 to-green-400 bg-clip-text text-transparent">
                    Our Vision
                  </h2>
                </div>
                <p className="text-lg text-gray-600 leading-relaxed">
                  To become one of the top 10 IT service providers in the region within the next year, 
                  recognized for our innovation, reliability, and exceptional client service. We envision 
                  a future where technology seamlessly enhances every aspect of business operations.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Our Values */}
        <section className="py-20 bg-white">
          <motion.div 
            className="max-w-7xl mx-auto px-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants} className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">
                Our Core{" "}
                <span className="bg-gradient-to-r from-green-600 via-green-500 to-green-400 bg-clip-text text-transparent">
                  Values
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                The principles that guide everything we do and shape our company culture
              </p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div 
                  key={index} 
                  variants={itemVariants}
                  className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Company Info */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
          <motion.div 
            className="max-w-7xl mx-auto px-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div variants={itemVariants}>
                <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-8">
                  Why Choose{" "}
                  <span className="bg-gradient-to-r from-green-600 via-green-500 to-green-400 bg-clip-text text-transparent">
                    UNI Networks?
                  </span>
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">Expert Team</h3>
                      <p className="text-gray-600">Our skilled professionals bring years of experience in various technology domains.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">Proven Track Record</h3>
                      <p className="text-gray-600">Successfully delivered 50+ projects across different industries and business sizes.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">24/7 Support</h3>
                      <p className="text-gray-600">Round-the-clock technical support to ensure your systems run smoothly.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-800 mb-2">Competitive Pricing</h3>
                      <p className="text-gray-600">Cost-effective solutions without compromising on quality and reliability.</p>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div variants={itemVariants} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Company Information</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="font-semibold text-gray-700">Founded:</span>
                    <span className="text-gray-600">2024</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="font-semibold text-gray-700">Business Type:</span>
                    <span className="text-gray-600">Technology Services</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="font-semibold text-gray-700">License:</span>
                    <span className="text-gray-600">Registered & Licensed</span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <span className="font-semibold text-gray-700">Specialization:</span>
                    <span className="text-gray-600">IT Solutions</span>
                  </div>
                  <div className="flex justify-between items-center py-3">
                    <span className="font-semibold text-gray-700">Service Area:</span>
                    <span className="text-gray-600">National & International</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
          <motion.div 
            className="max-w-7xl mx-auto px-6 text-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h2 variants={itemVariants} className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Partner With{" "}
              <span className="bg-gradient-to-r from-green-400 via-green-500 to-green-600 bg-clip-text text-transparent">
                Us?
              </span>
            </motion.h2>
            <motion.p variants={itemVariants} className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Let's discuss how UNI Networks can help your business achieve its technology goals.
            </motion.p>
            <motion.div variants={itemVariants}>
              <Link 
                href="/#contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-lg hover:shadow-lg transition-all font-semibold transform hover:scale-105"
              >
                Start the Conversation
              </Link>
            </motion.div>
          </motion.div>
        </section>
      </div>
    </>
  );
} 