import React, { useState } from "react";
import styled from "styled-components";
import logo from "../images/icon3.svg";
import { FaBars } from "react-icons/fa";

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0px;
  margin-top: 5px;
  width: 100%;
  padding: 10px 0;
  background-color: transparent;
  color: white;
  z-index: 100;

  @media (max-width: 768px) {
    justify-content: space-between;
  }
`;

const NavbarLeft = styled.div`
  margin-left: 20px;
  color: white;
  text-decoration: none;

  @media (max-width: 768px) {
    display: flex;
    align-items: center;
  }
`;

const NavbarCenter = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }
`;

const Logo = styled.img`
  height: 30px;

  @media (max-width: 768px) {
    margin-right: 0;
  }
`;

const Title = styled.h1`
  margin: 0;
  font-family: "Libre Baskerville", serif;
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.3rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

const NavbarRight = styled.div`
  margin-right: 20px;
  color: white;
  text-decoration: none;

  @media (max-width: 768px) {
    display: none;
  }
`;

const Hamburger = styled(FaBars)`
  display: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
    background-color: white;
  }
`;

const MobileMenu = styled.div`
background-size: cover;
  display: none;
  position: absolute;
  top: 60px;
  right: 0;
  width: 100%;
  background-color: white;
  
  z-index: 99;

  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
    flex-direction: column;
    align-items: center;
    justify-content: center;

  }
`;

const MobileLink = styled.a`
  color: black;
  text-decoration: none;
  margin: 10px 0;
`;

const AboutLink = styled.a`
  color: black;
  text-decoration: none;
  margin-right: 20px;
`;

const BlogLink = styled.a`
  color: black;
  text-decoration: none;
`;

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Nav>
      <NavbarLeft>
        <Hamburger onClick={toggleMenu} />
      </NavbarLeft>
      <NavbarCenter>
        <Logo src={logo} alt="Logo" width={40} height={40} />
        <Title>MemoryHaven</Title>
      </NavbarCenter>
      <NavbarRight>
        <AboutLink href="/">About</AboutLink>
        <BlogLink href="/">Blog</BlogLink>
      </NavbarRight>
      <MobileMenu isOpen={isOpen}>
        <MobileLink href="/">About</MobileLink>
        <MobileLink href="/">Blog</MobileLink>
      </MobileMenu>
    </Nav>
  );
}

export default Navbar;
