import React from "react";
import "./Team.css";
import member1 from '../../../../assets/member1.avif';
import member2 from '../../../../assets/member2.jpg';
import member3 from '../../../../assets/member3.avif';
import { FaLinkedin } from "react-icons/fa";

function Team() {
  return (
    <section className="team" id="team">
      <h2 className="team-title">Meet Our Leadership Team</h2>
      <div className="team-container">

        {/* Sujit Hukkerikar */}
        <div className="team-member">
          <img src={member1} alt="Sujit Hukkerikar" className="member-photo" />
          <div className="member-info">
            <h3 className="name">Sujit Hukkerikar</h3>
            <p className="role">CEO, Co-Founder</p>
          </div>
          <a href="https://www.linkedin.com/in/sujit-hukkerikar/" target="_blank" rel="noopener noreferrer" className="linkedin-link">
            <FaLinkedin className="linkedin-icon" />
          </a>
          <p className="description">
            Bringing over a decade of corporate expertise, including roles at HP, Autodesk and Tata Elxsi, Sujit is not just our CEO but also a seasoned dairy farming expert with more than twelve years of practical knowledge.
          </p>
        </div>

        {/* Prasad Desai */}
        <div className="team-member">
          <img src={member2} alt="Prasad Desai" className="member-photo" />
          <div className="member-info">
            <h3 className="name">Prasad Desai</h3>
            <p className="role">CTO, Co-Founder</p>
          </div>
          <a href="https://www.linkedin.com/in/prasad-desai/" target="_blank" rel="noopener noreferrer" className="linkedin-link">
            <FaLinkedin className="linkedin-icon" />
          </a>
          <p className="description">
            With a strong foundation in engineering and over eight years of software development experience, Prasad is the driving force behind the technical development of ADIS's digital solutions.
          </p>
        </div>

        {/* Ratish Pandey */}
        <div className="team-member">
          <img src={member3} alt="Ratish Pandey" className="member-photo" />
          <div className="member-info">
            <h3 className="name">Ratish Pandey</h3>
            <p className="role">Business Mentor</p>
          </div>
          <a href="https://www.linkedin.com/in/ratishpandey/" target="_blank" rel="noopener noreferrer" className="linkedin-link">
            <FaLinkedin className="linkedin-icon" />
          </a>
          <p className="description">
            A seasoned business leader with over 25 years of experience and a Chartered Accountant qualification, Ratish serves as our business mentor, bringing invaluable expertise.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Team;