const services = [
  {
    title: "Architectural Design",
    description:
      "We offer innovative, functional, and sustainable architectural solutions tailored to meet the unique needs of our clients, ensuring every structure tells a story.",
    img: "https://img.icons8.com/ios-filled/100/10B981/city-buildings.png", // Use your `architecturalDesignImg` or fallback
  },
  {
    title: "Interior Design",
    description:
      "Transform your spaces with a perfect blend of aesthetics and functionality. Our interior designs reflect your personality while maximizing comfort.",
    img: "https://img.icons8.com/ios-filled/100/10B981/interior.png",
  },
  {
    title: "Structural Design",
    description:
      "Our expert engineers ensure your building stands strong with optimized structural systems that comply with safety standards and cost efficiency.",
    img: "https://img.icons8.com/ios-filled/100/10B981/blueprint.png",
  },
  {
    title: "Quantity Surveying",
    description:
      "We provide accurate cost estimation, budgeting, and financial planning for your projects, ensuring transparency and cost-effectiveness from start to finish.",
    img: "https://img.icons8.com/ios-filled/100/10B981/cost.png",
  },
  {
    title: "MEP Design",
    description:
      "Integrated Mechanical, Electrical, and Plumbing (MEP) solutions that enhance the performance and sustainability of your buildings.",
    img: "https://img.icons8.com/ios-filled/100/10B981/electrical.png",
  },
  {
    title: "Construction",
    description:
      "From planning to project delivery, our construction services focus on quality, timeliness, and meeting your unique project requirements with precision.",
    img: "https://img.icons8.com/ios-filled/100/10B981/crane.png", // Replace with your `constructionImg` if needed
  },
  {
    title: "Landscape Design",
    description:
      "We bring outdoor spaces to life by combining natural beauty with functional design. From gardens to public spaces, our sustainable landscapes enhance well-being and add value to your property",
    img: "https://img.icons8.com/ios-filled/100/10B981/garden.png",
  },
];

const Services = () => {
  return (
    <div className="py-16 px-4 md:px-12 lg:px-20 text-black" id="services">
      {/* Heading */}
      <div className="text-center mb-12 px-4">
        <h1
          className="text-3xl md:text-5xl font-bold mb-4 text-[#1C1C1C]"
          style={{ fontFamily: "Winky Rough, sans-serif" }}
        >
          Our Services
        </h1>

        <p
          className="text-base md:text-lg max-w-2xl mx-auto text-gray-600"
          style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 550 }}
        >
          Discover a full suite of professional services designed to shape,
          manage, and bring your dream projects to life.
        </p>
      </div>

      {/* Centered Grid */}
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#e7f8f2] rounded-2xl shadow-md hover:shadow-xl border transition-all duration-300 ease-in-out p-6 flex flex-col items-center text-center"
              style={{
                borderWidth: "2px",
                borderColor: "#10B981",
                transition: "all 0.3s ease-in-out",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderWidth = "4px";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderWidth = "2px";
              }}
            >
              <img
                src={service.img}
                alt={service.title}
                className="w-20 h-20 mb-4"
              />
              <h3 className="text-xl font-semibold mb-2" style={{ fontFamily: "Montserrat, sans-serif"}}>{service.title}</h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
