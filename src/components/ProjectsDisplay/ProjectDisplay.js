import React from "react";
import styled from "styled-components";

const ProjectDisplayBlock = styled.div`
  padding: 32px;
  margin-bottom: 32px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  }

  h3 {
    font-size: 24px;
    font-weight: 600;
    color: #1a1a1a;
    margin: 20px 0 12px 0;
  }

  > p {
    font-size: 16px;
    line-height: 1.7;
    color: #555;
    margin-bottom: 20px;
  }

  .skills__container {
    margin: 20px 0;
    padding: 16px;
    background: #f8f9fa;
    border-radius: 8px;
    border-left: 4px solid #0066cc;
  }

  .skills_label {
    font-size: 16px;
    font-weight: 600;
    color: #1a1a1a;
    display: inline-block;
  }

  .links__container {
    margin-top: 20px;

    span {
      font-weight: 600;
      color: #1a1a1a;
      display: block;
      margin-bottom: 8px;
    }

    a {
      color: #0066cc;
      text-decoration: none;
      display: block;
      padding: 4px 0;
      transition: color 0.2s ease;
      word-break: break-all;

      &:hover {
        color: #0052a3;
        text-decoration: underline;
      }
    }
  }

  @media only screen and (max-width: 768px) {
    padding: 20px;
    margin-bottom: 24px;
  }
`;

function ProjectDisplay({ VisualComponent, title, desc, skills = [], links = [] }) {
  return (
    <ProjectDisplayBlock>
      {VisualComponent}
      {title && <h3>{title}</h3>}
      {desc && <p>{desc}</p>}
      {skills.length > 0 && (
        <div className="skills__container">
          <span className="skills_label">Skills: </span>
          {skills.map((item, i) =>
            i === skills.length - 1 ? `${item}` : `${item} • `
          )}
        </div>
      )}
      {links.length > 0 && (
        <div className="links__container">
          <span>Links:</span>
          {links.map((link, idx) => (
            <a key={idx} href={link} target="_blank" rel="noopener noreferrer">
              {link}
            </a>
          ))}
        </div>
      )}
    </ProjectDisplayBlock>
  );
}

export default ProjectDisplay;
