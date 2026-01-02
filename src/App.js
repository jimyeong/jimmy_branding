import React from "react";
import styled from "styled-components";
import GlobalStyle from "./components/GlobalStyle";
import ThemeProvider from "react-bootstrap/ThemeProvider";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import DescWithImage from "./components/description/DescWithImage";
import TextDevider from "./components/Devider/TextDevider";
import AvatarImg from "./assets/imgs/avartar_4.png";
import ProjectDisplay from "./components/ProjectsDisplay/ProjectDisplay";
import AnimationDisplay from "./components/Animations/AnimationDisplay";
import ShareKim from "./assets/imgs/sharekim_img.png";
import Unsplash from "./assets/imgs/unsplash_img.png";
import Hyundai from "./assets/imgs/hyundai_bridge.png";
import Banobagi from "./assets/imgs/banobagi_eyes.png";
import { uiconfig } from "./uiconfig";
import MediaCarousel from "./components/MediaCarousel/MediaCarousel";
import OwlverloadAnalyticsImage1 from "./assets/imgs/1_stock_management.jpg";
import OwlverloadAnalyticsImage2 from "./assets/imgs/2_stock_management.jpg";
import OwlverloadAnalyticsImage3 from "./assets/imgs/3_stock_management.jpg";
import IframeWrapper from "./components/IframeWrapper";
const AppUIBlock = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  font-size: 16px;
  line-height: 1.6;

  .vimeo__wrapper {
    position: relative;
    width: 100%;
    height: 450px;
    border-radius: 8px;
    overflow: hidden;
    background: #000;

    @media only screen and (max-width: ${uiconfig.resposiveSize}) {
      height: 280px;
    }
  }

  iframe {
    border-radius: 8px;
  }

  @media only screen and (max-width: ${uiconfig.resposiveSize}) {
    width: 100%;
    padding: 0 16px;
  }
`;

const owlverloadAnalyticsVideo = "https://www.youtube.com/embed/rqJM1f8N0YM?si=zX5A_6abKt1XDTp_";


const OwlverloadAnalyticsVideoComponent = () => {
  return (<IframeWrapper src={owlverloadAnalyticsVideo} title="owlverload_analytics" />
  )
}

function App() {
  return (
    <AppUIBlock>
      <ThemeProvider>
        <GlobalStyle />
        <Container fluid="md">
          <div className="_container" style={{ padding: "40px 24px" }}>
            <Row>
              <DescWithImage
                imageSrc={AvatarImg}
                content="Product-focused full-stack developer with experience building and operating real-world systems. 
                I enjoy working in small teams where I can take ownership from idea to implementation, iteration, and delivery."
              >
                <div>
                  <br />
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="#0077B5"
                      className="bi bi-linkedin"
                      viewBox="0 0 16 16"
                    >
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                    </svg>
                    <a
                      href="https://www.linkedin.com/in/jimyeong-jung-725a9223a"
                      target="_blank"
                    >
                      {" "}
                      https://www.linkedin.com/in/jimyeong-jung-725a9223a
                    </a>
                  </div>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-github"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                    </svg>
                    <a href="https://github.com/jimyeong" target="_blank">
                      {" "}
                      https://github.com/jimyeong
                    </a>
                  </div>
                  <div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-mailbox"
                      viewBox="0 0 16 16"
                    >
                      <path d="M4 4a3 3 0 0 0-3 3v6h6V7a3 3 0 0 0-3-3zm0-1h8a4 4 0 0 1 4 4v6a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1V7a4 4 0 0 1 4-4zm2.646 1A3.99 3.99 0 0 1 8 7v6h7V7a3 3 0 0 0-3-3H6.646z" />
                      <path d="M11.793 8.5H9v-1h5a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.354-.146l-.853-.854zM5 7c0 .552-.448 0-1 0s-1 .552-1 0a1 1 0 0 1 2 0z" />
                    </svg>
                    <span> idjjm92@gmail.com</span>
                  </div>
                </div>
              </DescWithImage>
            </Row>

            <TextDevider label="Core Projects" />

            <ProjectDisplay
              title="Owlverload Analytics"
              skills={["React Native", "Mux", "Go", "Typescript", "MariaDB", "Cloudflare R2", "Google Auth2.0", "Redis", "Lua script"]}
              desc={`Owlverload Analytics was born from a real operational problem I experienced while working on the shop floor of a supermarket.
              Despite the rapid advances in AI and software tools, I noticed that many day-to-day retail operations were still being handled in highly manual, traditional ways. 
              One recurring issue was expiry-date management. With hundreds of products, each expiring on different days, checking everything manually every day was both time-consuming and error-prone. 
              Seeing large amounts of perfectly usable stock being discarded due to missed expiry dates made me question whether software could reduce that burden. 
              Owlverload Analytics was built to explore how lightweight data tracking and analytics could help frontline workers make better decisions, reduce waste, and manage stock more effectively. 
              The project focuses on bridging the gap between real-world operational constraints and practical software solutions, shaped directly by on-the-ground experience rather than abstract assumptions.`}

              VisualComponent={<MediaCarousel media={
                [<OwlverloadAnalyticsVideoComponent />
                ]} />}
              links={[
                "https://github.com/jimyeong/sp6_stockmanager_server"
              ]}
            />
            <ProjectDisplay
              skills={[
                "React",
                "NodeJS",
                "Socket.io",
                "JavaSpringBoot",
                "MariaDB",
                "Nginx",
                "CentOS",
              ]}
              title="Link2You"
              desc={`Implemented a real-time messaging system using Node.js, Socket.IO, JWT-based authentication, and a React frontend.
                Built login/logout presence indicators and role-aware notifications between mentors and mentees. 
                When a mentor logs in, a real-time notification is delivered to t he connected mentee client. 
                Also implemented a video-based learning flow for mentees, including attention-check quizzes embedded within videos. Quiz responses are persisted to the database to track engagement  and completion status before allowing users to proceed to surveys.`}
              VisualComponent={
                <IframeWrapper
                  src="https://www.youtube.com/embed/lOpW--VTrX0"
                  title="YouTube video player"
                />
              }
              links={["http://www.link2you.org/"]}
            />
            <ProjectDisplay
              skills={[
                "React Native",
                "Redux",
                "Redux Thunk",
                "UI Component Engineering",
                "Interactive UI"
              ]}
              title="Updang"
              desc={`Developed core UI components used across the application, aligned precisely with designer-provided specifications to ensure consistency and reusability. Implemented a calendar module by customizing an existing library to meet 
                client-specific requirements. 
                Built an interactive card-based module at the client’s request, featuring continuous rotation, pausing on user interaction, and automatically resuming rotation after a short delay once interaction ends. 
                Established the frontend architecture using Redux and Redux Thunk, handling global state management and asynchronous data flows. 
                This project is no longer actively maintained. The demo video showcases the implemented UI flows and interactions.`}
              VisualComponent={
                <IframeWrapper
                  src="https://www.youtube.com/embed/aHOPJZgTfRk"
                  title="YouTube video player"
                />
              }
              links={[
                "https://play.google.com/store/apps/details?id=com.crepassplus.updang&hl=en&gl=US",
                "https://apps.apple.com/kr/app/up%EB%8B%B9/id1556052269?utm_source=homepage&utm_medium=button",
              ]}
            />
            <ProjectDisplay
              title="Language adapter"
              skills={["React", "NodeJS", "PM2", "Express.js", "MariaDB"]}
              desc={`The Language Adapter Project originated from my personal journey of learning English. 
              During conversations, I often found myself struggling to express my thoughts using English phrases, 
              resorting to Korean-style expressions instead. 
              Realizing the need to bridge this gap, I embarked on this project to develop a comprehensive solution.`}
              VisualComponent={
                <div className="vimeo__wrapper">
                  <IframeWrapper
                    src="https://player.vimeo.com/video/823845422?h=6531fc52d4&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                    frameBborder="0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                    title="langauge_adapter"
                  />
                </div>
              }
              links={[
                "https://github.com/jimyeong/language_adapter_client",
                "https://github.com/jimyeong/language_adapter_server",
              ]}
            />
            <TextDevider label="Interactive Projects" />
            <ProjectDisplay
              title="Pixelizing interaction"
              VisualComponent={
                <IframeWrapper
                  src="https://codepen.io/idjjm92/embed/preview/VwdgpMj?default-tab=&theme-id=dark"
                  title="pixelizing"
                />
              }
              desc={`Inspired by visual experiments I saw in online videos, I rebuilt this pixelizing interaction from scratch to understand the underlying rendering and timing mechanics. 
                The project renders text to a canvas, converts the pixels into particles using getImageData, and applies simple force, friction, and easing so particles react to mouse movement and then settle back into their original positions. 
                The goal was to explore pixel-data processing, particle systems, and basic physics-driven motion—not to replicate a predefined effect.`}
              links={[
                "https://codepen.io/idjjm92/pen/VwdgpMj",
              ]}
            />
            <ProjectDisplay
              title="Matrix code rain effect"
              VisualComponent={
                <IframeWrapper
                  height="415"
                  style={{ width: "100%" }}
                  title="matrix code rain"
                  src="https://codepen.io/idjjm92/embed/preview/QWxvxZB?default-tab=&theme-id=dark"
                />
              }
              desc={`As a long-time fan of The Matrix, I wanted to understand how its iconic “code rain” effect could be implemented programmatically. 
                I built this project from scratch as a focused experiment in canvas rendering, animation timing, and pseudo-random character generation, with an emphasis on clear structure and performance rather than visual polish.`}
              links={[
                "https://codepen.io/idjjm92/pen/QWxvxZB",
              ]}
            />
          </div>
        </Container>
      </ThemeProvider>
    </AppUIBlock>
  );
}

export default App;
