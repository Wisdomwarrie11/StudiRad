<section 
  style={{
    marginTop: "20px",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    position: "relative",
    padding: "60px 20px",
    background: "linear-gradient(135deg, rgb(17,31,50) 40%, #243b55 70%, #fcd34d 100%)",
    color: "white",
    overflow: "hidden"
  }} 
  className="hero"
>
  <div className="container" style={{ position: "relative", zIndex: 1 }}>
    <div className="row align-items-center">
      
      {/* Text block */}
      <div className="col-lg-6 col-md-12 order-1 order-lg-1 text-lg-start text-center">
        <h1 
          style={{ fontSize: "3rem", fontWeight: "800", lineHeight: "1.2" }}
          className="hero-title"
        >
          Transforming your <span style={{ color: "#fcd34d" }}>Radiography</span> Journey
        </h1>

        <p style={{ marginTop: "20px", fontSize: "18px", maxWidth: "500px" }}>
          Join a community of forward-thinking radiographers. Learn, connect, and grow with experts guiding your professional path.
        </p>

        <a href="/" style={{ textDecoration: "none" }}>
          <button 
            style={{
              marginTop: "30px",
              padding: "10px 20px",
              backgroundColor: "#fcd34d",
              border: "none",
              borderRadius: "50px",
              color: "rgb(17,31,50)",
              fontWeight: "bold",
              fontSize: "16px",
              cursor: "pointer",
              transition: "all 0.3s ease",
              display: "inline-block",
              width: "auto"
            }}
            onMouseOver={e => e.currentTarget.style.backgroundColor="#fbbf24"}
            onMouseOut={e => e.currentTarget.style.backgroundColor="#fcd34d"}
          >
            Start Here
          </button>
        </a>
      </div>

      {/* Image / Illustration block */}
      <div className="col-lg-6 col-md-12 order-2 order-lg-2 text-center mt-4 mt-lg-0">
        <div 
          style={{
            width: "100%",
            height: "300px",
            borderRadius: "20px",
            background: "linear-gradient(145deg, rgba(255,255,255,0.1), rgba(0,0,0,0.2))",
            backdropFilter: "blur(8px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#fcd34d",
            fontSize: "1.5rem",
            fontWeight: "600"
          }}
        >
          <img src="manmed.jpeg" alt="" />
        </div>
      </div>

    </div>
  </div>
</section>



// import { useEffect, useState } from 'react';
// import './HeroSection.css'; // Create this CSS file for styles

// const backgroundImages = [
//   'Radstudents.jpg',
//   'Monica.jpg',
//   'Nomso.jpg'
// ];

// const HeroSection = () => {
//   const [currentImage, setCurrentImage] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentImage((prev) => (prev + 1) % backgroundImages.length);
//     }, 7000); // slower transition (7 seconds)
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="hero-wrapper">
//       {backgroundImages.map((img, index) => (
//         <div
//           key={index}
//           className={`hero-bg ${index === currentImage ? 'active' : ''}`}
//           style={{ backgroundImage: `url(${img})` }}
//         />
//       ))}

//       <div className="hero-content text-center text-white px-3">
//         <h1 className="display-4 fw-bold">Transform your <span style={{ color: 'rgb(221, 168, 83)' }}>Radiography</span> Journey</h1>
//         <p className="lead bg-dark bg-opacity-75 d-inline-block px-3 py-2 rounded">
//           <em><strong>Simplifying every step of the way...</strong></em>
//         </p>
//         <div className="mt-4">
//           <a href="/subscribe/">
//             <button className="btn btn-lg px-4" style={{ backgroundColor: 'rgb(221, 168, 83)', color: 'black' }}>
//               <strong>Start your Journey</strong>
//             </button>
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;
