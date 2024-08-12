import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon4.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import brandLogo from '../assets/img/Aditya Sharma logo 4.png';

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Navbar
      expand="xl"
      className={`fixed-top ${scrolled ? "scrolled" : ""}`}
      expanded={expanded}
      onToggle={(expanded) => setExpanded(expanded)}
    >
      <Container>
        <Navbar.Brand href="#home" className="brand">
        <img src={brandLogo} alt="" className="h-10 md:h-10 sm:h-10 lg:h-12" />
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className={`${expanded ? 'bg-cyan-800/50 h-fit pt-4 backdrop-blur-sm rounded' : ''} lg:bg-transparent`}>
          <Nav className="me-auto ms-4">
            <Nav.Link
              href="#home"
              className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'}
              onClick={() => onUpdateActiveLink('home')}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'}
              onClick={() => onUpdateActiveLink('skills')}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="#projects"
              className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'}
              onClick={() => onUpdateActiveLink('projects')}
            >
              Projects
            </Nav.Link>
            <Nav.Link
              href="#experience"
              className={activeLink === 'experience' ? 'active navbar-link' : 'navbar-link'}
              onClick={() => onUpdateActiveLink('experience')}
            >
              Experience
            </Nav.Link>
            <Nav.Link
              href="https://drive.google.com/file/d/1-O3QxaFCNVLjhXlxK8ja_GfBA3QqyaG5/view?usp=sharing" target="_blank"
              className={activeLink === 'resume' ? 'active navbar-link' : 'navbar-link'}
            >
              Resume
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/aditya-sharma-a019a1209/" target="_blank" rel="noreferrer">
                <img src={navIcon1} alt="" />
              </a>
              <a href="https://github.com/EvilXpirit" target="_blank" rel="noreferrer">
                <img src={navIcon2} alt="" />
              </a>
              <a href="#">
                <img src={navIcon3} alt="" />
              </a>
            </div>
            <a href="mailto:adsharma122@gmail.com">
              <button className="vvd"><span>Connect With me</span></button>
            </a>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
