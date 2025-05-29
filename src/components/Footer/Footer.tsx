import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaYoutube,
  FaLinkedinIn,
  FaWhatsapp,
} from "react-icons/fa";
import { Mail, Phone, MapPin } from "lucide-react";

// Type definitions for better code quality
interface SocialIconProps {
  icon: React.ReactNode;
  href: string;
}

interface FooterLinkProps {
  children: React.ReactNode;
  href?: string;
}

// Constants for better maintainability
const SOCIAL_LINKS = [
  {
    icon: <FaFacebookF size={20} />,
    href: "https://www.facebook.com/profile.php?id=61560317194140",
  },
  {
    icon: <FaInstagram size={20} />,
    href: "https://www.instagram.com/urbanelevates?igsh=YzljYTk1ODg3Zg==",
  },
  {
    icon: <FaTiktok size={20} />,
    href: "https://www.tiktok.com/@urban.elevates.ar?_t=ZS-8wkeXGqKpUb&_r=1",
  },
  {
    icon: <FaYoutube size={20} />,
    href: "https://youtube.com/@urbanelevatesarchitects?si=2d5lDwWu59UyLCZI",
  },
  {
    icon: <FaLinkedinIn size={20} />,
    href: "https://www.linkedin.com/in/urbanelevates-architects-6b847b367/",
  },
];

const QUICK_LINKS = [
  { label: "Home", id: "#home" },
  { label: "About Us", id: "#about" },
  { label: "Services", id: "#services" },
  { label: "Projects", id: "#projects" },
  { label: "Contact", id: "#contact" },
];

const SERVICES = [
  { label: "Architectural Design" },
  { label: "Interior Design" },
  { label: "3D Visualizations" },
  { label: "MEP Drawings" },
  { label: "Construction Management" },
];

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const handleEmailClick = (email: string) => {
    window.location.href = `mailto:${email}`;
  };

  const handlePhoneClick = (phone: string) => {
    window.location.href = `tel:${phone}`;
  };

  return (
    <>
      <footer
        className="bg-[#323232] text-white font-['Montserrat']"
        role="contentinfo"
      >
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Company Info Section */}
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-white">
                  Urban Elevates Architects
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  Visionaries shaping the future of urban spaces with style,
                  precision, and innovation.
                </p>
              </div>

              {/* Social Media Links */}
              <div>
                <h4 className="sr-only">Follow us on social media</h4>
                <div className="flex space-x-3">
                  {SOCIAL_LINKS.map((social, index) => (
                    <SocialIcon
                      key={index}
                      icon={social.icon}
                      href={social.href}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Links Section */}
            <div>
              <h4 className="text-lg font-medium mb-6 text-white">
                Quick Links
              </h4>
              <nav aria-label="Quick navigation">
                <ul className="space-y-3">
                  {QUICK_LINKS.map((link, index) => (
                    <FooterLink key={index} href={link.id}>
                      {link.label}
                    </FooterLink>
                  ))}
                </ul>
              </nav>
            </div>

            {/* Services Section */}
            <div>
              <h4 className="text-lg font-medium mb-6 text-white">
                Our Services
              </h4>
              <nav aria-label="Services navigation">
                <ul className="space-y-3">
                  {SERVICES.map((service, index) => (
                    <FooterLink key={index}>{service.label}</FooterLink>
                  ))}
                </ul>
              </nav>
            </div>

            {/* Contact Section */}
            <div>
              <h4 className="text-lg font-medium mb-6 text-white">
                Get In Touch
              </h4>
              <address className="not-italic">
                <ul className="space-y-4">
                  <li className="flex items-start group">
                    <MapPin
                      size={18}
                      className="mr-3 mt-1 flex-shrink-0 text-gray-400 group-hover:text-white transition-colors duration-200"
                      aria-hidden="true"
                    />
                    <span className="text-gray-300 group-hover:text-white transition-colors duration-200">
                      Panadura, Sri Lanka
                    </span>
                  </li>

                  <li className="flex items-center group">
                    <Phone
                      size={18}
                      className="mr-3 flex-shrink-0 text-gray-400 group-hover:text-white transition-colors duration-200"
                      aria-hidden="true"
                    />
                    <button
                      onClick={() => handlePhoneClick("+94778340663")}
                      className="text-gray-300 hover:text-white transition-colors duration-200 text-left"
                      aria-label="Call us at +94 77 834 0663"
                    >
                      +94 77 834 0663
                    </button>
                  </li>

                  <li className="flex items-center group">
                    <Mail
                      size={18}
                      className="mr-3 flex-shrink-0 text-gray-400 group-hover:text-white transition-colors duration-200"
                      aria-hidden="true"
                    />
                    <button
                      onClick={() => handleEmailClick("info@urbanelevates.com")}
                      className="text-gray-300 hover:text-white transition-colors duration-200 text-left break-all"
                      aria-label="Send email to info@urbanelevates.com"
                    >
                      urbanelevatesarchitects@gmail.com
                    </button>
                  </li>
                </ul>
              </address>
            </div>
          </div>

          <div className="border-t border-gray-600 mt-12 pt-8">
            <div className="text-center">
              <p className="text-gray-300 text-sm">
                &copy; {currentYear} Urban Elevates Architects. All rights
                reserved.
              </p>
              <p className="text-gray-400 text-xs mt-2">
                Designed with passion for architectural excellence.
              </p>
            </div>
          </div>
        </div>
      </footer>

      <a
        href="https://wa.me/94778340663"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white 
             rounded-full p-4 shadow-lg transition-all transform hover:scale-110
             border-4 border-white animate-bounce hover:animate-none bo"
      >
        <FaWhatsapp size={26} className="drop-shadow-md" />
      </a>
    </>
  );
};

// FooterLink Component
const FooterLink: React.FC<FooterLinkProps> = ({ children, href = "#" }) => (
  <li>
    <a
      href={href}
      className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-200 inline-block"
      {...(href.startsWith("http") && {
        target: "_blank",
        rel: "noopener noreferrer",
      })}
    >
      {children}
    </a>
  </li>
);

// SocialIcon Component
const SocialIcon: React.FC<SocialIconProps> = ({ icon, href }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="group relative h-10 w-10 flex items-center justify-center rounded-full 
               bg-transparent border border-gray-600 text-gray-300
               hover:border-white hover:text-white hover:bg-transparent hover:bg-opacity-10 
               hover:scale-110 transition-all duration-300 ease-in-out
               focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
  >
    <span className="transition-transform duration-300 group-hover:scale-110">
      {icon}
    </span>
  </a>
);

export default Footer;
