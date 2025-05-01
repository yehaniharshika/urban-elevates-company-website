import { useLocation } from "react-router-dom";

// Define the type for the project
type Project = {
  title: string;
  description: string;
  mainImg: string;
  gallery: string[];
};

const ProjectDisplay = () => {
  // Use the useLocation hook to get the project from the state
  const location = useLocation();

  // Get the project from the location state and type it correctly
  const project = location.state as Project | undefined;

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div
      className="py-16 px-4 md:px-12 lg:px-20 text-black"
      style={{ marginTop: "80px" }}
    >
      <div className="text-center mb-12 px-4">
        <h1
          className="text-3xl md:text-5xl font-bold mb-4 text-[#1C1C1C]"
          style={{ fontFamily: "Winky Rough, sans-serif" }}
        >
          {project.title}
        </h1>
        <p className="text-base md:text-lg max-w-2xl mx-auto text-gray-600" style={{maxWidth:"70%",fontFamily: "Montserrat, sans-serif",fontWeight:550}}>
          {project.description}
        </p>
      </div>

      {/* Gallery Section */}
      <div className="px-4">
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto"
          style={{ maxWidth: "80%" }}
        >
          {project.gallery.map((img, index) => (
            <div key={index} className="rounded-lg shadow-lg overflow-hidden">
              <img
                src={img}
                alt={`Gallery ${index + 1}`}
                className="w-full h-64 object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectDisplay;
