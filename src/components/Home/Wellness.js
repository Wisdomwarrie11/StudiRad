import React from "react";
import { useNavigate } from "react-router-dom"; 
import { Music, Heart, Brain } from "lucide-react"; 

const mentalWellness = [
  {
    title: "Mindful Moment",
    description: "Take a moment to relax and clear your mind.",
    icon: <Brain size={32} className="mb-2" style={{color: 'rgb(221, 168, 83)'}} />,
    link: "/Mindful",  
  },
  {
    title: "Music Therapy",
    description: "Listen to calming music to soothe your mind.",
    icon: <Music size={32} className=" mb-2" style={{color: 'rgb(221, 168, 83)'}} />,
    link: "/Music",  
  },
  {
    title: "Gratitude Notes",
    description: "Boost your mental wellness with daily gratitude.",
    icon: <Heart size={32} className=" mb-2" style={{color: 'rgb(221, 168, 83)'}} />,
    link: "/gratitude",  
  },
];

const WellnessSection = () => {
  const navigate = useNavigate();  

  const handleCardClick = (link) => {
    navigate(link); 
  };

  return (
    <section className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-4 fw-bold">🧘 Mental Wellness</h2>
        <div className="row g-4">
          {mentalWellness.map((hub, index) => (
            <div className="col-md-4" key={index}>
              <div
                className="card h-100 shadow-sm border-0 hover-shadow cursor-pointer"
                onClick={() => handleCardClick(hub.link)}
              >
                <div className="card-body text-center">
                  {hub.icon}
                  <h5 className="card-title fw-semibold mt-2">{hub.title}</h5>
                  <p className="card-text text-secondary">{hub.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WellnessSection;
