"use client";

import React, { useState, useEffect } from 'react';
import { FaCampground, FaFire, FaTint, FaHotTub, FaHiking } from 'react-icons/fa';

const InteractiveSelector = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animatedOptions, setAnimatedOptions] = useState([]);
  
  const options = [
    {
      title: "Web Development (Static & Dynamic)",
      description: "Creating websites, from simple, fixed 'static' pages to interactive 'dynamic' sites that change based on user input.",
      image: "/services/Gemini_Generated_Image_yo7e9iyo7e9iyo7e.png",
      icon: <FaCampground size={24} className="text-white" />
    },
    {
      title: "IT Infrastructure (Cable Management)",
      description: "Organizing physical data and power cables in a server room to ensure reliability, safety, and easy maintenance.",
      image: "/services/Gemini_Generated_Image_chb9j0chb9j0chb9.png",
      icon: <FaFire size={24} className="text-white" />
    },
    {
      title: "App Development (iOS & Android)",
      description: "Building mobile applications for either Apple's iOS devices (iPhones) or the wide range of devices running Google's Android.",
      image: "/services/Gemini_Generated_Image_kasvylkasvylkasv.png",
      icon: <FaTint size={24} className="text-white" />
    },
    {
      title: "Server Installation & Configuration",
      description: "The process of physically setting up a server in a rack and then installing and configuring its software to make it operational.",
      image: "/services/Gemini_Generated_Image_ravwsgravwsgravw.png",
      icon: <FaHotTub size={24} className="text-white" />
    },
    {
      title: "Wi-Fi and LAN (Networking)",
      description: "Two ways to connect devices: Wi-Fi offers wireless convenience, while a wired LAN provides a faster, more stable connection",
      image: "/services/Gemini_Generated_Image_hynayrhynayrhyna.png",
      icon: <FaHiking size={24} className="text-white" />
    },
    {
      title: "Surveillance (CCTV & IP Cams)",
      description: "Using cameras for security, either with traditional CCTV (local, wired systems) or modern IP Cams (digital, networked, and remotely accessible).",
      image: "/services/Gemini_Generated_Image_bhvuyobhvuyobhvu.png",
      icon: <FaHiking size={24} className="text-white" />
    }
  ];

  const handleOptionClick = (index) => {
    if (index !== activeIndex) {
      setActiveIndex(index);
    }
  };

  useEffect(() => {
    const timers = [];
    
    options.forEach((_, i) => {
      const timer = setTimeout(() => {
        setAnimatedOptions(prev => [...prev, i]);
      }, 180 * i);
      timers.push(timer);
    });
    
    return () => {
      timers.forEach(timer => clearTimeout(timer));
    };
  }, []);

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 font-sans text-gray-800"> 
      {/* Header Section */}
      <div className="w-full max-w-2xl px-6 mt-8 mb-2 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-3 tracking-tight drop-shadow-lg animate-fadeInTop delay-300">
          <span className="bg-gradient-to-r from-green-600 via-green-500 to-green-400 bg-clip-text text-transparent">
            Services We Do
          </span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 font-medium max-w-xl mx-auto animate-fadeInTop delay-600">
          Discover our comprehensive range of technology solutions and services.
        </p>
      </div>

      <div className="h-12"></div>

      {/* Options Container */}
      <div className="options flex w-full max-w-[1200px] min-w-[800px] h-[500px] mx-0 items-stretch overflow-hidden relative">
        {options.map((option, index) => (
          <div
            key={index}
            className={`
              option relative flex flex-col justify-end overflow-hidden transition-all duration-700 ease-in-out group
              ${activeIndex === index ? 'active' : ''}
            `}
            style={{
              backgroundImage: `url('${option.image}')`,
              backgroundSize: activeIndex === index ? 'cover' : 'cover',
              backgroundPosition: 'center',
              backfaceVisibility: 'hidden',
              opacity: animatedOptions.includes(index) ? 1 : 0,
              transform: animatedOptions.includes(index) ? 'translateX(0)' : 'translateX(-60px)',
              minWidth: activeIndex === index ? '300px' : '80px',
              minHeight: '100px',
              margin: 0,
              borderRadius: '12px',
              borderWidth: '2px',
              borderStyle: 'solid',
              borderColor: activeIndex === index ? '#10b981' : '#e5e7eb',
              cursor: 'pointer',
              backgroundColor: '#ffffff',
              boxShadow: activeIndex === index 
                ? '0 20px 60px rgba(16, 185, 129, 0.15)' 
                : '0 10px 30px rgba(0,0,0,0.1)',
              flex: activeIndex === index ? '3 1 0%' : '1 1 0%',
              zIndex: activeIndex === index ? 10 : 1,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
              position: 'relative',
              overflow: 'hidden',
              willChange: 'flex-grow, box-shadow, background-size, background-position'
            }}
            onClick={() => handleOptionClick(index)}
            onMouseEnter={() => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(0)}
          >
            {/* Shadow effect */}
            <div 
              className="shadow absolute left-0 right-0 pointer-events-none transition-all duration-700 ease-in-out"
              style={{
                bottom: activeIndex === index ? '0' : '-40px',
                height: '120px',
                boxShadow: activeIndex === index 
                  ? 'inset 0 -120px 120px -120px rgba(0,0,0,0.7), inset 0 -120px 120px -80px rgba(0,0,0,0.5)' 
                  : 'inset 0 -120px 0px -120px rgba(0,0,0,0.7), inset 0 -120px 0px -80px rgba(0,0,0,0.5)'
              }}
            ></div>
            
            {/* Service Name at Bottom - Always Visible */}
            <div 
              className="service-name absolute bottom-4 left-4 right-4 text-white font-bold transition-all duration-700 ease-in-out z-10"
              style={{
                opacity: 1,
                fontSize: activeIndex === index ? '1rem' : '0.875rem',
                fontWeight: activeIndex === index ? '700' : '600',
                textShadow: '2px 2px 4px rgba(0,0,0,0.8)',
                transform: 'translateY(0)',
                lineHeight: '1.2',
                textAlign: 'left',
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis'
              }}
            >
              {option.title}
            </div>
            
            {/* Full Content - Only for Active Card */}
            <div 
              className="full-content absolute left-0 right-0 bottom-16 flex items-center justify-start h-12 z-2 pointer-events-none px-4 gap-3 w-full transition-all duration-700 ease-in-out"
              style={{
                opacity: activeIndex === index ? 1 : 0,
                transform: activeIndex === index ? 'translateY(0)' : 'translateY(20px)'
              }}
            >
              <div className="icon min-w-[44px] max-w-[44px] h-[44px] flex items-center justify-center rounded-full bg-[rgba(255,255,255,0.9)] backdrop-blur-[10px] shadow-[0_4px_12px_rgba(0,0,0,0.15)] border-2 border-[#e5e7eb] flex-shrink-0 flex-grow-0 transition-all duration-200">
                {React.cloneElement(option.icon, { className: "text-green-600" })}
              </div>
              <div className="info text-white whitespace-pre relative">
                <div 
                  className="main font-bold text-lg transition-all duration-700 ease-in-out"
                  style={{
                    opacity: 1,
                    transform: 'translateX(0)',
                    fontSize: '1.125rem',
                    fontWeight: '700',
                    textShadow: '2px 2px 4px rgba(0,0,0,0.5)'
                  }}
                >
                  {option.title}
                </div>
                <div 
                  className="sub text-base text-gray-200 transition-all duration-700 ease-in-out"
                  style={{
                    opacity: 1,
                    transform: 'translateX(0)',
                    textShadow: '1px 1px 2px rgba(0,0,0,0.5)'
                  }}
                >
                  {option.description}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Custom animations */}
      <style jsx>{`
        @keyframes slideFadeIn {
          0% {
            opacity: 0;
            transform: translateX(-60px);
          }
          100% {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeInFromTop {
          0% {
            opacity: 0;
            transform: translateY(-20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fadeInTop {
          opacity: 0;
          transform: translateY(-20px);
          animation: fadeInFromTop 0.8s ease-in-out forwards;
        }
        
        .delay-300 {
          animation-delay: 0.3s;
        }
        
        .delay-600 {
          animation-delay: 0.6s;
        }
      `}</style>
    </div>
  );
};

export default InteractiveSelector;