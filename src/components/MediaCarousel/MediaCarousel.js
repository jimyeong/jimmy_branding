import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CarouselWrapper = styled.div`
  margin-bottom: 20px;

  .slick-slider {
    border-radius: 8px;
    overflow: hidden;
  }

  .slick-slide {
    > div {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  .slick-dots {
    bottom: 20px;

    li button:before {
      font-size: 10px;
      color: #fff;
      opacity: 0.5;
    }

    li.slick-active button:before {
      color: #0066cc;
      opacity: 1;
    }
  }

  .slick-prev,
  .slick-next {
    z-index: 1;
    width: 40px;
    height: 40px;

    &:before {
      font-size: 40px;
      opacity: 0.75;
    }

    &:hover:before {
      opacity: 1;
    }
  }

  .slick-prev {
    left: 10px;
  }

  .slick-next {
    right: 10px;
  }

  .media-item {
    width: 100%;
    position: relative;

    img {
      width: 100%;
      height: auto;
      display: block;
      border-radius: 8px;
    }

    iframe {
      width: 100%;
      border-radius: 8px;
    }

    .vimeo__wrapper {
      position: relative;
      width: 100%;
      height: 450px;
      border-radius: 8px;
      overflow: hidden;
      background: #000;

      iframe {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }

      @media only screen and (max-width: 768px) {
        height: 280px;
      }
    }
  }
`;

function MediaCarousel({ media = [] }) {
  // If only one item, don't show slider controls
  const settings = {
    dots: media.length > 1,
    infinite: media.length > 1,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: media.length > 1,
    autoplay: false,
    adaptiveHeight: true,
  };

  if (media.length === 0) {
    return null;
  }

  return (
    <CarouselWrapper>
      <Slider {...settings}>
        {media.map((item, index) => (
          <div key={index} className="media-item">
            {item}
          </div>
        ))}
      </Slider>
    </CarouselWrapper>
  );
}

export default MediaCarousel;
