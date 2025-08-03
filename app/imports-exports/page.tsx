"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  Globe,
  Package,
  Truck,
  FileText,
  Users,
  CheckCircle,
  Phone,
  Mail,
  ArrowRight,
  Ship,
  Warehouse,
  TrendingUp,
  Shield,
  Clock,
  DollarSign,
  Award,
  MessageCircle
} from "lucide-react";
import Link from "next/link";
import { Header1 } from "@/components/ui/header";
import { Squares } from "@/components/ui/squares-background";

const services = [
  {
    icon: Package,
    title: "Product Imports",
    description: "Sourcing, quality check, and delivery of goods from global suppliers to your doorstep.",
    features: [
      "Global supplier sourcing",
      "Quality assurance checks",
      "Door-to-door delivery",
      "Customs clearance support"
    ]
  },
  {
    icon: Ship,
    title: "Product Exports",
    description: "Take your product worldwide. We help you with packaging, compliance, and customs.",
    features: [
      "International market access",
      "Packaging and compliance",
      "Customs documentation",
      "Global shipping solutions"
    ]
  },
  {
    icon: FileText,
    title: "Customs Documentation",
    description: "We manage all paperwork and regulations for stress-free import/export.",
    features: [
      "Complete paperwork management",
      "Regulatory compliance",
      "HS code classification",
      "Legal documentation support"
    ]
  },
  {
    icon: Truck,
    title: "Logistics & Shipping",
    description: "Freight forwarding, warehousing, and last-mile delivery support.",
    features: [
      "Freight forwarding services",
      "Warehousing solutions",
      "Last-mile delivery",
      "Supply chain optimization"
    ]
  },
  {
    icon: Users,
    title: "Trade Consulting",
    description: "New to trading? We guide you through licenses, HS codes, sourcing, and logistics planning.",
    features: [
      "Trade license guidance",
      "HS code assistance",
      "Sourcing strategies",
      "Logistics planning"
    ]
  }
];

const productCategories = [
  {
    title: "Agro Products & Spices",
    description: "Agricultural products and premium spices"
  },
  {
    title: "Mobile Accessories & Electronics",
    description: "Latest gadgets and electronic components"
  },
  {
    title: "Industrial Tools & Equipment",
    description: "Professional tools and machinery"
  },
  {
    title: "Textiles & Apparel",
    description: "Fashion and textile products"
  },
  {
    title: "Packaged Foods",
    description: "Food products and beverages"
  },
  {
    title: "Customized Orders",
    description: "Based on specific requirements"
  }
];

const benefits = [
  {
    icon: Shield,
    title: "Government-approved",
    description: "Trade licenses and compliance"
  },
  {
    icon: Globe,
    title: "Global Support",
    description: "National and international logistics"
  },
  {
    icon: Package,
    title: "End-to-end Service",
    description: "From sourcing to delivery"
  },
  {
    icon: Users,
    title: "Perfect for All",
    description: "Startups and bulk traders"
  },
  {
    icon: DollarSign,
    title: "Transparent Pricing",
    description: "Clear costs and timely updates"
  },
  {
    icon: Users,
    title: "Dedicated Manager",
    description: "Personal account manager"
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

export default function ImportsExportsPage() {
  return (
    <>
      <Header1 />
      <div className="pt-20">
        {/* Hero Section */}
        <section className="bg-imports-exports-pattern text-white py-20 relative overflow-hidden">
          {/* Squares Background Effect */}
          <div className="absolute inset-0 w-full h-full z-0">
            <Squares
              direction="diagonal"
              speed={0.3}
              squareSize={50}
              borderColor="#1a2b4d" // Dark blue for borders
              hoverFillColor="#0a1428" // Even darker blue on hover
              className="z-0"
            />
          </div>

          {/* Gradient Overlay for Enhanced Visual Effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/30 via-transparent to-blue-900/10 z-10"></div>
          
          <div className="absolute top-10 right-10 w-64 h-64 bg-blue-500/20 rounded-full opacity-30 blur-3xl animate-float"></div>
          <div className="absolute bottom-10 left-10 w-64 h-64 bg-orange-500/20 rounded-full opacity-30 blur-3xl animate-float delay-200"></div>
          
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
                  src="/brands/WhatsApp Image 2025-07-27 at 15.13.38_cb6edaae.jpg"
                  alt="Imports & Exports Logo"
                  className="w-32 h-32 md:w-40 md:h-40 mx-auto rounded-2xl shadow-2xl border-4 border-blue-500/20"
                />
              </motion.div>
              
              <div className="inline-flex items-center space-x-2 bg-blue-500/20 backdrop-blur-sm text-blue-400 px-6 py-2 rounded-full mb-6">
                <Globe className="w-4 h-4" />
                <span className="text-sm font-medium">A Division of Uninetworks</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold mb-6 font-heading">
                <span className="text-gradient-blue">Imports & Exports</span>
              </h1>
              <p className="text-2xl md:text-3xl font-semibold mb-6">
                Your Gateway to Global Opportunities.
              </p>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                Reliable import and export services to help you expand your business across borders.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/#contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-lg hover:shadow-lg transition-all font-semibold transform hover:scale-105"
                >
                  Contact Us
                </Link>
                <Link 
                  href="/#contact"
                  className="inline-flex items-center px-8 py-4 bg-white hover:bg-gray-100 text-gray-800 rounded-lg hover:shadow-lg transition-all font-semibold transform hover:scale-105"
                >
                  Get a Quote
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* About Section */}
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
                Who We{" "}
                <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 bg-clip-text text-transparent">
                  Are
                </span>
              </h2>
            </motion.div>

            <motion.div variants={itemVariants} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  At <strong>Uninetworks Imports & Exports</strong>, we specialize in the seamless movement of goods both locally and internationally. Whether you want to bring high-quality products into India or ship your brand across the globe, we handle everything from procurement to delivery.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  We work across industries, enabling startups, SMEs, and established companies to enter new markets without the complexity. Backed by the trust of Uninetworks, our mission is to make cross-border trade simple, legal, and profitable.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-gray-700 font-semibold">Cross-border trade expertise</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-gray-700 font-semibold">End-to-end solutions</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-gray-700 font-semibold">Legal compliance</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-white" />
                    </div>
                    <span className="text-gray-700 font-semibold">Trusted by Uninetworks</span>
                  </div>
                </div>
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
              <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-6 font-heading">
                Our{" "}
                <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 bg-clip-text text-transparent">
                  Services
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive import and export solutions for your business growth
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <motion.div 
                  key={index}
                  variants={itemVariants}
                  className="bg-white rounded-xl shadow-lg border border-gray-100 p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  
                  <div className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-4 h-4 text-blue-500 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Product Categories Section */}
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
                Types of Products We{" "}
                <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 bg-clip-text text-transparent">
                  Handle
                </span>
              </h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {productCategories.map((category, index) => (
                <motion.div 
                  key={index}
                  variants={itemVariants}
                  className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-all duration-300"
                >
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{category.title}</h3>
                  <p className="text-gray-600">{category.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Why Choose Us Section */}
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
                Why Choose{" "}
                <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 bg-clip-text text-transparent">
                  Us
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
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-800 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Contact Section */}
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
                Let's Trade{" "}
                <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 bg-clip-text text-transparent">
                  Smarter
                </span>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                Want to import or export products with ease? Reach out to us for a free consultation.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <motion.div variants={itemVariants} className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">Pavan Kumar</h3>
                    <p className="text-gray-600">Trade Specialist</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">Email</h3>
                    <a href="mailto:Uninetworks@outlook.com" className="text-blue-600 hover:text-blue-700">
                      Uninetworks@outlook.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-800">Phone</h3>
                    <p className="text-gray-600">+91 89854 04669</p>
                  </div>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Get a Free Consultation</h3>
                <form className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      placeholder="Your Phone"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  <div>
                    <textarea
                      placeholder="Your Message"
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-lg hover:shadow-lg transition-all font-semibold transform hover:scale-105"
                  >
                    Send Message
                  </button>
                </form>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Branding Note */}
        <section className="py-12 bg-white border-t border-gray-100">
          <motion.div 
            className="max-w-4xl mx-auto px-6 text-center"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div variants={itemVariants} className="bg-gradient-to-r from-gray-50 to-blue-50 p-8 rounded-2xl border border-gray-100">
              <p className="text-lg text-gray-700 italic">
                <strong>"Imports & Exports"</strong> is a division of Uninetworks, a company trusted for IT, cloud, international consulting, and trading services.
              </p>
            </motion.div>
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
              Ready to Expand Your{" "}
              <span className="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
                Business Globally?
              </span>
            </motion.h2>
            <motion.p variants={itemVariants} className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Let's discuss how our import and export services can help you reach new markets and grow your business.
            </motion.p>
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/#contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-lg hover:shadow-lg transition-all font-semibold transform hover:scale-105"
              >
                <MessageCircle className="w-5 h-5 mr-2" />
                Contact Us
              </Link>
              <Link 
                href="/#contact"
                className="inline-flex items-center px-8 py-4 bg-white hover:bg-gray-100 text-gray-800 rounded-lg hover:shadow-lg transition-all font-semibold transform hover:scale-105"
              >
                <ArrowRight className="w-5 h-5 mr-2" />
                Get a Quote
              </Link>
            </motion.div>
          </motion.div>
        </section>
      </div>
    </>
  );
} 