import React from "react";
import Title from "./Title";
import skills from "../lists/skills";

function Skills() {
  return (
    <section className="section bg-grey">
      <Title title="skills" />
      <div className="section-center skills-center">
        {skills.map((service) => {
          const { id, icon, title, text } = service;

          return (
            <article key={id} className="service">
              {icon}
              <h4>{title}</h4>
              <div className="underline"></div>
              <p>{text}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default Skills;
