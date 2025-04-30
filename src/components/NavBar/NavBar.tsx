import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "services", label: "Services" },
    { id: "projects", label: "Projects" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "shadow-md py-2" : "py-4"
      }`}
      style={{
        backgroundColor: "#1C1C1E",
        borderBottom: isScrolled ? "1px solid #2C2C2E" : "none",
      }}
    >
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <a
          href="#"
          className="font-bold transition-colors"
          style={{
            color: "#E5E5E5",
            fontFamily: "'Lilita One', sans-serif",
            fontSize: "30px",
          }}
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          Logo
        </a>

        <div className="flex items-center space-x-8">
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="transition-colors"
                style={{
                  color: "#E5E5E5",
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: "600",
                }}
                onMouseOver={(e) => (e.currentTarget.style.color = "#008080")}
                onMouseOut={(e) => (e.currentTarget.style.color = "#E5E5E5")}
              >
                {item.label}
              </button>
            ))}
          </div>

          <button
            ref={buttonRef}
            className="md:hidden p-2 rounded-lg transition-colors cursor-pointer"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            style={{
              backgroundColor: isMobileMenuOpen ? "#10B981" : "transparent",
            }}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="h-6 w-6 text-[#1C1C1E]" />
            ) : (
              <Menu className="h-6 w-6 text-[#E5E5E5]" />
            )}
          </button>
        </div>
      </div>

      <div
        ref={mobileMenuRef}
        className={`md:hidden absolute top-full left-0 w-full bg-[#1C1C1E] transition-all duration-300 ease-in-out ${
          isMobileMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-2 pointer-events-none"
        }`}
        style={{
          fontFamily: "Montserrat, sans-serif",
          fontWeight: "bold",
          borderTop: "1px solid #2C2C2E",
        }}
      >
        <div className="container mx-auto px-4 py-4 space-y-4">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="block w-full text-left px-4 py-2 rounded-lg transition-colors"
              style={{
                color: "#E5E5E5",
              }}
              onMouseOver={(e) => (e.currentTarget.style.color = "#008080")}
              onMouseOut={(e) => (e.currentTarget.style.color = "#E5E5E5")}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
