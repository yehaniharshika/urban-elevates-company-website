import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import design1 from "../../assets/Home-Section/3.jpg";
import design2 from "../../assets/Home-Section/5.jpg";
import design3 from "../../assets/Home-Section/7.jpg";
import design4 from "../../assets/Home-Section/6.jpg";

const sliderContent = [
  {
    img: design1,
    text: "Plaza Design - Where urban elegance meets creativity.",
  },
  {
    img: design2,
    text: "Modern House for Modern Living - Designed with future in mind.",
  },
  {
    img: design3,
    text: "Modern Interior Design - Smart spaces for smart living.",
  },
  {
    img: design4,
    text: "Design Villa - Experience luxury living at its finest.",
  },
];

const Header = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % sliderContent.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {/* Background Slider Image */}
      <AnimatePresence mode="wait">
        <motion.img
          key={sliderContent[current].img}
          src={sliderContent[current].img}
          alt={`Slide ${current + 1}`}
          className="absolute top-0 left-0 w-full h-full object-cover"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 1 }}
        />
      </AnimatePresence>

      {/* Content Overlay */}
      <div className="absolute inset-0 bg-black/40 flex items-center justify-start px-10">
        <div className="max-w-2xl text-white space-y-4">
          {/* Static Heading */}
          <h1 className="text-4xl md:text-5xl font-bold">
            Welcome to Urban Elevate Architects
          </h1>
          <p className="text-lg md:text-xl font-light">
            Sri Lanka’s Premier Destination for Contemporary Architecture & Interior Artistry.
          </p>

          {/* Changing Slide Text */}
          <p className="text-2xl md:text-3xl font-semibold mt-6">
            {sliderContent[current].text}
          </p>

          {/* Buttons */}
          <div className="flex gap-4 mt-6">
            <button className="px-6 py-3 bg-white text-black rounded-lg font-medium hover:bg-gray-300 transition">
              Contact Us
            </button>
            <button className="px-6 py-3 bg-transparent border border-white text-white rounded-lg font-medium hover:bg-white hover:text-black transition">
              View Projects
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
