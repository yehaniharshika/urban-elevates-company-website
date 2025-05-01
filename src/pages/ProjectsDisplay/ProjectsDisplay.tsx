import { useLocation, useNavigate } from "react-router-dom";


const ProjectsDisplay = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const project = location.state;

  if (!project) {
    return (
      <div className="text-center mt-20">
        <p>No project selected.</p>
        <button onClick={() => navigate("/")}>Go Back</button>
      </div>
    );
  }

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">{project.title}</h1>
      <p className="mb-6">{project.description}</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {project.gallery.map((img: string, index: number) => (
          <img
            key={index}
            src={img}
            alt={`Gallery ${index}`}
            className="w-full h-64 object-cover rounded"
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectsDisplay;
