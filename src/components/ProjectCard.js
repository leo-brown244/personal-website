import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, url }) => {
  
  const handleClick = () => {
    console.log('Project box clicked!');
    // You can perform any action here, like navigating to another page or opening a modal.
    if(url.size === 0)
    {
      return;
    }
    window.open(url, '_blank');
  };

  return (
    <Col size={12} sm={6} md={6}>
      <div className="proj-imgbx" onClick={handleClick}>
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  )
}
