import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import aboutImage from "../../assets/House-Design/10.jpg"; // Make sure this path is correct

const AboutUs = () => {
  const navigate = useNavigate();

  const handleReadMore = (): void => {
    navigate("/aboutDetails");
  };

  return (
    <div className="py-16 px-4 md:px-12 lg:px-20 text-black bg-white" id="about">
      {/* Heading */}
      <h1
        className="text-3xl md:text-5xl font-bold mb-12 text-center text-[#1C1C1C]"
        style={{ fontFamily: "Winky Rough, sans-serif" }}
      >
        About Us
      </h1>

      {/* Image and Text */}
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Side - Image */}
        <div className="px-4">
          <img
            src={aboutImage}
            alt="Urban Design"
            className="rounded-2xl shadow-xl w-full object-cover max-h-[500px]"
          />
        </div>

        {/* Right Side - Text */}
        <div className="px-4">
          <p className="text-lg md:text-lg text-gray-700 mb-8 leading-relaxed" style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 550 }}>
            At Urban Elevates Architects, we are more than just architects — we
            are visionaries shaping the future of urban spaces. Our expertise
            lies in designing and delivering functional, modern, and inspiring
            environments tailored to your unique preferences and purpose. We
            believe every space has the potential to reflect your identity, and
            our mission is to bring that vision to life with style, precision,
            and innovation.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleReadMore}
            className="bg-black text-white px-6 py-3 shadow-lg border-2 border-transparent hover:border-black hover:bg-[#10B981] transition duration-300"
            style={{borderRadius:"18px",fontFamily: "Montserrat, sans-serif", fontWeight: 750,fontSize:"15px"}}
          >
            READ MORE
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
