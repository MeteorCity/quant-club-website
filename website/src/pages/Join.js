import React from 'react';
import Header from "../components/Header";

function Join() {
  return (
    <div className="join-page">
      <Header />

      <h1>Join Our Club</h1>

      <div className="join-options">
        {/* JOIN AS A MEMBER */}
        <div className="join-option member">
          <h2>JOIN AS A MEMBER</h2>
          <p>Applications for the 2024-2025 school year are now open!</p>
          <p>We are looking for students interested in quantitative finance – no prior background necessary!</p>
          <p>The only thing you need is an interest in finance and technology and an interest in tackling challenging problems in creative ways.</p>
          <p>Here is our GroupMe:</p>

          {/* GroupMe QR Code */}
          <div className="qr-code-container">
            <img src="/quantclub/quant-club-website/groupmeqr.png" alt="GroupMe QR Code" className="qr-code" />
          </div>

          {/* Contact Info */}
          <p className="contact-info">
          <p>Contact us at <a href="mailto:ricequantclub@gmail.com">ricequantclub@gmail.com</a> for more information.</p>
          <p>Or feel free to reach out to <a href="mailto:rjm16@rice.edu">rjm16@rice.edu</a></p>
          </p>
        </div>

        {/* JOIN AS A SPONSOR */}
        <div className="join-option sponsor">
          <h2>JOIN AS A SPONSOR</h2>
          <p>If you're interested in partnering with us and supporting our mission, we’d love to hear from you!</p>
          <p>Sponsors provide invaluable resources that help us grow our community and provide opportunities for our members.</p>
        </div>
      </div>
    </div>
  );
}

export default Join;