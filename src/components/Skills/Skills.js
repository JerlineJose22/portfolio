import React from "react";
import {
  Image,
  ContactWrapper,
} from "./SkillElement";
import ScrollAnimation from "react-animate-on-scroll";
import { stackList } from '../../data/ProjectData'

function Skills() {
  return (
    <ContactWrapper id="skills">
      <div className="Container">
        <div className="SectionTitle">Skills</div>
        <div className="BigCard">
          <div className="AboutBio">
            <div className="skills">
              {stackList.map((list, index) => (

                <ScrollAnimation animateIn="fadeInLeft" key={index}>
                  <div style={{margin:"50px"}}>
                    <img src={list.img} alt={list.name} style={{ height: "100px", marginTop: '50px' }} />
                    <h6>{list.name}</h6>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </div>
        </div>
      </div>
    </ContactWrapper>
  )
}

export default Skills