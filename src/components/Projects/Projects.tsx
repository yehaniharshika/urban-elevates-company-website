import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Projects/Projects.css";

// Image Imports
import HotelGrandiose from "../../assets/Hotel-Grandiose/4.jpg";
import HousePanadura from "../../assets/House-Panadura/3.jpg";
import VillaDesign from "../../assets/Villa-Design/2.jpg";
import PlazaDesign from "../../assets/Plaza-Design-Vavuniya/4.jpg";
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
import RestaurantInterior2 from "../../assets/Restaurant-Interior-Negambo/2.jpg";
import RestaurantInterior3 from "../../assets/Restaurant-Interior-Negambo/3.jpg";
import RestaurantInterior4 from "../../assets/Restaurant-Interior-Negambo/4.jpg";
import RestaurantInterior5 from "../../assets/Restaurant-Interior-Negambo/5.jpg";
import RestaurantInterior6 from "../../assets/Restaurant-Interior-Negambo/6.jpg";
import RestaurantInterior7 from "../../assets/Restaurant-Interior-Negambo/7.jpg";
import RestaurantInterior8 from "../../assets/Restaurant-Interior-Negambo/8.jpg";

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
      ModernHouse12
    ],
  },

  {
    title: "Modern Housing Project in Panadura",
    description:
      "A sustainable office space focused on energy efficiency and open workspaces.",
    mainImg: HousePanadura,
    gallery: [
      "https://via.placeholder.com/600x400?text=Office+1",
      "https://via.placeholder.com/600x400?text=Office+2",
    ],
  },
  {
    title: "Plaza Design(Residential Building Project) in Vavuniya",
    description:
      "An open green park with natural walkways, lighting, and gathering spots.",
    mainImg: PlazaDesign,
    gallery: [
      "https://via.placeholder.com/600x400?text=Park+1",
      "https://via.placeholder.com/600x400?text=Park+2",
    ],
  },
  {
    title: "Grandiose - Hotel Exterior Design",
    description:
      "An elegant and luxurious hotel designed with a blend of modern and classic styles.",
    mainImg: HotelGrandiose,
    gallery: [
      "https://via.placeholder.com/600x400?text=Hotel+1",
      "https://via.placeholder.com/600x400?text=Hotel+2",
      "https://via.placeholder.com/600x400?text=Hotel+3",
    ],
  },
  {
    title: "Villa Design",
    description:
      "A stunning villa design offering a comfortable and spacious living environment.",
    mainImg: VillaDesign,
    gallery: [
      "https://via.placeholder.com/600x400?text=VillaDesign+1",
      "https://via.placeholder.com/600x400?text=VillaDesign+2",
      "https://via.placeholder.com/600x400?text=VillaDesign+3",
    ],
  },
  {
    title: "Restaurant Interior Design in Negambo",
    description:
      "A modern and stylish restaurant interior with a cozy and welcoming ambiance.",
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
      "A contemporary house design that focuses on minimalism and functionality.",
    mainImg: HouseDesign,
    gallery: [
      "https://via.placeholder.com/600x400?text=House+Design+1",
      "https://via.placeholder.com/600x400?text=House+Design+2",
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
