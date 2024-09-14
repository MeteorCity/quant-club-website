import React from 'react';
import Header from "../components/Header";

function Join() {
  return (
    <main className="join-page">
      <Header />

      <h1 className="main-title">Join Our Club</h1>

      <div className="join-options">
        {/* JOIN AS A MEMBER */}
        <div className="join-option member">
          <h2 className="section-title">JOIN AS A MEMBER</h2>
          <p className="info-text">Applications for the 2024-2025 school year are now open!</p>
          <p className="info-text">We are looking for students interested in quantitative finance – no prior background necessary!</p>
          <p className="info-text">The only thing you need is an interest in finance and technology and an interest in tackling challenging problems in creative ways.</p>
          <p className="info-text">Here is our GroupMe:</p>

          {/* GroupMe QR Code */}
          <div className="qr-code-container">
            <img src="../../../public/customimgs/groupmeqr.jpg" alt="GroupMe QR Code" className="qr-code" />
          </div>

          {/* Contact Info */}
          <p className="contact-info">
            <p>Contact us at <a href="mailto:ricequantclub@gmail.com">ricequantclub@gmail.com</a> for more information.</p>
            <p>Or feel free to reach out to <a href="mailto:rjm16@rice.edu">rjm16@rice.edu</a></p>
          </p>
        </div>

        {/* JOIN AS A SPONSOR */}
        <div className="join-option sponsor">
          <h2 className="section-title">JOIN AS A SPONSOR</h2>
          <p className="info-text">If you're interested in partnering with us and supporting our mission, we’d love to hear from you!</p>
          <p className="info-text">Sponsors provide invaluable resources that help us grow our community and provide opportunities for our members.</p>
        </div>
      </div>
    </main>
  );
}

export default Join;

