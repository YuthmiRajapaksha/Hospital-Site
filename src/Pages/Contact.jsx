import React from "react";

const Contact = () => {
    return (
        <div style={{ padding: "20px", textAlign: "center" }}>
          {/* Centered Heading */}
          <h1>Contact Us</h1>
    
          {/* Content Section: Paragraph (Left) & Image (Right) */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "20px" }}>
            {/* Left side: Text */}
            <div style={{ flex: 1, textAlign: "left" }}>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, quis ratione ex totam, 
                eum vitae, reiciendis quia cum aut officia modi minima laboriosam. 
                Itaque facilis aperiam mollitia, debitis dolores 
              </p>
            </div>
    
            {/* Right side: Google Maps Embed */}
        <div style={{ flex: 1 }}>
          <iframe
            className="mb-4 mb-lg-0"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63389.402015162326!2d79.90128984703962!3d6.789604093624152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae24f91d281cc5d%3A0xea4b2fcd3ce0e74e!2sPiliyandala!5e0!3m2!1sen!2slk!4v1657287665149!5m2!1sen!2slk"
            frameBorder="0"
            style={{ border: "0", width: "80%", height: "384px" }}
            allowFullScreen
          ></iframe>
            </div>
          </div>
        </div>
      );
};

export default Contact;