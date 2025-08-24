"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Lottie from "lottie-react";
import animi1 from "../../public/lotti/Abroad study.json"
import animi2 from "../../public/lotti/career.json"

import infinity from "../../public/lotti/Loader 4.json"

import { 
  Globe,
  GraduationCap,
  Briefcase,
  FileText,
  Plane,
  CheckCircle,
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Users,
  Shield,
  Clock,
  DollarSign,
  Award,
  ArrowRight
} from "lucide-react";
import Link from "next/link";
import { Header1 } from "@/components/ui/header";
import { cn } from "@/lib/utils";
import { HoverEffect } from "@/components/ui/hover-effect";
import { SparklesCore } from "@/components/ui/sparkles";

const services = [
  {
    icon: animi1,
    title: "Study Abroad Services",
    description: "Embark on an enriching educational journey with FlyNetworks. We understand that studying abroad is a life-changing experience, and our expert counselors are here to guide you every step of the way.",
    features: [
      "University and Course Selection: We help you identify the right academic path based on your interests, qualifications, and career goals",
      "Application Guidance: Our team provides meticulous support in preparing and submitting your applications to ensure they stand out",
      "Student Visa Assistance: We offer expert guidance on the entire student visa application process, from documentation to interview preparation",
      "Pre-Departure Support: We provide essential information and support to help you prepare for your new life in a different country"
    ]
  },
  {
    icon: animi2,
    title: "Job Placement Services",
    description: "Unlock your global career potential with FlyNetworks. We specialize in connecting talented individuals with exciting employment opportunities across various international markets.",
    features: [
      "Overseas Employment with Work Visas: We facilitate employment in a range of sectors and connect you with employers seeking international talent",
      "Visit and Immigration Services: Our team provides comprehensive assistance with visit visas and other immigration-related processes",
      "Personalized Consultation: We offer one-on-one guidance to understand your professional background and career aspirations, matching you with the right opportunities"
    ]
  }
];

const countries = [
  {
    region: "Gulf Countries",
    countries: ["UAE", "Saudi Arabia", "Qatar", "Kuwait"]
  },
  {
    region: "Europe",
    countries: ["Germany", "Poland", "Romania", "Portugal", "France"]
  },
  {
    region: "North America",
    countries: ["Canada", "USA"]
  },
  {
    region: "Australia & New Zealand",
    countries: ["Australia", "New Zealand"]
  },
  {
    region: "Asia",
    countries: ["Singapore", "Malaysia", "Japan"]
  }
];

// Destinations data for hover effect
const destinations = [
  {
    title: "Gulf Countries",
    description: "Premier destinations for international students with world-class universities and vibrant cultural experiences.",
    countries: ["UAE", "Saudi Arabia", "Qatar", "Kuwait"],
    // icon: <Globe className="w-8 h-8 text-green-500" />,
    link: "#"
  },
  {
    title: "Europe",
    description: "Rich academic heritage with affordable education and diverse cultural opportunities.",
    countries: ["Germany", "Poland", "Romania", "Portugal", "France"],
    // icon: <GraduationCap className="w-8 h-8 text-blue-500" />,
    link: "#"
  },
  {
    title: "North America",
    description: "Top-tier universities with cutting-edge research facilities and excellent career prospects.",
    countries: ["Canada", "USA"],
    // icon: <Briefcase className="w-8 h-8 text-purple-500" />,
    link: "#"
  },
  {
    title: "Australia & New Zealand",
    description: "High-quality education with stunning landscapes and excellent work opportunities.",
    countries: ["Australia", "New Zealand"],
    // icon: <Plane className="w-8 h-8 text-orange-500" />,
    link: "#"
  },
  {
    title: "Asia",
    description: "Emerging education hubs with modern facilities and strong industry connections.",
    countries: ["Singapore", "Malaysia", "Japan"],
    // icon: <Award className="w-8 h-8 text-red-500" />,
    link: "#"
  }
];

const jobOpenings = [
  {
    country: "UAE",
    roles: "Electricians, Plumbers, AC Mechanics",
    salary: "₹30,000 – ₹70,000/month"
  },
  {
    country: "Poland",
    roles: "General Workers, Factory Helpers",
    salary: "₹70,000 – ₹90,000/month"
  },
  {
    country: "Germany",
    roles: "Welders, Carpenters, Technicians",
    salary: "₹80,000 – ₹1.2L/month"
  },
  {
    country: "Canada",
    roles: "Nurses, IT Professionals, Drivers",
    salary: "₹1.2L – ₹2.5L/month"
  },
  {
    country: "Australia",
    roles: "Chefs, Hospitality, Labourers",
    salary: "₹1.5L – ₹2.8L/month"
  }
];

const benefits = [
  {
    icon: Shield,
    title: "Licensed & Compliant",
    description: "Legally compliant with all necessary permissions"
  },
  {
    icon: CheckCircle,
    title: "100% Verified",
    description: "Verified employers and universities"
  },
  {
    icon: DollarSign,
    title: "Transparent Fees",
    description: "Affordable and transparent service fees"
  },
  {
    icon: MessageCircle,
    title: "WhatsApp Support",
    description: "24/7 WhatsApp-based customer support"
  },
  {
    icon: Users,
    title: "Expert Guidance",
    description: "Guidance from experts with overseas experience"
  },
  {
    icon: Clock,
    title: "Quick Turnaround",
    description: "Fast processing and quick response times"
  }
];

const faqs = [
  {
    question: "Do you provide direct placement?",
    answer: "Yes, for certain countries and roles with verified employers."
  },
  {
    question: "Can I pay after visa approval?",
    answer: "Partial pre-payment is required; full payment terms are discussed transparently."
  },
  {
    question: "Are study programs funded?",
    answer: "Some universities offer scholarships — we help with applications."
  }
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

export default function FlyNetworksPage() {
  return (
    <>
      <Header1 />
      <div className="pt-20">
        {/* Hero Section */}
        <section className="bg-flynetworks-pattern text-white py-20 relative overflow-hidden">
          {/* Background Particles */}
          <div className="w-full absolute inset-0 h-screen">
            <SparklesCore
              id="flynetworks-particles"
              background="transparent"
              minSize={0.6}
              maxSize={1.4}
              particleDensity={100}
              className="w-full h-full"
              particleColor="#22c55e"
              speed={0.8}
            />
          </div>

          {/* Gradient Overlay for Enhanced Visual Effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-transparent to-green-900/10"></div>
          
          <div className="absolute top-10 right-10 w-64 h-64 bg-green-500/20 rounded-full opacity-30 blur-3xl animate-float"></div>
          
          <motion.div 
            className="max-w-7xl mx-auto px-6 relative z-10"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="text-center">
              {/* Logo Section */}
              <motion.div 
                className="mb-8"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
              >
                <img
                  src="/brands/WhatsApp Image 2025-07-26 at 23.48.14_5a0e3a3f.jpg"
                  alt="FlyNetworks Logo"
                  className="w-32 h-32 md:w-40 md:h-40 mx-auto rounded-2xl shadow-2xl border-4 border-green-500/20"
                />
              </motion.div>
              
              <div className="inline-flex items-center space-x-2 bg-green-500/20 backdrop-blur-sm text-green-400 px-6 py-2 rounded-full mb-6">
                <Globe className="w-4 h-4" />
                <span className="text-sm font-medium">Global Opportunities</span>
              </div>
              
              {/* Main Title with Large Typography */}
              <motion.h1 
                className="md:text-7xl text-3xl lg:text-9xl font-bold mb-8 font-heading"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
              >
                <span className="text-gradient-green">FlyNet</span>
                <span className="bg-gradient-to-r from-green-700 via-green-600 to-gray-800 bg-clip-text text-transparent">works</span>
              </motion.h1>

              {/* Glowing Line Effect */}
              <motion.div 
                className="w-[40rem] h-40 relative mx-auto mb-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.8 }}
              >
                {/* Green Gradients */}
                <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-green-500 to-transparent h-[2px] w-3/4 blur-sm" />
                <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-green-500 to-transparent h-px w-3/4" />
                <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-emerald-500 to-transparent h-[5px] w-1/4 blur-sm" />
                <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-emerald-500 to-transparent h-px w-1/4" />

                {/* Core Sparkles Component */}
                <SparklesCore
                  background="transparent"
                  minSize={0.4}
                  maxSize={1}
                  particleDensity={1200}
                  className="w-full h-full"
                  particleColor="#22c55e"
                />

                {/* Radial Gradient to prevent sharp edges */}
                <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"> 
                  <p className="text-2xl md:text-3xl font-semibold mt-13">
                Your Gateway to Global Opportunities.
              </p></div>
              </motion.div>

              <motion.p 
                className="text-lg text-gray-400 max-w-4xl mx-auto mb-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 1.4 }}
              >
                FlyNetworks is a dynamic and forward-thinking consultancy dedicated to empowering individuals to achieve their academic and professional aspirations on a global scale.
              </motion.p>
            </motion.div>
          </motion.div>
        </section>

        {/* Mission Section */}
        {/* <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
          <motion.div 
            className="max-w-7xl mx-auto px-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants} className="text-center">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6 font-heading">
                <span className="text-gray-800">Our </span>
                <span className="text-green-500">Mis</span>
                <span className="bg-gradient-to-r from-green-700 via-green-600 to-gray-800 bg-clip-text text-transparent">sion</span>
              </h2>
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 max-w-4xl mx-auto">
                <blockquote className="text-2xl md:text-3xl font-semibold text-gray-800 italic">
                  "We help individuals pursue international education and careers by simplifying visa and immigration processes, ensuring a smooth and successful journey to their chosen destination."
                </blockquote>
              </div>
            </motion.div>
          </motion.div>
        </section> */}

        {/* Services Section */}
        <section className="py-20 bg-white">
          <motion.div 
            className="max-w-7xl mx-auto px-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants} className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6 font-heading">
                <span className="text-gray-800">Our </span>
                <span className="text-green-500">Ser</span>
                <span className="bg-gradient-to-r from-green-700 via-green-600 to-gray-800 bg-clip-text text-transparent">vices</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive support for your international journey
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <motion.div 
                  key={index}
                  variants={itemVariants}
                  className="bg-white rounded-xl shadow-lg border border-gray-100 p-8 hover:shadow-xl transition-all duration-300 group"
                  whileHover={{ y: -5 }}
                >
                  {/* Lottie Animation Container */}
                  <div className="w-48 h-48 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <div className="w-40 h-40 flex justify-center items-center">
                      <Lottie 
                        animationData={service.icon}
                        loop={true}
                        autoplay={true}
                        style={{ width: '100%', height: '100%' }}
                      />
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  
                  <div className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <motion.div 
                        key={featureIndex} 
                        className="flex items-center space-x-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: featureIndex * 0.1 }}
                      >
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Destinations Section */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
          <motion.div 
            className="max-w-7xl mx-auto px-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants} className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6 font-heading">
                <span className="text-gray-800">Destinations for Your </span>
                <span className="text-green-500">Aca</span>
                <span className="bg-gradient-to-r from-green-700 via-green-600 to-gray-800 bg-clip-text text-transparent">demic Future</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                We facilitate student visas to a host of countries, with a special focus on popular destinations for international students.
              </p>
            </motion.div>

            <HoverEffect items={destinations} />
          </motion.div>
        </section>

        {/* Job Openings Section */}
        <section className="py-20 bg-white">
          <motion.div 
            className="max-w-7xl mx-auto px-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants} className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6 font-heading">
                <span className="text-gray-800">Job </span>
                <span className="text-green-500">Ope</span>
                <span className="bg-gradient-to-r from-green-700 via-green-600 to-gray-800 bg-clip-text text-transparent">nings</span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Sample roles with competitive salary ranges
              </p>
            </motion.div>

            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-xl shadow-lg border border-gray-100">
                <thead className="bg-gradient-to-r from-green-500 to-green-600 text-white">
                  <tr>
                    <th className="px-6 py-4 text-left font-semibold">Country</th>
                    <th className="px-6 py-4 text-left font-semibold">Job Roles</th>
                    <th className="px-6 py-4 text-left font-semibold">Salary Range (INR)</th>
                  </tr>
                </thead>
                <tbody>
                  {jobOpenings.map((job, index) => (
                    <motion.tr 
                      key={index}
                      variants={itemVariants}
                      className="border-b border-gray-100 hover:bg-gray-50 transition-colors"
                    >
                      <td className="px-6 py-4 font-semibold text-gray-800">{job.country}</td>
                      <td className="px-6 py-4 text-gray-700">{job.roles}</td>
                      <td className="px-6 py-4 text-green-600 font-semibold">{job.salary}</td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <motion.div variants={itemVariants} className="text-center mt-8">
              <p className="text-gray-600 italic">
                *Note: All salaries are post-tax, with visa and accommodation included in most offers.
              </p>
            </motion.div>
          </motion.div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
          <motion.div 
            className="max-w-7xl mx-auto px-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants} className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6 font-heading">
                <span className="text-gray-800">Why Choose </span>
                <span className="text-green-500">Fly</span>
                <span className="bg-gradient-to-r from-green-700 via-green-600 to-gray-800 bg-clip-text text-transparent">Networks?</span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div 
                  key={index}
                  variants={itemVariants}
                  className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center mb-4">
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-white">
          <motion.div 
            className="max-w-7xl mx-auto px-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants} className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6 font-heading">
                Get in{" "}
                <span className="bg-gradient-to-r from-green-600 via-green-500 to-green-400 bg-clip-text text-transparent">
                  Touch
                </span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div variants={itemVariants} className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">Phone</h3>
                    <p className="text-gray-600">+91 89854 04669</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">Email (Support)</h3>
                    <a href="mailto:flynetworks@outlook.com" className="text-green-600 hover:text-green-700">
                      flynetworks@outlook.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">Location</h3>
                    <p className="text-gray-600">Local – available on request</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">WhatsApp Support</h3>
                    <a 
                      href="https://wa.me/918985404669" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-green-600 hover:text-green-700"
                    >
                      Click to Chat
                    </a>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Legal & Licensing</h3>
                <p className="text-gray-600 mb-6">
                  FlyNetworks is a licensed entity under the parent company <strong>Uninetworks</strong>, and holds all necessary legal permissions to operate nationally and internationally.
                </p>
                <div className="flex items-center space-x-2 text-green-600">
                  <Award className="w-5 h-5" />
                  <span className="font-semibold">Licensed & Compliant</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
          <motion.div 
            className="max-w-4xl mx-auto px-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants} className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6 font-heading">
                <span className="text-gray-800">Frequently Asked </span>
                <span className="text-green-500">Ques</span>
                <span className="bg-gradient-to-r from-green-700 via-green-600 to-gray-800 bg-clip-text text-transparent">tions</span>
              </h2>
            </motion.div>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <motion.div 
                  key={index}
                  variants={itemVariants}
                  className="bg-white rounded-xl shadow-lg border border-gray-100 p-6"
                >
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </motion.div>
              ))}
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
            <motion.h2 variants={itemVariants} className="text-3xl md:text-5xl font-bold mb-6 font-heading">
              <span className="text-white">Ready to Start Your </span>
              <span className="text-green-400">Glo</span>
              <span className="bg-gradient-to-r from-green-500 via-green-400 to-green-300 bg-clip-text text-transparent">bal Journey?</span>
            </motion.h2>
            <motion.p variants={itemVariants} className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Our expertise lies in navigating the intricacies of work visas and immigration, making your dream of working abroad a tangible reality. Whether you're a student seeking international education or a professional looking for global opportunities, we're here to guide you every step of the way.
            </motion.p>
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://wa.me/918985404669" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center px-8 py-4 bg-green-600 hover:bg-green-700 text-white rounded-lg hover:shadow-lg transition-all font-semibold transform hover:scale-105"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                WhatsApp Support
              </a>
              <a 
                href="mailto:flynetworks@outlook.com"
                className="inline-flex items-center px-8 py-4 bg-white hover:bg-gray-100 text-gray-800 rounded-lg hover:shadow-lg transition-all font-semibold transform hover:scale-105"
              >
                <Mail className="w-5 h-5 mr-2" />
                Email Us
              </a>
            </motion.div>
          </motion.div>
        </section>
      </div>
    </>
  );
} 