import React from "react";
import styled from "styled-components";

const DescWithImageBlock = styled.div`
  display: flex;
  gap: 32px;
  align-items: flex-start;
  padding: 40px 0;

  > img {
    width: 120px;
    height: 120px;
    border-radius: 50%;
    object-fit: cover;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    flex-shrink: 0;
  }

  .content-wrapper {
    flex: 1;
  }

  > .content-wrapper > p {
    font-size: 18px;
    line-height: 1.7;
    color: #333;
    margin-bottom: 24px;
  }

  .social-links {
    display: flex;
    flex-direction: column;
    gap: 12px;

    a {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      color: #0066cc;
      text-decoration: none;
      transition: color 0.2s ease;

      &:hover {
        color: #0052a3;
      }
    }

    svg {
      flex-shrink: 0;
    }
  }

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;

    .social-links {
      align-items: center;
    }
  }
`;

function DescWithImage({ children, content, imageSrc }) {
  return (
    <DescWithImageBlock>
      <img src={imageSrc} alt="Profile" />
      <div className="content-wrapper">
        <p>{content}</p>
        <div className="social-links">
          {children}
        </div>
      </div>
    </DescWithImageBlock>
  );
}

export default DescWithImage;
