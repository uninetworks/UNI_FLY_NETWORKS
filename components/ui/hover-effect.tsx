"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export const HoverEffect = ({
  items,
  className
}: {
  items: any[];
  className?: string;
}) => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div
      className={cn("grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  py-10", className)}>
      {items.map((item, idx) => (
        <a
          href={item?.link}
          key={idx}
          className="relative group block p-2 h-full w-full"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}>
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-gradient-to-br from-green-100 via-green-50 to-white block rounded-3xl shadow-2xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  transition: { duration: 0.3, ease: "easeOut" },
                }}
                exit={{
                  opacity: 0,
                  scale: 0.95,
                  transition: { duration: 0.2, ease: "easeIn" },
                }} />
            )}
          </AnimatePresence>
          <Card>
            {item.icon && <CardIcon>{item.icon}</CardIcon>}
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
            {item.countries && <CardCountries countries={item.countries} />}
          </Card>
        </a>
      ))}
    </div>
  );
};

export const Card = ({
  className,
  children
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "rounded-2xl h-full w-full p-1 overflow-hidden bg-white border border-gray-200 group-hover:border-green-300 relative z-20 shadow-lg hover:shadow-2xl transition-all duration-300 group-hover:scale-105",
        className
      )}>
      <div className="relative z-50">
        <div className="p-8">{children}</div>
      </div>
    </div>
  );
};

export const CardIcon = ({
  className,
  children
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <div className={cn("flex items-center justify-center mb-4", className)}>
      {children}
    </div>
  );
};

export const CardTitle = ({
  className,
  children
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <h4 className={cn("text-gray-800 font-bold tracking-wide mt-1 text-xl group-hover:text-green-700 transition-colors duration-300", className)}>
      {children}
    </h4>
  );
};

export const CardDescription = ({
  className,
  children
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  return (
    <p
      className={cn("mt-3 text-gray-600 tracking-wide leading-relaxed text-sm group-hover:text-gray-700 transition-colors duration-300", className)}>
      {children}
    </p>
  );
};

export const CardCountries = ({
  countries
}: {
  countries: string[];
}) => {
  return (
    <div className="mt-4">
      <h5 className="text-gray-700 font-semibold mb-3 text-sm">Available Countries:</h5>
      <div className="space-y-1">
        {countries.map((country, index) => (
          <div key={index} className="flex items-center space-x-2">
            <div className="w-1.5 h-1.5 bg-green-500 rounded-full flex-shrink-0"></div>
            <span className="text-gray-600 text-sm">{country}</span>
          </div>
        ))}
      </div>
    </div>
  );
}; 