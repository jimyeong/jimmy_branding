import React from "react";
import styled from "styled-components";

const TextDeviderBlock = styled.div`
  margin: 64px 0 32px 0;

  h3 {
    font-size: 32px;
    font-weight: 700;
    color: #1a1a1a;
    display: flex;
    align-items: center;
    gap: 12px;

    &:before {
      content: "";
      display: inline-block;
      width: 4px;
      height: 32px;
      background: linear-gradient(180deg, #0066cc 0%, #0052a3 100%);
      border-radius: 2px;
    }
  }

  @media only screen and (max-width: 768px) {
    margin: 48px 0 24px 0;

    h3 {
      font-size: 26px;

      &:before {
        height: 26px;
      }
    }
  }
`;

function TextDevider({ label }) {
  return (
    <TextDeviderBlock>
      <h3>{label}</h3>
    </TextDeviderBlock>
  );
}

export default TextDevider;
