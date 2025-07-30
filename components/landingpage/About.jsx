import React from "react";
import style from "../../styles/landingpage/About.module.scss";

const About = () => {
  return (
    <section className={style.aboutsection}>
      <div className={style.container}>
        <div className={style.aboutsection1}>
          <h2 className={`${style.sectionTitle} font-heading`}>
            About <span className={"gradientText"}>UNINetworks</span>
          </h2>
          <p className={`${style.introText} font-body`}>
            We are <strong>UniNetworks</strong>, a technology-driven company dedicated to powering digital transformation through expert IT services. With a strong commitment to quality and innovation, we help businesses build, secure, and scale their digital infrastructure — from websites and mobile apps to structured cabling, surveillance, and enterprise networking.
          </p>
          
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
              <p className="font-body">⚡ Fast Turnaround - Agile workflows ensure timely delivery</p>
              <p className="font-body">👨‍💼 Expert Team - Certified developers & network engineers</p>
              <p className="font-body">🔄 End-to-End Solutions - From consulting to deployment and support</p>
              <p className="font-body">📞 24/7 Support - We're here whenever you need us</p>
            </div>
          </div>
        </div>
        
        <div className={style.aboutsection2}>
          <img src="/brands/WhatsApp Image 2025-07-26 at 23.47.29_f519cde9.jpg" alt="UniNetworks Brand" />
        </div>
      </div>
    </section>
  );
};

export default About;
