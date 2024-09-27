import React from "react";
// import { stackList } from "../../data/ProjectData";
import photo from "../../images/photo.png"
import {
  Image,
  ContactWrapper,
} from "./AboutElements";
import ScrollAnimation from "react-animate-on-scroll";
function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
          <ScrollAnimation animateIn="fadeInLeft">
            <Image
              src={photo}
              alt="man-svgrepo"
            />
          </ScrollAnimation>
          <div className="AboutBio">
            <ScrollAnimation animateIn="fadeInLeft">
              Hello! My name is <strong>Jerline Jose</strong>, originally from Kallakurichi and currently living in Coimbatore. I graduated with a BE in Robotics and Automation from <strong>Park College of Engineering and Technology, Coimbatore</strong>, where I developed a solid foundation in problem-solving, logical thinking, and technical innovation.
            </ScrollAnimation>

            <br /><br />

            <ScrollAnimation animateIn="fadeInLeft">
              During my three-month internship at <strong>Ciyes Systems Prvt Ltd, Coimbatore</strong>, I had the opportunity to work on real-world projects, including <strong>Automatic Number Plate Recognition and Safety Vest and Hardhat Detection Systems</strong>, where I contributed to dataset training and algorithm development. These projects helped me enhance my analytical skills and deepen my understanding of machine learning models.
            </ScrollAnimation>

            <br /><br />

            <ScrollAnimation animateIn="fadeInLeft">
              I also developed a <strong>web chat application</strong> that provided real-time communication capabilities using <strong>Kafka</strong> instead of Socket.io, due to its efficiency in handling high volumes of data. This project was built with a clean and functional frontend using <strong>HTML</strong>, <strong>CSS</strong>, and <strong>JavaScript</strong>, a Flask backend, and <strong>PostgreSQL</strong> as the database. The complexity and satisfaction of seeing this project come to life ignited my passion for web development.
            </ScrollAnimation>

            <br /><br />

            <ScrollAnimation animateIn="fadeInLeft">
              To further build my skills, I joined <strong>GT Software College</strong> as a <strong>web full-stack developer intern</strong>. During this period, I successfully developed several static websites, including an <strong>EMI calculator</strong> and an <strong>arithmetic calculator</strong>, applying my understanding of <strong>HTML</strong>, <strong>CSS</strong>, <strong>JavaScript</strong>, and <strong>backend integration</strong>. Additionally, I worked on a more intricate project—a fully functional <strong>e-commerce</strong> website built with <strong>React.js</strong> for the frontend and <strong>Django REST framework</strong> for the backend. This gave me hands-on experience in API development, user authentication, and database management.
            </ScrollAnimation>

            <br /><br />
            <ScrollAnimation animateIn="fadeInLeft">
              I am passionate about continuous learning and enjoy taking on new challenges that allow me to grow both technically and professionally. Moving forward, I am eager to dive deeper into full-stack web development. My goal is to contribute to impactful projects that solve real-world problems through innovative technology.
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;
