import { Col } from "react-bootstrap";
import "./projectcard.css"

export const ProjectCard = ({ title, description, imgUrl,linkUrl }) => {
  return (
    
    <Col size={12} sm={6} md={4} data-aos="flip-left" 
    data-aos-duration="1500" >
      
      <a href={linkUrl} target="_blank">
      <div className="proj-imgbx">
        <img src={imgUrl} alt="Project Template" />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
      </a>

    </Col>
  )
}
