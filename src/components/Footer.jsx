import { Container, Row, Col } from "react-bootstrap";
// import { MailchimpForm } from "./MailchimpForm";
// import logo from "../assets/img/logo.svg";
import logo from '../assets/img/Aditya Sharma logo 4.png';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon4.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          {/* <MailchimpForm /> */}
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/aditya-sharma-a019a1209/" target="_blank" rel="noreferrer"><img src={navIcon1} alt="Icon" /></a>
              <a  href="https://github.com/EvilXpirit" target="_blank" rel="noreferrer"><img src={navIcon2} alt="Icon" /></a>
              <a href="#"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p>By <a href="https://github.com/EvilXpirit" target="_blank" rel="noreferrer" className="no-underline text-gray-300 decoration"> EvilXpirit</a></p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}