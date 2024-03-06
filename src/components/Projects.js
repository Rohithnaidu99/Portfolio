import { Container, Row, Col, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import tictactoe from "../assets/img/tictactoe.png";
import Todo from "../assets/img/todo.png";
import calculator from "../assets/img/calculator.png"
import guess from "../assets/img/Guess.png"
import strongpwd from "../assets/img/strongpwd.jpeg"
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Calculator ",
      description: "Tool for Quick calculation",
      imgUrl: calculator,
      linkUrl:"https://rohithnaidu99.github.io/calculator/"
    },
    {
      title: "Tic-Tac-Toe",
      description: "Two-player Game",
      imgUrl: tictactoe,
      linkUrl:"https://rohithnaidu99.github.io/tictactoe/"
    },
    {
      title: "Todo",
      description: "List of Tasks",
      imgUrl: Todo,
      linkUrl:"https://rohithnaidu99.github.io/todo/"
    },
    {
      title: "Guess the Number ",
      description: "Number guessing game",
      imgUrl: guess,
      linkUrl:"https://rohithnaidu99.github.io/Guess-The-Number-master/"
    },
    {
      title: "Strong Password Generator ",
      description: "Generate Strong Password",
      imgUrl: strongpwd,
      linkUrl:"https://rohithnaidu99.github.io/generate-strong-password/"
    },

  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">            
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
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
      <img className="background-image-right" src={colorSharp2} alt={"background"}></img>
    </section>
  )
}
