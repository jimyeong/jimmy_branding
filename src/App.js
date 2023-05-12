import React from "react";
import styled from "styled-components";
import GlobalStyle from "./components/GlobalStyle";
import ThemeProvider from "react-bootstrap/ThemeProvider";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import DescWithImage from "./components/description/DescWithImage";
import TextDevider from "./components/Devider/TextDevider";
import AvatarImg from "./assets/imgs/avartar_4.png";
import LinkYou from "./assets/imgs/link2you_main.png";
import ProjectDisplay from "./components/ProjectsDisplay/ProjectDisplay";
import AnimationDisplay from "./components/Animations/AnimationDisplay";
import ShareKim from "./assets/imgs/sharekim_img.png";
import Unsplash from "./assets/imgs/unsplash_img.png";
import Hyundai from "./assets/imgs/hyundai_bridge.png";
import Banobagi from "./assets/imgs/banobagi_eyes.png";
import Updang from "./assets/imgs/updang_pic.png";
import { uiconfig } from "./uiconfig";

const AppUIBlock = styled.div`
  width: 900px;
  margin: 0 auto;
  font-size: 18px;
  line-height: 1.3;
  .vimeo__wrapper {
    position: relative;
    width: 100%;
    height: 450px;

    @media only screen and (max-width: ${uiconfig.resposiveSize}) {
      height: 224px;
    }
  }
  @media only screen and (max-width: ${uiconfig.resposiveSize}) {
    width: 100%;
  }
`;

function App() {
  return (
    <AppUIBlock>
      <ThemeProvider>
        <GlobalStyle />

        <Container fluid="md">
          <div className="_container" style={{ padding: "16px" }}>
            <Row>
              <DescWithImage
                imageSrc={AvatarImg}
                content=" Hey there! I'm an inquisitive individual from South Korea who took a
        leap of faith to explore the world and broaden my horizons. I thrive on
        new tasks that push me to grow and transform my work. Let me share my
        exciting journey so far with you!"
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
            <TextDevider textSymbol=">" label="Personal Projects" />
            <Row style={{ marginTop: "18px" }}>
              <ProjectDisplay
                title="Language adapter"
                skills={["React", "NodeJS", "PM2", "Express.js", "MariaDB"]}
                desc="The Language Adapter Project originated from my personal journey of learning English. During conversations, I often found myself struggling to express my thoughts using English phrases, resorting to Korean-style expressions instead. Realizing the need to bridge this gap, I embarked on this project to develop a comprehensive solution."
                VisualComponent={
                  <div className="vimeo__wrapper">
                    <iframe
                      src="https://player.vimeo.com/video/823845422?h=6531fc52d4&amp;badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                      frameBborder="0"
                      allow="autoplay; fullscreen; picture-in-picture"
                      allowFullScreen
                      style={{
                        position: "absolute",
                        top: "0",
                        left: "0",
                        width: "100%",
                        height: "100%",
                      }}
                      title="langauge_adapter"
                    ></iframe>
                  </div>
                }
                links={[
                  "https://github.com/jimyeong/language_adapter_client",
                  "https://github.com/jimyeong/language_adapter_server",
                ]}
              />
            </Row>
            <TextDevider textSymbol=">" label="Animations" />
            <Row>
              <iframe
                height="300"
                style={{ width: "100%" }}
                title="pixelizing"
                src="https://codepen.io/idjjm92/embed/preview/VwdgpMj?default-tab=&theme-id=dark"
                loading="lazy"
                allowtransparency="true"
              >
                See the Pen{" "}
                <a href="https://codepen.io/idjjm92/pen/VwdgpMj">pixelizing</a>{" "}
                by jimmy jung (<a href="https://codepen.io/idjjm92">@idjjm92</a>
                ) on <a href="https://codepen.io">CodePen</a>.
              </iframe>
            </Row>

            <Row style={{ marginTop: "18px", paddingBottom: "16px" }}>
              <iframe
                height="300"
                style={{ width: "100%" }}
                title="pixelizing"
                src="https://codepen.io/idjjm92/embed/preview/QWxvxZB?default-tab=&theme-id=dark"
                loading="lazy"
                allowtransparency="true"
              >
                See the Pen{" "}
                <a href="https://codepen.io/idjjm92/pen/QWxvxZB">
                  matrix code rain
                </a>{" "}
                by jimmy jung (<a href="https://codepen.io/idjjm92">@idjjm92</a>
                ) on <a href="https://codepen.io">CodePen</a>.
              </iframe>
            </Row>
            <TextDevider textSymbol=">" label="Frontend Projects" />
            <Row style={{ marginTop: "18px" }}>
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
                desc="This project aims to assist orphaned children who, upon
              reaching the age of 17, are legally required to leave their
              care facility. However, they often face challenges adapting to
              society due to a lack of role models. Our objective is to
              connect them with mentors who are accomplished professionals
              in their fields, providing guidance and inspiration. Through
              educational videos, they can ask questions and gain financial
              knowledge. Eligible participants also receive subsidized
              support. Our goal is to empower these young individuals,
              helping them transition into responsible adulthood
              successfully."
                VisualComponent={
                  <iframe
                    style={{ width: "100%" }}
                    height="415"
                    src="https://www.youtube.com/embed/hnPAhCk147s"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                }
                links={["http://www.link2you.org/"]}
              />
            </Row>

            <Row style={{ marginTop: "18px" }}>
              <ProjectDisplay
                skills={[
                  "React",
                  "React Native",
                  "Java Spring Boot",
                  "Git hooks",
                  "AWS S3",
                  "AWS MariaDB",
                  "Amazon Linux2",
                ]}
                title="Updang"
                desc="University students often face difficulties in obtaining loans from banks due to their lack of credit history. This project originated from the idea of exploring alternative approaches to credit evaluation for university students. This application gathers information on financial events and promotions available in the financial sector, specifically targeted towards university students. It also provides insights into which banks offer loans, the interest rates involved, and the maximum loan amounts that students can obtain. The application serves as a platform to empower university students by facilitating their access to financial resources and enhancing their understanding of available loan options."
                VisualComponent={
                  <iframe
                    style={{ width: "100%" }}
                    height="415"
                    src="https://www.youtube.com/embed/aHOPJZgTfRk"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                }
                links={[
                  "https://play.google.com/store/apps/details?id=com.crepassplus.updang&hl=en&gl=US",
                  "https://apps.apple.com/kr/app/up%EB%8B%B9/id1556052269?utm_source=homepage&utm_medium=button",
                ]}
              />
            </Row>

            <Row style={{ marginTop: "18px" }}>
              <ProjectDisplay
                skills={[
                  "Elastic Search",
                  "Next.js",
                  "TypeScript",
                  "React.js",
                  "RabbitMQ",
                  "MongoDB",
                  "PostgreSQL",
                  "Flask",
                  "Python",
                  "AWS Lambda",
                  "Google Analytics",
                  "Docker",
                  "Jenkins",
                  "Gitlab",
                ]}
                title="Share kim"
                VisualComponent={<AnimationDisplay imgSrc={ShareKim} />}
                links={["https://sharekim.com/"]}
              />
            </Row>

            <Row style={{ marginTop: "18px" }}>
              <ProjectDisplay
                skills={["React", "Firebase hosting"]}
                title="Unsplash Copy"
                VisualComponent={<AnimationDisplay imgSrc={Unsplash} />}
                links={["https://unsplash-copy-494e5.web.app/"]}
              />
            </Row>

            <Row style={{ marginTop: "18px" }}>
              <ProjectDisplay
                skills={[
                  "HTML",
                  "SCSS",
                  "JS",
                  "Java Spring Boot",
                  "CentOS",
                  "Tomcat",
                ]}
                title="Hyundai Bridge Responsive web application"
                VisualComponent={<AnimationDisplay imgSrc={Hyundai} />}
                links={["https://unsplash-copy-494e5.web.app/"]}
              />
            </Row>

            <Row style={{ marginTop: "18px" }}>
              <ProjectDisplay
                skills={["HTML", "SCSS", "JS", "Apache", "PHP", "MYSQL"]}
                title="Banobagi plastic surgery hospital reponsive"
                desc="Reponsive web pages created at Banobagi plastic surgery hospital"
                VisualComponent={<AnimationDisplay imgSrc={Banobagi} />}
                links={[
                  "https://www.thailandbanobagi.com/eye/eyeIncisional.php",
                ]}
              />
            </Row>

            <TextDevider textSymbol=">" label="Backend Projects" />

            <TextDevider textSymbol=">" label="Problem Solving" />
            <Row style={{ marginTop: "16px" }}>
              <span>
                <svg
                  style={{ verticalAlign: "middle" }}
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-github"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                </svg>
                <a href="https://github.com/jimyeong/CS_study" target="_blank">
                  {" "}
                  https://github.com/jimyeong/CS_study
                </a>
              </span>
            </Row>
          </div>
        </Container>
      </ThemeProvider>
    </AppUIBlock>
  );
}

export default App;
