import React from "react";

const activities = [
  {
    id: 1,
    title: "From Induction to Impact: Navigating the Radiographer’s Journey",
    date: "September 11, 2025, 8:00 PM (WAT)",
    description: "Join four keynote speakers as they share insights on making the best use of your induction period and navigating your career path as a radiographer.",
    image: "Radstudents.jpg",
    link: "/webinarRegistration"
  },
//   {
//     id: 2,
//     title: "Bootcamp: Basics of Radiographic Imaging",
//     date: "October 2025",
//     description: "An intensive bootcamp designed to simplify radiographic imaging concepts with hands-on demonstrations.",
//     image: "bootcamp.jpg",
//     link: "#"
//   },
//   {
//     id: 3,
//     title: "Seminar: Innovations in Medical Imaging",
//     date: "November 2025",
//     description: "Explore the latest advancements in medical imaging technology and their implications for clinical practice.",
//     image: "seminar.jpg",
//     link: "#"
//   },
//   {
//     id: 4,
//     title: "Upcoming Event: Annual Radiography Conference",
//     date: "December 2025",
//     description: "Connect with professionals, students, and industry leaders in an event dedicated to shaping the future of radiography.",
//     image: "conference.jpg",
//     link: "#"
//   }
];

const Activities = () => {
  return (
    <section 
      style={{ 
        background: "linear-gradient(135deg, rgb(24, 59, 78) 40%, rgb(221, 168, 83) 100%)",
        minHeight: "100vh", 
        padding: "60px 20px" 
      }}
    >
      <div className="container">
        <h2 className="text-center fw-bold mb-5 text-white">Our Activities & Events</h2>
        <div className="row">
          {activities.map((activity) => (
            <div key={activity.id} className="col-md-6 col-lg-4 mb-4">
              <div 
                className="card h-100 shadow-lg border-0"
                style={{
                  background: "linear-gradient(145deg, #ffffff, #fef6e4)", // soft white-gold blend
                  borderRadius: "12px"
                }}
              >
                <img
                  src={activity.image}
                  alt={activity.title}
                  className="card-img-top"
                  style={{ height: "200px", objectFit: "cover", borderTopLeftRadius: "12px", borderTopRightRadius: "12px" }}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title fw-bold" style={{ color: "rgb(24, 59, 78)" }}>
                    {activity.title}
                  </h5>
                  <p className="text-muted">{activity.date}</p>
                  <p className="card-text">{activity.description}</p>
                  <a
                    href={activity.link}
                    className="btn mt-auto"
                    style={{ 
                      backgroundColor: "rgb(221, 168, 83)", 
                      color: "black",
                      fontWeight: "bold",
                      borderRadius: "8px"
                    }}
                  >
                    Register
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Activities;
