import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import design1 from "../../assets/JVJG_11 - Photo (2).jpg";
import design2 from "../../assets/4.jpg";
import design3 from "../../assets/5.jpg";
import design4 from "../../assets/vgr_7 - Photo (4).jpg";

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
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <AnimatePresence mode="wait">
        <motion.img
          key={sliderContent[current].img}
          src={sliderContent[current].img}
          alt={`Slide ${current + 1}`}
          className="absolute inset-0 w-full h-full object-cover"
          transition={{ duration: 1 }}
        />
      </AnimatePresence>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 flex items-center justify-center px-6 text-center">
        <div className="max-w-7xl text-white space-y-4">
          <h1
            className="text-4xl md:text-6xl"
            style={{
              fontFamily: "Archivo Black, sans-serif",
              fontWeight: "bold",
              textShadow: "2px 2px 3px rgb(0, 6, 4)",
            }}
          >
            WELCOME TO URBAN ELEVATES ARCHITECTS
          </h1>

          <p
            className="text-lg md:text-xl font-light"
            style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 550 }}
          >
            Sri Lanka’s Premier Destination for Contemporary Architecture &
            Interior Artistry.
          </p>
          <p
            className="text-2xl md:text-3xl font-semibold mt-6"
            style={{ fontFamily: "Montserrat, sans-serif" }}
          >
            {sliderContent[current].text}
          </p>
          <div className="flex gap-4 mt-6 justify-center flex-wrap">
            <button
              className="px-6 py-3 bg-white text-black rounded-lg font-medium hover:bg-gray-300 transition"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              Contact Us
            </button>
            <button
              className="px-6 py-3 bg-transparent border border-white text-white rounded-lg font-medium hover:bg-white hover:text-black transition"
              style={{ fontFamily: "Montserrat, sans-serif" }}
            >
              View Projects
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
