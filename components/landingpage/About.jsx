import React from "react";
import style from "../../styles/landingpage/About.module.scss";

const About = () => {
  return (
    <section className={style.aboutsection}>
      <div className={style.container}>
        {/* First row: About heading + description and image */}
        <div className={style.topSection}>
          <div className={style.aboutHeader}>
            <h2 className={`${style.sectionTitle} font-heading`}>
              About <span className={"gradientText"}>Uninetworks</span>
            </h2>
            <p className={`${style.introText} font-body`}>
              We are <strong>Uninetworks</strong>, a technology-driven company dedicated to powering digital transformation through expert IT services. With a strong commitment to quality and innovation, we help businesses build, secure, and scale their digital infrastructure — from websites and mobile apps to structured cabling, surveillance, and enterprise networking.
            </p>
          </div>
          
          <div className={style.aboutsection2}>
            <img src="/brands/WhatsApp Image 2025-07-26 at 23.47.29_f519cde9.jpg" alt="Uninetworks Brand" />
          </div>
        </div>
        
        {/* Second row: Mission, Vision, and Values cards */}
        <div className={style.valuesections}>
          <div>
            <h1 className="font-heading">Our Mission</h1>
            <p className="font-body">
              To empower clients through cutting-edge technology and innovative digital infrastructure solutions, while delivering reliable service and long-term value that drives sustainable growth.
            </p>
          </div>
          <div>
            <h1 className="font-heading">Our Vision</h1>
            <p className="font-body">
              To become the leading integrated tech solutions provider across India, known for quality, commitment, and customer-centricity in every project we undertake.
            </p>
          </div>
          <div>
            <h1 className="font-heading">Our Values</h1>
            <p className="font-body">🔒 Security First - We prioritize data security and compliance</p>
            <p className="font-body">👨‍💼 Expert Team - Certified developers & network engineers</p>
            <p className="font-body">🔄 End-to-End Solutions - From consulting to deployment and support</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
