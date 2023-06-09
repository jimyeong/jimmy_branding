import React from "react";
import styled from "styled-components";

const ProjectDisplayBlock = styled.div`
  padding: 16px 0 48px;
  .skills_label {
    font-size: 20px;
    display: inline-block;
  }
  .skills__container {
    margin-top: 16px;
    margin-bottom: 16px;
  }
`;

function ProjectDisplay({ VisualComponent, title, desc, skills, links = [] }) {
  return (
    <ProjectDisplayBlock>
      {VisualComponent}
      {title && <h3>Title: {title}</h3>}
      <p>{desc}</p>
      <div className="skills__container">
        {skills.length > 0 && <span className="skills_label">skills: </span>}
        {skills.length > 0 &&
          skills.map((item, i) =>
            item == skills[skills.length - 1] ? ` ${item}` : ` ${item} |`
          )}
      </div>
      <div>
        {links.length > 0 && <span>Link: </span>}
        {links.length > 0 &&
          links.map((link, idx) => (
            <div key={idx}>
              <a href={link} target="_blank">
                {link}
              </a>
            </div>
          ))}
      </div>
    </ProjectDisplayBlock>
  );
}

export default ProjectDisplay;
