import React from "react";
import styled from "styled-components";

const DescWithImageBlock = styled.div`
  padding-left: 102px;
  min-height: 90px;
  position: relative;
  > img {
    position: absolute;
    left: 0;
    width: 72px;
  }
  > p {
    padding-top: 6px;
    font-size: 18px;
    max-width: 1080px;
  }
`;

function DescWithImage({ children, content, imageSrc }) {
  return (
    <DescWithImageBlock>
      <img src={imageSrc} alt="" />
      <p>{content}</p>
      {children}
    </DescWithImageBlock>
  );
}

export default DescWithImage;
