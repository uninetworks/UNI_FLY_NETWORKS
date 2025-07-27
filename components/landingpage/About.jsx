import React from "react";
import style from "../../styles/landingpage/About.module.scss";

const About = () => {
  return (
    <section className={style.aboutsection}>
      <div className={style.container}>
        <div className={style.aboutsection1}>
          <h2 className={style.sectionTitle}>
            About <span className={"gradientText"}>UNI Networks</span>
          </h2>
          <p className={style.introText}>
            UniNetworks is a multi-vertical company designed to serve ambitious
            startups, modern businesses, and global clients. Whether it's
            building stunning websites, helping students go abroad, or moving
            goods around the world — we make it happen with cutting-edge technology
            and innovative solutions.
          </p>
          
          <div className={style.valuesections}>
            <div>
              <h1>Our Mission</h1>
              <p>
                To empower clients through cutting-edge technology and
                innovative digital infrastructure solutions, while delivering
                reliable service and long-term value that drives sustainable growth.
              </p>
            </div>
            <div>
              <h1>Our Vision</h1>
              <p>
                To become the leading integrated tech solutions provider across India,
                known for quality, commitment, and customer-centricity in every
                project we undertake.
              </p>
            </div>
            <div>
              <h1>Our Values</h1>
              <p>Integrity & Innovation</p>
              <p>Customer Focus</p>
              <p>Accountability</p>
              <p>Continuous Improvement</p>
            </div>
          </div>
        </div>
        
        <div className={style.aboutsection2}>
          <img src="/images/data-center-shot_2_orig.jpg" alt="Data Center Infrastructure" />
        </div>
      </div>
    </section>
  );
};

export default About;
