"use client";

import React from "react";
import { motion } from "framer-motion";
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

const services = [
  {
    icon: GraduationCap,
    title: "Study Abroad Guidance",
    description: "Complete support for international education",
    features: [
      "Country selection & university matching",
      "SOP, LOR, application submission",
      "Documentation & visa filing",
      "Post-admission support"
    ]
  },
  {
    icon: Briefcase,
    title: "Job Opportunities Abroad",
    description: "Verified openings worldwide",
    features: [
      "Verified openings in Gulf, Europe, Canada, Australia",
      "Skill-based and experience-based job categories",
      "End-to-end processing from offer to onboarding",
      "Transparent salaries and service fees"
    ]
  },
  {
    icon: FileText,
    title: "Visa & Immigration",
    description: "Complete visa assistance",
    features: [
      "Tourist, student, work, and dependent visa support",
      "Complete documentation and consulate preparation",
      "Updates on new immigration rules and chances",
      "Legal guidance and compliance"
    ]
  },
  {
    icon: Plane,
    title: "Full Package Assistance",
    description: "End-to-end support services",
    features: [
      "Flight tickets & accommodation help",
      "Pre-departure training",
      "Legal guidance and international compliance",
      "Customer support from India and abroad"
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
        <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-20 relative overflow-hidden">
          <div className="absolute top-10 right-10 w-64 h-64 bg-green-500/20 rounded-full opacity-30 blur-3xl"></div>
          
          <motion.div 
            className="max-w-7xl mx-auto px-6 relative z-10"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="text-center">
              <div className="inline-flex items-center space-x-2 bg-green-500/20 backdrop-blur-sm text-green-400 px-6 py-2 rounded-full mb-6">
                <Globe className="w-4 h-4" />
                <span className="text-sm font-medium">Global Opportunities</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-green-400 via-green-500 to-green-600 bg-clip-text text-transparent">FlyNetworks</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-6">
                Your Gateway to Global Opportunities
              </p>
              <p className="text-lg text-gray-400 max-w-4xl mx-auto mb-8">
                Specialized brand under UniNetworks, focused on empowering individuals with global opportunities through comprehensive Abroad Study, Immigration, Visa Assistance, and International Job Placement services.
              </p>
            </motion.div>
          </motion.div>
        </section>

        {/* Mission Section */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
          <motion.div 
            className="max-w-7xl mx-auto px-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants} className="text-center">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">
                Our{" "}
                <span className="bg-gradient-to-r from-green-600 via-green-500 to-green-400 bg-clip-text text-transparent">
                  Mission
                </span>
              </h2>
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 max-w-4xl mx-auto">
                <blockquote className="text-2xl md:text-3xl font-semibold text-gray-800 italic">
                  "To connect aspirations with international destinations through transparent, reliable, and personalized support services."
                </blockquote>
              </div>
            </motion.div>
          </motion.div>
        </section>

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
              <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">
                Our{" "}
                <span className="bg-gradient-to-r from-green-600 via-green-500 to-green-400 bg-clip-text text-transparent">
                  Services
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive support for your international journey
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <motion.div 
                  key={index}
                  variants={itemVariants}
                  className="bg-white rounded-xl shadow-lg border border-gray-100 p-8 hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  
                  <div className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Countries Section */}
        <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
          <motion.div 
            className="max-w-7xl mx-auto px-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants} className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">
                Countries We{" "}
                <span className="bg-gradient-to-r from-green-600 via-green-500 to-green-400 bg-clip-text text-transparent">
                  Serve
                </span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {countries.map((region, index) => (
                <motion.div 
                  key={index}
                  variants={itemVariants}
                  className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-all duration-300"
                >
                  <h3 className="text-xl font-bold text-gray-800 mb-4">{region.region}</h3>
                  <div className="space-y-2">
                    {region.countries.map((country, countryIndex) => (
                      <div key={countryIndex} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className="text-gray-700">{country}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
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
              <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">
                Job{" "}
                <span className="bg-gradient-to-r from-green-600 via-green-500 to-green-400 bg-clip-text text-transparent">
                  Openings
                </span>
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
              <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">
                Why Choose{" "}
                <span className="bg-gradient-to-r from-green-600 via-green-500 to-green-400 bg-clip-text text-transparent">
                  FlyNetworks?
                </span>
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
              <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">
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
                  FlyNetworks is a licensed entity under the parent company <strong>UniNetworks</strong>, and holds all necessary legal permissions to operate nationally and internationally.
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
              <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6">
                Frequently Asked{" "}
                <span className="bg-gradient-to-r from-green-600 via-green-500 to-green-400 bg-clip-text text-transparent">
                  Questions
                </span>
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
            <motion.h2 variants={itemVariants} className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Start Your{" "}
              <span className="bg-gradient-to-r from-green-400 via-green-500 to-green-600 bg-clip-text text-transparent">
                Global Journey?
              </span>
            </motion.h2>
            <motion.p variants={itemVariants} className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Whether you're a student, job seeker, or planning to settle abroad, we provide end-to-end support to make your journey seamless, legal, and successful.
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