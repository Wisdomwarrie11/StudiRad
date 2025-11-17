import React from "react";

const activities = [
  {
    id: 3,
    title: "6 Weeks Locked-In Challenge",
    date: "Coming Soon",
    description: "6 weeks of intense Studies and assessment",
    image: "LockedIn.jpg",
    link: "/challenge"
  },
  {
    id: 2,
    title: "Inside Radiography: The NeuroImaging Experience",
    date: "7th November 2025",
    description: "An educating session designed to introduce Radiographers to the concept of neuroimaging and it role in medical Imaging.",
    image: "Episode 1.jpg",
    link: "#"
  },
 
  {
    id: 1,
    title: "From Induction to Impact: Navigating the Radiographer’s Journey",
    date: "September 20, 2025, 8:00 PM (WAT)",
    description: "Join four keynote speakers as they share insights on making the best use of your induction period and navigating your career path as a radiographer.",
    image: "StudiRad[1].jpg",
    link: "/webinarRegistration"
  },

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
        background: "white",
        minHeight: "10vh", 
        padding: "60px 20px",
        marginTop: '100px' 
      }}
    >
      <div className="container">
        <h2 className="text-center fw-bold mb-5 text-black">Our Activities & Events</h2>
        <div className="row">
          {activities.map((activity) => (
            <div key={activity.id} className="col-md-6 col-lg-4 mb-4">
              <div 
                className="card h-100 shadow-lg border-0"
                style={{
                  background: "linear-gradient(145deg, #ffffff, #fef6e4)", 
                }}
              >
                <img
                  src={activity.image}
                  alt={activity.title}
                  className="card-img-top"
                  style={{ height: "350px", objectFit: "cover", borderTopLeftRadius: "12px", borderTopRightRadius: "12px" }}
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
