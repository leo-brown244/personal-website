import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";

import webprojImg1 from "../assets/img/fullstack/projectImg1.png";
import webprojImg2 from "../assets/img/fullstack/projectImg2.png";
import webprojImg3 from "../assets/img/fullstack/projectImg3.png";
import webprojImg4 from "../assets/img/fullstack/projectImg4.png";
import webprojImg5 from "../assets/img/fullstack/projectImg5.png";

import blockprojImg1 from "../assets/img/blockchain/projectImg1.png";
import blockprojImg2 from "../assets/img/blockchain/projectImg2.png";
import blockprojImg3 from "../assets/img/blockchain/projectImg3.png";
import blockprojImg4 from "../assets/img/blockchain/projectImg4.png";
import blockprojImg5 from "../assets/img/blockchain/projectImg5.png";

import otherprojImg1 from "../assets/img/other/projectImg1.png";
import otherprojImg2 from "../assets/img/other/projectImg2.png";
import otherprojImg3 from "../assets/img/other/projectImg3.png";
import otherprojImg4 from "../assets/img/other/projectImg4.png";
import otherprojImg5 from "../assets/img/other/projectImg5.png";
import otherprojImg6 from "../assets/img/other/projectImg6.png";
import otherprojImg7 from "../assets/img/other/projectImg7.png";
import otherprojImg8 from "../assets/img/other/projectImg8.png";
import otherprojImg9 from "../assets/img/other/projectImg9.png";
import otherprojImg10 from "../assets/img/other/projectImg10.png";

import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const web_projects = [
    {
      description: "Full-Stack Development & Web Design",
      imgUrl: webprojImg1,
      url:"https://www.pedispasofamerica.com/shop/"
    },
    {
      description: "Beauty Page, Inc. is one of the leading global distributors for professional nail, beauty, and salon products.",
      imgUrl: webprojImg2,
      url:"https://beautypageinc.com/shop"
    },
    {
      description: "We’ve determined to be one of the leading pioneers in the IT field since the company was established hence we used the technological and managerial tools to be able to do our destined role in the most convincing way which complies with the international standards.",
      imgUrl: webprojImg3,
      url:"https://www.tripshop.com/"
    },
    {
      description: "We won multiple awards – Top 10 Wearable Companies by Entrepreneur Magazine, Technology Startup of the Year by PACT, and others. ",
      imgUrl: webprojImg4,
      url:"https://www.roarforgood.com/"
    },
    {
      description: "Envato is a community of creatives who come together to share ideas and help each other succeed.",
      imgUrl: webprojImg5,
      url:"https://codecanyon.net/item/grofresh-grocery-pharmacy-ecommerce-store-app-and-web-with-laravel-admin-panel-delivery-app/32791631."
    },
  ];

  const blockchain_projects = [
    {
      description: "As the production is a modern Elementor Template Kit with dark style UI, this is a WordPress based website for Bitcoin, Blockchain, Cryptocurrency, Crypto Landing Page, ICO Agency, Fintech Company, and all kinds of Financial Technology websites. ",
      imgUrl: blockprojImg1,
    },
    {
      description: "This production is a website for Bitcoin, Blockchain, Cryptocurrency, Crypto Landing Page, ICO Agency, Fintech Company, and all kinds of Financial Technology websites.nal nail, beauty, and salon products.",
      imgUrl: blockprojImg2,
    },
    {
      description: "This is designed according to latest cryptocurrency world requirements  for the type of websites that deal with digital currency, Cryptocurrencies, Finances, bitcoin mining equipment and business consulting.",
      imgUrl: blockprojImg3,
    },
    {
      description: " We can use it for multipurpose like ICO Presentation and new Crypto coins, bitcoin mining websites, cryptocurrency exchange and trading, digital currencies, finances, and business consulting.",
      imgUrl: blockprojImg4,
    },
    {
      description: "This is a web site for cryptocurrency, ICO, and Blockchain technology.",
      imgUrl: blockprojImg5,
    },
  ];

  const other_projects = [
    {
      description: "Skywolf is the OpenAI project that is launched to transform your legislative workflow with cutting-edge technology.",
      imgUrl: otherprojImg1,
      url:"https://skywolf.ai/"
    },
    {
      description: "It is a system used for controlling industrial processes, infrastructure, and facilities. SCADA systems are crucial in various sectors, including manufacturing, energy, water treatment, transportation, and telecommunications.",
      imgUrl: otherprojImg2,
      url:""
    },
    {
      description: "The G-code editor is an editor that performs the functions of editing and interpreting NC files and positioning the movements of numerically controlled machine tools",
      imgUrl: otherprojImg3,
      url:""
    },
    {
      description: "PLC Editor",
      imgUrl: otherprojImg4,
      url:""
    },
    {
      description: "MES, or Manufacturing Execution System, can optimize the management of the entire production process from order placement to product completion through information transmission, and use current real-time data for guidance and processing, and respond and report in a timely manner.",
      imgUrl: otherprojImg5,
      url:""
    },
    {
      description: "Realize the benefits of Forea manufacturing execution system(MES)",
      imgUrl: otherprojImg6,
      url:""
    },
    {
      description: "Video Conference System: This system is a real-time video chat system based on webrtc. Using AI technology provided by NVIDIA, GreenScreen, Super Resolution, and ASR functions are implemented. It provides broadcast function for social sites including youtube and twitter. (Skills:  NodeJS, ReactJS, AngularJS, c++, QT, webrtc, ReactNative)",
      imgUrl: otherprojImg7,
      url:"https://www.cimpatico.com/"
    },
    {
      description: "Doctor consultation site: This site is an advanced visualization application developed as collaboration between Nexus MD and Kitware for visualizing vascular images such as MRA and CTA. It is fully customized and tailored to increase the efficiency of diagnostic and surgical planning for vascular diseases. (Skills:  VTK, ITK, paraview-glance, Vue.js)",
      imgUrl: otherprojImg8,
      url:"https://www.nexus-md.com/"
    },
    {
      description: "Event Manage System: This site is the global directory of legal technology solutions, tools and services where buyers of legal technology can research the legal tech they need to manage a 21st century law firm or in-house department, vendors can showcase their solutions, and investors can understand the marketplace. (Skills: next.js, react.js, typescript )",
      imgUrl: otherprojImg9,
      url:"https://www.legaltechnologyhub.com/"
    },
    {
      description: "EatFit App: EatFit is the solution to nutrition education, access to healthy food, and weight loss. You can also find programs and events from many community partners. (Skills:  IOS&Android, GCP, Google App Engine, Google Firestore DB, Google Cloud Functions)",
      imgUrl: otherprojImg10,
      url:"https://apps.apple.com/us/app/eat-fit/id1325690290"
    },
  ];

  return (
    <section className="projects" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>I show you to all the big and small websites I have done so far</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Full-Stack</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">BlockChain</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Other</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          web_projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Row>
                          {
                            blockchain_projects.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                  />
                              )
                            })
                          }
                        </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <Row>
                          {
                            other_projects.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                  />
                              )
                            })
                          }
                       </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
