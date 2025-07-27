"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Building2,
  Globe, 
  Smartphone, 
  Cloud, 
  Shield, 
  Database, 
  Code, 
  Settings, 
  Users,
  CheckCircle,
  ArrowRight,
  Zap,
  Lock,
  Monitor,
  Server
} from "lucide-react";
import Link from "next/link";
import { Header1 } from "@/components/ui/header";
import Image from "next/image";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description: "Custom websites and web applications with modern technologies",
    features: [
      "Custom Website Development",
      "E-commerce Solutions",
      "Progressive Web Apps",
      "API Development"
    ],
    image: "/services/Gemini_Generated_Image_yo7e9iyo7e9iyo7e.png"
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications",
    features: [
      "iOS App Development",
      "Android App Development",
      "Cross-platform Solutions",
      "App Store Optimization"
    ],
    image: "/services/Gemini_Generated_Image_chb9j0chb9j0chb9.png"
  },
  {
    icon: Cloud,
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure and migration services",
    features: [
      "Cloud Migration",
      "AWS/Azure/GCP Setup",
      "Serverless Architecture",
      "Cloud Security"
    ],
    image: "/services/Gemini_Generated_Image_kasvylkasvylkasv.png"
  },
  {
    icon: Shield,
    title: "Cybersecurity",
    description: "Comprehensive security solutions to protect your digital assets",
    features: [
      "Security Audits",
      "Penetration Testing",
      "Firewall Configuration",
      "Data Encryption"
    ],
    image: "/services/Gemini_Generated_Image_ravwsgravwsgravw.png"
  },
  {
    icon: Database,
    title: "Database Management",
    description: "Database design, optimization, and management for optimal performance",
    features: [
      "Database Design",
      "Performance Tuning",
      "Data Migration",
      "Backup Strategies"
    ],
    image: "/services/Gemini_Generated_Image_hynayrhynayrhyna.png"
  },
  {
    icon: Code,
    title: "Custom Software",
    description: "Tailored software solutions designed for your specific requirements",
    features: [
      "Business Process Automation",
      "Custom CRM Systems",
      "Inventory Management",
      "Reporting Tools"
    ],
    image: "/services/Gemini_Generated_Image_bhvuyobhvuyobhvu.png"
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

export default function ServicesPage() {
  return (
    <>
      <Header1 />
      <div className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white py-20 relative overflow-hidden">
          {/* Background decorative element */}
          <div className="absolute top-10 right-10 w-64 h-64 bg-green-500/20 rounded-full opacity-30 blur-3xl"></div>
          
          <motion.div 
            className="max-w-7xl mx-auto px-6 relative z-10"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="text-center">
              {/* Pill-shaped tag */}
              <div className="inline-flex items-center space-x-2 bg-green-500/20 backdrop-blur-sm text-green-400 px-6 py-2 rounded-full mb-6">
                <Building2 className="w-4 h-4" />
                <span className="text-sm font-medium">Our Expertise</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                <span className="bg-gradient-to-r from-green-400 via-green-500 to-green-600 bg-clip-text text-transparent">Services</span>{" "}
                <span className="text-white">Offered</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
                Comprehensive IT solutions with cutting-edge technology and personalized service plans
              </p>
            </motion.div>
          </motion.div>
        </section>

        {/* Services Cards Section */}
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
                What We{" "}
                <span className="bg-gradient-to-r from-green-600 via-green-500 to-green-400 bg-clip-text text-transparent">
                  Offer
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From web development to cybersecurity, we provide end-to-end IT solutions tailored to your business needs.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div 
                  key={index}
                  variants={itemVariants}
                  className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  {/* Service Image */}
                  <div className="h-48 relative overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-xl flex items-center justify-center">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                  </div>
                  
                  {/* Service Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                    
                    {/* Features List */}
                    <div className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-3">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Process Section */}
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
                  Process
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                A proven methodology that ensures successful project delivery and client satisfaction.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  number: "01",
                  title: "Discovery & Planning",
                  description: "We analyze your requirements and create a detailed project plan.",
                  icon: Settings
                },
                {
                  number: "02",
                  title: "Design & Development",
                  description: "Our team builds your solution using the latest technologies.",
                  icon: Code
                },
                {
                  number: "03",
                  title: "Testing & Quality Assurance",
                  description: "Rigorous testing ensures your solution works flawlessly.",
                  icon: CheckCircle
                },
                {
                  number: "04",
                  title: "Deployment & Support",
                  description: "We deploy your solution and provide ongoing support.",
                  icon: Server
                }
              ].map((step, index) => (
                <motion.div 
                  key={index}
                  variants={itemVariants}
                  className="text-center"
                >
                  <div className="relative">
                    <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <step.icon className="w-10 h-10 text-white" />
                    </div>
                    {index < 3 && (
                      <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-green-500 to-transparent transform translate-x-4"></div>
                    )}
                  </div>
                  <div className="text-4xl font-bold text-green-600 mb-4">{step.number}</div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-3">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Why Choose Our Services */}
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
                Why Choose Our{" "}
                <span className="bg-gradient-to-r from-green-600 via-green-500 to-green-400 bg-clip-text text-transparent">
                  Services?
                </span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div variants={itemVariants} className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Expert Team</h3>
                    <p className="text-gray-600">Our skilled professionals bring years of experience across various technology domains.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Zap className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Fast Delivery</h3>
                    <p className="text-gray-600">We deliver projects on time with agile methodologies and efficient processes.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">Quality Assurance</h3>
                    <p className="text-gray-600">Rigorous testing and quality checks ensure your solution works flawlessly.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Monitor className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">24/7 Support</h3>
                    <p className="text-gray-600">Round-the-clock technical support to ensure your systems run smoothly.</p>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Ready to Get Started?</h3>
                <p className="text-gray-600 mb-6">
                  Let's discuss your project requirements and find the perfect solution for your business.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Free consultation</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Custom solutions</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Ongoing support</span>
                  </div>
                </div>
                <Link 
                  href="/#contact"
                  className="inline-flex items-center justify-center w-full mt-6 px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-lg hover:shadow-lg transition-all font-semibold transform hover:scale-105"
                >
                  Start Your Project
                </Link>
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
              Ready to Transform Your{" "}
              <span className="bg-gradient-to-r from-green-400 via-green-500 to-green-600 bg-clip-text text-transparent">
                Business?
              </span>
            </motion.h2>
            <motion.p variants={itemVariants} className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Let's discuss how our services can help you achieve your technology goals and drive business growth.
            </motion.p>
            <motion.div variants={itemVariants}>
              <Link 
                href="/#contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-lg hover:shadow-lg transition-all font-semibold transform hover:scale-105"
              >
                Get Started Today
              </Link>
            </motion.div>
          </motion.div>
        </section>
      </div>
    </>
  );
} 