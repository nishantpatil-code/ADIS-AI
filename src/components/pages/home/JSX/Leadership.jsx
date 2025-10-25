import "../styles/Leadership.css";

export default function Leadership() {
  const leaders = [
    {
      name: "Sujit Hukkerikar",
      role: "CEO, Co-Founder",
      img: "/images/leader1.png",
      desc: "Bringing over a decade of corporate expertise...",
      linkedin: "https://www.linkedin.com/in/sujithukkerikar/",
    },
    {
      name: "Prasad Desai",
      role: "CTO, Co-Founder",
      img: "/images/leader2.png",
      desc: "With a strong foundation in engineering...",
      linkedin: "https://www.linkedin.com/in/prasad-desai/",
    },
    {
      name: "Ratish Pandey",
      role: "Business Mentor",
      img: "/images/leader3.png",
      desc: "A seasoned business leader with over 25 years...",
      linkedin: "https://www.linkedin.com/in/ratishpandey/",
    },
  ];

  return (
    <section className="leadership">
      <h2>Meet Our Leadership Team</h2>
      <div className="leader-grid">
        {leaders.map((leader, i) => (
          <div className="leader-card" key={i}>
            <img src={leader.img} alt={leader.name} />
            <h3>{leader.name}</h3>
            <p className="role">{leader.role}</p>
            <a href={leader.linkedin} target="_blank" rel="noopener noreferrer">
              <img src="/images/linkedin.png" alt="LinkedIn" className="linkedin" />
            </a>
            <p className="desc">{leader.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
