import React from "react";

const About = () => {
  return (
    <div style={{ padding: "20px", textAlign: "center", fontFamily: 'Poppins',fontSize:"18px" }}>
    
      <h1>About Us</h1>

      
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "20px" }}>
        
        <div style={{ flex: 1, textAlign: "left" }}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, quis ratione ex totam, 
            eum vitae, reiciendis quia cum aut officia modi minima laboriosam. 
            Itaque facilis aperiam mollitia, debitis dolores 
          </p>
        </div>

       
        <div style={{ flex: 1 }}>
          <img 
            src="/img/doctor.png" 
            alt="About Us" 
            style={{ width: "70%", borderRadius: "10px" }} 
          />
        </div>
      </div>
    </div>
  );
};

export default About;

