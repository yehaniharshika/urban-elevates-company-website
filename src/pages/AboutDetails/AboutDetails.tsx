import logo from "../../assets/outerBoarderLogo.png";

const AboutDetails = () => {
  return (
    <div style={{ marginTop: "80px" }}>
      <div className="bg-white text-black px-6 md:px-20 py-16 space-y-10 max-w-[90%] mx-auto">
        <img
          src={logo}
          alt="Urban Elevate Logo"
          className="h-60 w-auto object-contain mx-auto"
        />
        <h1
          className="text-4xl md:text-5xl font-bold text-center text-[#1C1C1C] mb-10"
          style={{ fontFamily: "Winky Rough, sans-serif" }}
        >
          " Turning Blueprints into Masterpieces
        </h1>
        <p
          className="text-lg leading-relaxed"
          style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 550 }}
        >
          At Urban Elevates Architects, we’re more than just architectural
          consultants — we are visionaries who shape your dreams into reality,
          specializing in contemporary architecture and interior design, we
          tailor each project to reflect the unique character, lifestyle, and
          aspirations of our clients, whether it's a home, office, or commercial
          space, we believe your space should be a bold statement of who you
          are.
        </p>

        {/* part 01 */}
        <div className="flex flex-col lg:flex-row items-center gap-10 mt-30">
          <div className="lg:w-1/2">
            <h2
              className="text-2xl font-semibold mb-3"
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontWeight: "bold",
              }}
            >
              Our Mission
            </h2>
            <p
              className="text-lg leading-relaxed"
              style={{ fontFamily: "Montserrat, sans-serif", fontWeight: 550 }}
            >
              To become a leading architectural and interior design consultancy,
              delivering a seamless, hassle-free experience to our clients —
              from concept to completion.
            </p>
            <br />
            <div>
              <h2
                className="text-2xl font-semibold mb-3"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: "bold",
                }}
              >
                Who We Are
              </h2>
              <p
                className="text-lg leading-relaxed"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: 550,
                }}
              >
                We are a team of young, passionate, and forward-thinking design
                professionals committed to creating cutting-edge, practical, and
                inspiring spaces for living, working, and leisure, at Urban
                Elevates Architects, our clients sit at the heart of everything
                we do, from our very first sketch to the final finish, we aim to
                fuse creativity with functionality — resulting in spaces that
                are not only modern but deeply personal.
              </p>
            </div>
          </div>

          <div className="lg:w-1/2 w-full">
            <video
              controls
              className="w-full rounded-xl shadow-md"
              poster="/thumbnail.jpg"
            >
              <source src="/your-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        {/* part 02 */}
        <div className="flex flex-col lg:flex-row items-center gap-10 mt-30">
          <div className="lg:w-1/2 w-full">
            <video
              controls
              className="w-full rounded-xl shadow-md"
              poster="/thumbnail.jpg"
            >
              <source src="/your-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          <div className="lg:w-1/2 w-full">
            <div>
              <h2
                className="text-2xl font-semibold mb-3"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: "bold",
                }}
              >
                What We Do
              </h2>
              <p
                className="text-lg leading-relaxed"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: 550,
                }}
              >
                Led by a Professional Architect with over 3 years of industry
                experience, our dynamic team brings together expertise in
                multiple design and construction disciplines, we offer a
                comprehensive suite of architectural and design solutions,
                including:
              </p>
              <ul
                className="list-disc list-inside mt-3 space-y-1 text-lg"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: 550,
                }}
              >
                <li>Council Drawings & Approvals</li>
                <li>Structural Drawings</li>
                <li>MEP (Mechanical, Electrical & Plumbing) Drawings</li>
                <li>Interior Design & 3D Visualization</li>
                <li>Renovation & Refurbishment Solutions</li>
                <li>Construction & Project Execution</li>
              </ul>
              <p
                className="text-lg mt-3"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: 550,
                }}
              >
                From blueprint to build, we are with you every step of the way.
              </p>
            </div>
            <br />
            <div>
              <h2
                className="text-2xl font-semibold mb-3"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: "bold",
                }}
              >
                Why Choose Us?
              </h2>
              <p
                className="text-lg leading-relaxed"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: 550,
                }}
              >
                We don’t just design buildings — we create meaningful
                environments that elevate lifestyles and inspire productivity,
                each project we undertake is a collaboration where your
                preferences, personality, and ambitions shape the outcome,
                whether it’s the natural light that dances across your living
                room or the layout of your office that fosters creativity, we
                ensure every element serves a purpose and speaks your vision.
              </p>
            </div>
          </div>
        </div>

        {/* part 03 */}
        <div className="flex flex-col lg:flex-row items-center gap-10 mt-30">
          <div className="lg:w-1/2 w-full">
            <div>
              <h2
                className="text-2xl font-semibold mb-3"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: "bold",
                }}
              >
                Our Focus
              </h2>
              <p
                className="text-lg leading-relaxed"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: 550,
                }}
              >
                Originality is the core of our design philosophy, every client
                is different — and so is every design, over the years, we’ve
                worked with a diverse range of clients, but our commitment to
                delivering distinctive, modern, and purposeful designs has never
                wavered, our versatile design team ensures that every project is
                a fresh take on contemporary architecture.
              </p>
            </div>
            <br />
            <div>
              <h2
                className="text-2xl font-semibold mb-3"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: "bold",
                }}
              >
                Our Reach
              </h2>
              <p
                className="text-lg leading-relaxed"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: 550,
                }}
              >
                While based in Colombo, our architectural footprint spans across
                Horana, Kandana, Ragama, Negambo, Kandy, Polonnaruwa, Vavuniya
                and beyond, no matter where your project is located, we’re ready
                to bring our expertise and creative energy to you.
              </p>
            </div>
            <br />
            <div>
              <h2
                className="text-2xl font-semibold mb-3"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: "bold",
                }}
              >
                Our People
              </h2>
              <p
                className="text-lg leading-relaxed"
                style={{
                  fontFamily: "Montserrat, sans-serif",
                  fontWeight: 550,
                }}
              >
                Our greatest strength is our people, at Urban Elevates
                Architects, we cultivate a culture of respect, collaboration,
                and excellence, our design team consistently goes the extra mile
                — whether it's accommodating urgent timelines, tackling complex
                requirements, or working within tight budgets — always with
                dedication and creativity at the forefront.
              </p>
            </div>
          </div>

          <div className="lg:w-1/2 w-full">
            <video
              controls
              className="w-full rounded-xl shadow-md"
              poster="/thumbnail.jpg"
            >
              <source src="/your-video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutDetails;
