"use client";

import React from "react";
import { motion } from "framer-motion";
import { SparklesCore } from "@/components/ui/sparkles";
import { Header1 } from "@/components/ui/header";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function AnimatedHomePage() {
  return (
    <>
      <Header1 />
      <div className="pt-20">
        {/* Hero Section with Particle Animation */}
        <div className="h-[40rem] w-full bg-black flex flex-col items-center justify-center overflow-hidden relative">
          {/* Background Particles */}
          <div className="w-full absolute inset-0 h-screen">
            <SparklesCore
              id="uninetworks-particles"
              background="transparent"
              minSize={0.6}
              maxSize={1.4}
              particleDensity={100}
              className="w-full h-full"
              particleColor="#00cc2c"
              speed={0.8}
            />
          </div>

          {/* Main Content */}
          <div className="relative z-20 text-center">
            {/* Main Title */}
            <motion.h1 
              className="md:text-7xl text-3xl lg:text-9xl font-bold text-center text-white mb-8 font-heading"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              UniNetworks
            </motion.h1>

            {/* Glowing Line Effect */}
            <div className="w-[40rem] h-40 relative mx-auto">
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
                particleColor="#00cc2c"
              />

              {/* Radial Gradient to prevent sharp edges */}
              <div className="absolute inset-0 w-full h-full bg-black [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
            </div>

            {/* Subtitle */}
            <motion.p 
              className="text-xl md:text-2xl text-gray-300 mt-8 font-body"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              Your Gateway to Digital Excellence
            </motion.p>

            {/* Tagline */}
            <motion.p 
              className="text-lg text-gray-400 mt-4 font-body max-w-2xl mx-auto px-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.2 }}
            >
              Empowering businesses with cutting-edge technology solutions and innovative digital infrastructure
            </motion.p>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center mt-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.6 }}
            >
              <Link 
                href="/"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white rounded-lg hover:shadow-lg transition-all font-semibold transform hover:scale-105"
              >
                Explore Services
              </Link>
              <Link 
                href="/#contact"
                className="inline-flex items-center px-8 py-4 bg-white hover:bg-gray-100 text-gray-800 rounded-lg hover:shadow-lg transition-all font-semibold transform hover:scale-105"
              >
                Get Started
              </Link>
            </motion.div>
          </div>

          {/* Back to Main Page */}
          <motion.div 
            className="absolute top-8 left-8 z-30"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 2 }}
          >
            <Link 
              href="/"
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm text-white rounded-lg hover:bg-white/20 transition-all"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </motion.div>
        </div>

        {/* Additional Content Section */}
        <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-6 font-heading">
                <span className="text-white">Why Choose </span>
                <span className="text-gradient-primary">UniNetworks?</span>
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto font-body">
                Experience the difference with our comprehensive approach to digital transformation and technology solutions.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Expert Team",
                  description: "Certified developers and network engineers with years of experience.",
                  icon: "👨‍💼"
                },
                {
                  title: "End-to-End Solutions",
                  description: "From consulting to deployment and ongoing support.",
                  icon: "🔄"
                },
                {
                  title: "24/7 Support",
                  description: "Round-the-clock assistance whenever you need us.",
                  icon: "📞"
                }
              ].map((item, index) => (
                <motion.div 
                  key={index}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                >
                  <div className="text-4xl mb-4">{item.icon}</div>
                  <h3 className="text-xl font-bold mb-3 font-heading">{item.title}</h3>
                  <p className="text-gray-300 font-body">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
} 