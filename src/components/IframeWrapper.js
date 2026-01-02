import React from "react";
import styled from "styled-components";

const IframeBlock = styled.iframe`
  width: 100%;
  height: 100%;
  aspect-ratio: 16 / 9; 
`;

const IframeWrapper = ({ src, title, allow, allowFullScreen, style, referrerPolicy }) => {
  return (
    <IframeBlock style={{width: "100%", height: "100%", ...(style && {...style})}} src={src} title={title} allow={allow||"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"} referrerPolicy={referrerPolicy || "strict-origin-when-cross-origin"} allowFullscreen={allowFullScreen||true} />
  );
}

export default IframeWrapper;