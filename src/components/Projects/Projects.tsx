import { useNavigate } from "react-router-dom";
import "../Projects/Projects.css";

// Image Imports
import HotelGrandiose from "../../assets/Hotel-Grandiose/4.jpg";
import HotelGrandiose2 from "../../assets/Hotel-Grandiose/1.jpg";
import HotelGrandiose3 from "../../assets/Hotel-Grandiose/2.jpg";
import HotelGrandiose4 from "../../assets/Hotel-Grandiose/3.jpg";
import HotelGrandiose5 from "../../assets/Hotel-Grandiose/5.jpg";
import HotelGrandiose6 from "../../assets/Hotel-Grandiose/6.jpg";
import HotelGrandiose7 from "../../assets/Hotel-Grandiose/7.jpg";

import HousePanadura from "../../assets/House-Panadura/3.jpg";
import HousePanadura2 from "../../assets/House-Panadura/1.jpg";
import HousePanadura3 from "../../assets/House-Panadura/2.jpg";
import HousePanadura4 from "../../assets/House-Panadura/4.jpg";
import HousePanadura5 from "../../assets/House-Panadura/5.jpg";

import VillaDesign from "../../assets/Villa-Design/2.jpg";
import VillaDesign2 from "../../assets/Villa-Design/1.jpg";
import VillaDesign3 from "../../assets/Villa-Design/3.jpg";
import VillaDesign4 from "../../assets/Villa-Design/4.jpg";

import PlazaDesign from "../../assets/Plaza-Design-Vavuniya/4.jpg";
import PlazaDesign2 from "../../assets/Plaza-Design-Vavuniya/1.jpg";
import PlazaDesign3 from "../../assets/Plaza-Design-Vavuniya/2.jpg";
import PlazaDesign4 from "../../assets/Plaza-Design-Vavuniya/3.jpg";
import PlazaDesign5 from "../../assets/Plaza-Design-Vavuniya/5.jpg";
import PlazaDesign6 from "../../assets/Plaza-Design-Vavuniya/6.jpg";
import PlazaDesign7 from "../../assets/Plaza-Design-Vavuniya/7.jpg";
import PlazaDesign8 from "../../assets/Plaza-Design-Vavuniya/8.jpg";
import PlazaDesign9 from "../../assets/Plaza-Design-Vavuniya/9.jpg";
import PlazaDesign10 from "../../assets/Plaza-Design-Vavuniya/10.jpg";

import RestaurantInteriorProject from "../../assets/Restaurant-Interior-Negambo/1.jpg";

import ModernHouse from "../../assets/Modern-House/1.jpg";
import ModernHouse2 from "../../assets/Modern-House/2.jpg";
import ModernHouse3 from "../../assets/Modern-House/3.jpg";
import ModernHouse4 from "../../assets/Modern-House/4.jpg";
import ModernHouse5 from "../../assets/Modern-House/5.jpg";
import ModernHouse6 from "../../assets/Modern-House/6.jpg";
import ModernHouse7 from "../../assets/Modern-House/7.jpg";
import ModernHouse8 from "../../assets/Modern-House/8.jpg";
import ModernHouse9 from "../../assets/Modern-House/9.jpg";
import ModernHouse10 from "../../assets/Modern-House/10.jpg";
import ModernHouse11 from "../../assets/Modern-House/11.jpg";
import ModernHouse12 from "../../assets/Modern-House/12.jpg";

import HouseDesign from "../../assets/House-Design/1.jpg";
import HouseDesign2 from "../../assets/House-Design/2.jpg";
import HouseDesign8 from "../../assets/House-Design/8.jpg";
import HouseDesign9 from "../../assets/House-Design/9.jpg";
import HouseDesign10 from "../../assets/House-Design/10.jpg";
import HouseDesign11 from "../../assets/House-Design/11.jpg";
import HouseDesign12 from "../../assets/House-Design/12.jpg";
import HouseDesign13 from "../../assets/House-Design/13.jpg";
import HouseDesign14 from "../../assets/House-Design/14.jpg";
import HouseDesign15 from "../../assets/House-Design/15.jpg";
import HouseDesign16 from "../../assets/House-Design/16.jpg";
import HouseDesign17 from "../../assets/House-Design/17.jpg";
import HouseDesign18 from "../../assets/House-Design/18.jpg";
import HouseDesign19 from "../../assets/House-Design/19.jpg";
import HouseDesign20 from "../../assets/House-Design/20.jpg";

import RestaurantInterior2 from "../../assets/Restaurant-Interior-Negambo/2.jpg";
import RestaurantInterior3 from "../../assets/Restaurant-Interior-Negambo/3.jpg";
import RestaurantInterior4 from "../../assets/Restaurant-Interior-Negambo/4.jpg";
import RestaurantInterior5 from "../../assets/Restaurant-Interior-Negambo/5.jpg";
import RestaurantInterior6 from "../../assets/Restaurant-Interior-Negambo/6.jpg";
import RestaurantInterior7 from "../../assets/Restaurant-Interior-Negambo/7.jpg";
import RestaurantInterior8 from "../../assets/Restaurant-Interior-Negambo/8.jpg";
import { LucideHotel } from "lucide-react";

type Project = {
  title: string;
  description: string;
  mainImg: string;
  gallery: string[];
};

const projects: Project[] = [
  {
    title: "Housing Project in Horana",
    description:
      "An exquisite fusion of modern aesthetics and seamless natural integration, this residence embodies elegance, sophistication, and sustainability. Designed with a minimalist approach, it strikes a perfect balance between contemporary architecture and lush greenery.\n\n" +
      "The home's exterior features clean lines, neutral tones, and tasteful wooden accents. Large, wooden-framed windows amplify natural warmth and allow the structure to breathe, while cascading greenery from the upper terrace softens the architectural edges and blends the home into its natural surroundings.\n\n" +
      "Expansive glass windows flood the interiors with natural light, creating a bright and inviting atmosphere. The open-plan interior design extends organically to a serene balcony and a landscaped garden, offering ideal spaces for relaxation, entertainment, and peaceful living.\n\n" +
      "Crafted with eco-conscious principles, this home is both energy-efficient and future-forward. Every detail reflects our commitment to creating spaces that are not only visually stunning but also practical and sustainable for modern lifestyles.\n\n" +
      "Whether intended for residential or commercial use, this housing project in Horana showcases architectural innovation at its finest.",

    mainImg: ModernHouse,
    gallery: [
      ModernHouse,
      ModernHouse2,
      ModernHouse3,
      ModernHouse4,
      ModernHouse5,
      ModernHouse6,
      ModernHouse7,
      ModernHouse8,
      ModernHouse9,
      ModernHouse10,
      ModernHouse11,
      ModernHouse12,
    ],
  },

  {
    title: "Modern Housing Project in Panadura",
    description:
      "This project, designed for our client Mr. Charith Chaminda, presents a harmonious composition of modern architecture and natural elements. Featuring a minimalist facade that incorporates textured stone, exposed brickwork, and cascading greenery, the design creates a serene and visually striking presence.\n\n" +
      "The space is thoughtfully crafted to serve both residential and commercial purposes, offering flexible functionality within a cohesive aesthetic. With sustainability at its core, the project integrates energy-efficient solutions and eco-conscious materials, aligning with our commitment to environmentally responsible design.\n\n" +
      "It exemplifies the balance between beauty and practicality, offering a tranquil yet sophisticated environment ideal for both living and business use.",

    mainImg: HousePanadura,
    gallery: [
      HousePanadura,
      HousePanadura2,
      HousePanadura3,
      HousePanadura4,
      HousePanadura5,
    ],
  },
  {
    title: "Plaza Design(Commercial Building Project) in Vavuniya",
    description:
      "Royalton Square is a neoclassical-style mixed-use development that embodies timeless elegance and architectural grandeur. The design features a symmetrical façade with refined stone-textured finishes, classical columns, and ornate detailing inspired by historic European architecture.\n\n" +
      "A central domed pavilion anchors the structure, accompanied by arched windows, intricate wrought iron balconies, and a prominent portico entrance—creating a striking and formal visual impression. Each element has been thoughtfully integrated to reflect both tradition and sophistication.\n\n" +
      "Designed to serve both commercial and residential purposes, Royalton Square blends classical beauty with functional versatility, offering a distinguished and enduring architectural presence.",

    mainImg: PlazaDesign,
    gallery: [
      PlazaDesign,
      PlazaDesign2,
      PlazaDesign3,
      PlazaDesign4,
      PlazaDesign5,
      PlazaDesign6,
      PlazaDesign7,
      PlazaDesign8,
      PlazaDesign9,
      PlazaDesign10,
    ],
  },
  {
    title: "Grandiose - Hotel Exterior Design",
    description:
      "The Grandiose is a luxurious neoclassical architectural development designed to embody elegance, symmetry, and grandeur. Its stately façade features grand arched windows, classical columns, and a central portico entrance that creates a dramatic visual statement.\n\n" +
      "At the heart of the entryway, a cascading chandelier and sculpted fountain enhance the welcoming experience, establishing a sense of prestige and sophistication. The design is enriched with lush landscaping and gracefully lined palm trees, while a red-tiled hipped roof introduces a Mediterranean flair.\n\n" +
      "Balancing classical grandeur with modern refinement, The Grandiose has been thoughtfully envisioned for prestigious hospitality or institutional purposes, offering both visual impact and functional excellence.",

    mainImg: HotelGrandiose,
    gallery: [
      HotelGrandiose,
      HotelGrandiose2,
      HotelGrandiose3,
      HotelGrandiose4,
      HotelGrandiose5,
      HotelGrandiose6,
      HotelGrandiose7,
    ],
  },
  {
    title: "Villa Design",
    description:
      "A modern villa design blending natural textures with contemporary architecture. Featuring a mix of wood, brick, and glass elements, this villa emphasizes openness and harmony with nature. Large glass panels invite sunlight into cozy interior spaces, while the surrounding landscaped garden and stone pathway enhance the serene outdoor atmosphere.",
    mainImg: VillaDesign,
    gallery: [VillaDesign2, VillaDesign, VillaDesign3, VillaDesign4],
  },

  {
    title: "Restaurant Interior Design in Negambo",
    description:
      "This interior design project transforms a restaurant in central Negombo for Mr. Ranaweera, blending natural aesthetics with modern functionality to create a refined and welcoming dining space.\n\n" +
      "The interior showcases a warm wooden palette, woven pendant lighting, earthy textures, and lush greenery. Thoughtfully selected furniture and decor foster a relaxed, nature-connected atmosphere.\n\n" +
      "Eco-friendly materials, natural lighting, and biophilic elements enhance sustainability and promote well-being, while maintaining a clean, modern look.\n\n" +
      "The spacious layout supports smooth movement and comfortable seating, with natural tones and textured finishes adding depth and visual interest.\n\n" +
      "This project offers a complete, stylish, and efficient interior solution—ideal for contemporary hospitality environments.",

    mainImg: RestaurantInteriorProject,
    gallery: [
      RestaurantInteriorProject,
      RestaurantInterior2,
      RestaurantInterior3,
      RestaurantInterior4,
      RestaurantInterior5,
      RestaurantInterior6,
      RestaurantInterior7,
      RestaurantInterior8,
    ],
  },
  {
    title: "Modern House Exterior Design ",
    description:
      "This modern tropical house exudes elegance with its natural finishes and open layout. Designed for serene suburban living, the home features a mix of soft-toned stone, exposed brickwork, and warm wood-framed glass doors. The lush rooftop garden, cascading greenery from the balconies, and surrounding palm trees enhance its organic connection to nature. A stylish green gate with geometric metal accents provides both security and visual charm, while the paved driveway welcomes residents into a tranquil and sophisticated living environment",
    mainImg: HouseDesign,
    gallery: [
      HouseDesign,
      HouseDesign2,
      HouseDesign8,
      HouseDesign9,
      HouseDesign10,
      HouseDesign11,
      HouseDesign12,
      HouseDesign13,
      HouseDesign14,
      HouseDesign15,
      HouseDesign16,
      HouseDesign17,
      HouseDesign18,
      HouseDesign19,
      HouseDesign20,
    ],
  },
];

const Projects = () => {
  const navigate = useNavigate();

  return (
    <div className="py-16 px-4 md:px-12 lg:px-20 text-black">
      <div className="text-center mb-12 px-4">
        <h1
          className="text-3xl md:text-5xl font-bold mb-4 text-[#1C1C1C]"
          style={{ fontFamily: "Winky Rough, sans-serif" }}
        >
          Our Projects
        </h1>
      </div>

      <div className="my-project-container">
        {projects.map((project, index) => (
          <div key={index} className="project-card group">
            <div className="project-image-wrapper">
              <img
                src={project.mainImg}
                alt={project.title}
                className="project-image"
              />
              <div className="project-overlay">
                <h3
                  className="text-white text-sm mb-4 px-2 text-center"
                  style={{
                    fontSize: "20px",
                    fontFamily: "Montserrat, sans-serif",
                    fontWeight: 550,
                  }}
                >
                  {project.title}
                </h3>
                <button
                  className="bg-[#10B981] text-white px-4 py-2 rounded hover:bg-[#0e9e6e] transition"
                  style={{
                    fontFamily: "Montserrat, sans-serif",
                    cursor: "pointer",
                  }}
                  onClick={() => navigate("/project", { state: project })}
                >
                  View Project
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
