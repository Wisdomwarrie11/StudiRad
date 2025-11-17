import "./whoStudiRad.css";

const targetAudience = [
  {
    key: "students",
    title: "Students",
    description:
      "Access structured radiography courses, image interpretation practice, and mentorship to build a solid career foundation.",
    image: "students.jpeg",
  },
  {
    key: "teachers",
    title: "Teachers",
    description:
      "Enhance your teaching with digital radiographs, case libraries, and interactive lessons tailored for radiography education.",
    image: "lecturer.jpg",
  },

  {
    key: "schools",
    title: "Institutes",
    description:
      "Integrate StudiRad into your curriculum to provide standardized radiography training, research support, and student engagement.",
    image: "institute1.jpeg",
  },
  {
    key: "professionals",
    title: "Professionals",
    description:
      "Stay updated with the latest techniques, collaborate with peers worldwide, and earn certifications that advance your career.",
    image: "nurse.jpeg",
  },
];

export default function WhoStudiRad() {
  return (
    <section  className="who-section container py-5">
      <div className="text-center mb-5">
        <h2 style={{color: "white"}} className="fw-bold">Who StudiRad Is Meant For</h2>
        <p style={{color: "white"}} className="text-muted">
          A platform designed to connect learners, educators, and professionals across radiography.
        </p>
      </div>

      <div className="row g-4">
        {targetAudience.map((audience) => (
          <div key={audience.key} className="col-12 col-sm-6 col-md-4 col-lg-3">
            <div className="who-card text-center p-4 h-100">
              <div className="who-img mb-3">
                <img
                  src={audience.image}
                  alt={audience.title}
                  className="img-fluid"
                />
              </div>
              <h5 className="fw-bold">{audience.title}</h5>
              <p className="small">{audience.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
