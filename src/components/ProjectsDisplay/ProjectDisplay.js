import React from "react";
import styled from "styled-components";
import MediaCarousel from "../MediaCarousel/MediaCarousel";

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
    margin: 20px 0 16px 0;
    letter-spacing: -0.3px;
  }

  .description {
    font-size: 16px;
    line-height: 1.8;
    color: #444;
    margin-bottom: 24px;
    white-space: pre-line;

    p {
      margin-bottom: 16px;

      &:last-child {
        margin-bottom: 0;
      }
    }
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

function ProjectDisplay({
  VisualComponent,
  media = [],
  title,
  desc,
  skills = [],
  links = []
}) {
  // Support both old VisualComponent prop and new media array prop
  const mediaItems = media.length > 0 ? media : (VisualComponent ? [VisualComponent] : []);

  // Format description with proper line breaks
  const formatDescription = (text) => {
    if (!text) return null;

    // Split by double line breaks for paragraphs, or single line breaks
    const paragraphs = text.split(/\n\n+/).filter(p => p.trim());

    if (paragraphs.length > 1) {
      return paragraphs.map((para, idx) => (
        <p key={idx}>{para.trim()}</p>
      ));
    }

    // If no double line breaks, just use the text as-is with preserved line breaks
    return <p>{text.trim()}</p>;
  };

  return (
    <ProjectDisplayBlock>
      {mediaItems.length > 0 && <MediaCarousel media={mediaItems} />}
      {title && <h3>{title}</h3>}
      {desc && <p className="description">{formatDescription(desc)}</p>}
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
