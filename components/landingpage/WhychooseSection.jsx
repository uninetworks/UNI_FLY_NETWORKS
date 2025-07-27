"use client";

import React from "react";
import {
  HoverSlider,
  HoverSliderImage,
  HoverSliderImageWrap,
  TextStaggerHover,
} from "@/components/ui/animated-slideshow";
import styles from "../../styles/landingpage/WhyChooseSection.module.scss";
import GsapFadeIn from "../animations/GsapFadeIn";

// Using images from public/why folder
const SLIDES = [
  {
    id: "slide-1",
    title: "Expertise and Competence",
    imageUrl: "/why/Gemini_Generated_Image_uutnu6uutnu6uutn.png",
  },
  {
    id: "slide-2",
    title: "Transparency and Honest Communication",
    imageUrl: "/why/Gemini_Generated_Image_a8fmgia8fmgia8fm.png",
  },
  {
    id: "slide-3",
    title: "Reliability and Consistency",
    imageUrl: "/why/Gemini_Generated_Image_pc61igpc61igpc61.png",
  },
  {
    id: "slide-4",
    title: "Security and Confidentiality",
    imageUrl: "/why/Gemini_Generated_Image_jxacq2jxacq2jxac.png",
  },
  {
    id: "slide-5",
    title: "Proven Track Record",
    imageUrl: "/why/Gemini_Generated_Image_wz1wpmwz1wpmwz1w.png",
  },
];

const WhyChooseSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-white via-gray-50 to-gray-100">
      {/* Light background pattern */}
      <div className="absolute inset-0 opacity-20 bg-gradient-to-r from-green-100/30 to-transparent"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16">
        <GsapFadeIn effect="slide-up" duration={1} delay={0.2}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
              Why Choose{" "}
              <span className="bg-gradient-to-r from-green-600 via-green-500 to-green-400 bg-clip-text text-transparent">
                UNI Networks?
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              We deliver cutting-edge technology solutions with unmatched expertise and reliability.
            </p>
          </div>
        </GsapFadeIn>

        <GsapFadeIn effect="fade" duration={1.2} delay={0.4}>
          <HoverSlider className="min-h-[600px] place-content-center p-6 md:px-12 ">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16">
              <div className="flex flex-col space-y-4 lg:space-y-6 w-full lg:w-1/2">
                {SLIDES.map((slide, index) => (
                  <TextStaggerHover
                    key={slide.title}
                    index={index}
                    className="cursor-pointer text-2xl md:text-3xl lg:text-4xl font-bold uppercase tracking-tight text-gray-800 hover:text-green-600 transition-colors duration-300"
                    text={slide.title}
                  />
                ))}
              </div>
              <div className="w-full lg:w-1/2">
                <HoverSliderImageWrap className="relative h-80 lg:h-96 rounded-xl overflow-hidden shadow-lg">
                  {SLIDES.map((slide, index) => (
                    <div key={slide.id} className="relative">
                      <HoverSliderImage
                        index={index}
                        imageUrl={slide.imageUrl}
                        src={slide.imageUrl}
                        alt={slide.title}
                        className="w-full h-full object-cover"
                        loading="eager"
                        decoding="async"
                      />
                    </div>
                  ))}
                </HoverSliderImageWrap>
              </div>
            </div>
          </HoverSlider>
        </GsapFadeIn>
      </div>
    </section>
  );
};

export default WhyChooseSection;