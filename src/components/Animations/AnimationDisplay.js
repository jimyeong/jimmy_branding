import React from "react";
import styled from "styled-components";
import { uiconfig } from "../../uiconfig";

const AnimationDisplayBlock = styled.div`
  .wrapper {
    overflow-y: hidden;
    height: 480px;

    cursor: pointer;
    box-shadow: 1px 1px 15px 15px rgba(0, 0, 0, 0.05);
    > img {
      transition: transform 3s ease-in-out;
    }
    @media only screen and (max-width: ${uiconfig.resposiveSize}) {
      height: 300px;
    }
    &:hover {
      > img {
        transform: translateY(calc(-100% + 480px));
        @media only screen and (max-width: ${uiconfig.resposiveSize}) {
          transform: translateY(calc(-100% + 300px));
        }
      }
    }
  }
`;

function AnimationDisplay({ imgSrc }) {
  return (
    <AnimationDisplayBlock>
      <div className="wrapper">
        <img src={imgSrc} alt="" />
      </div>
    </AnimationDisplayBlock>
  );
}

export default AnimationDisplay;
