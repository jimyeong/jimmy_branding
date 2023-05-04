import React from "react";
import styled from "styled-components";

const TextDeviderBlock = styled.div`
  font-size: 24px;
  margin-top: 16px;
  font-family: "DotGothic16", sans-serif;
  position: relative;
  background: white;

  &:after {
    position: absolute;
    left: 260px;
    top: 50%;
    transform: translateY(-50%);
    right: 0;
    height: 2px;
    background-color: #333;
    z-index: 0;

    content: "";
  }
`;

function TextDevider({ children, label, textSymbol }) {
  return (
    <TextDeviderBlock>
      <h3>
        <span>{textSymbol}</span>
        <span> </span>
        <span>{label}</span>
      </h3>
    </TextDeviderBlock>
  );
}

export default TextDevider;
