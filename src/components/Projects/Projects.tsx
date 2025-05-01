import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

type Project = {
  title: string;
  description: string;
  mainImg: string;
  gallery: string[];
};

const projects: Project[] = [
  {
    title: "Modern Villa",
    description:
      "A luxury villa designed with modern architecture and eco-friendly features.",
    mainImg: "https://via.placeholder.com/400x300?text=Modern+Villa",
    gallery: [
      "https://via.placeholder.com/600x400?text=Villa+1",
      "https://via.placeholder.com/600x400?text=Villa+2",
      "https://via.placeholder.com/600x400?text=Villa+3",
    ],
  },
  {
    title: "Corporate Office",
    description:
      "A sustainable office space focused on energy efficiency and open workspaces.",
    mainImg: "https://via.placeholder.com/400x300?text=Office",
    gallery: [
      "https://via.placeholder.com/600x400?text=Office+1",
      "https://via.placeholder.com/600x400?text=Office+2",
    ],
  },
  {
    title: "Landscape Park",
    description:
      "An open green park with natural walkways, lighting, and gathering spots.",
    mainImg: "https://via.placeholder.com/400x300?text=Park",
    gallery: [
      "https://via.placeholder.com/600x400?text=Park+1",
      "https://via.placeholder.com/600x400?text=Park+2",
    ],
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null); // ✅ set type here
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

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-2xl shadow-lg"
          >
            <img
              src={project.mainImg}
              alt={project.title}
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="text-white text-xl font-bold mb-3">
                {project.title}
              </h3>
              <button
                onClick={() => navigate("/project", { state: project })}
                className="bg-[#10B981] text-white px-4 py-2 rounded hover:bg-[#0e9e6e] transition"
              >
                View
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-8 overflow-y-auto">
          <div className="bg-white rounded-xl p-6 max-w-4xl w-full relative">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 text-gray-700 hover:text-red-500 text-xl font-bold"
            >
              ✕
            </button>
            <h2 className="text-2xl font-bold mb-2">{selectedProject.title}</h2>
            <p className="text-gray-700 mb-4">{selectedProject.description}</p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {selectedProject.gallery.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  alt={`Gallery ${i}`}
                  className="w-full h-60 object-cover rounded"
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
