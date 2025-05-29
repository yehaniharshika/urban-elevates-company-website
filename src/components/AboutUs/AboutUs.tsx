import { motion } from "framer-motion";

const AboutUs = () => {
  return (
    <div className="py-16 px-4 md:px-12 lg:px-20 text-black">
      <div className="text-center mb-12 px-4">
        <h1
          className="text-3xl md:text-5xl font-bold mb-4 text-[#1C1C1C]"
          style={{ fontFamily: "Winky Rough, sans-serif" }}
        >
          About Us
        </h1>

        <div className="container mx-auto px-4 md:px-6 relative z-10">
          
            
            <p className="text-xl text-black-200 mb-8">
              At Urban Elevates Architects, we are more than just architects — we are visionaries shaping 
              the future of urban spaces. Our expertise lies in designing and delivering functional, modern, 
              and inspiring environments tailored to your unique preferences and purpose. We believe every 
              space has the potential to reflect your identity, and our mission is to bring that vision to 
              life with style, precision, and innovation.
            </p>
            <button>READ MORE</button>
            
         
        </div>
      </div>
    </div>
   
  );
}

export default AboutUs;