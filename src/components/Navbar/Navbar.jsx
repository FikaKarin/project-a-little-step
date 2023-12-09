// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {
  IoFootstepsOutline,
  IoInformationCircleOutline,
  IoListOutline,
} from 'react-icons/io5';
import { GiTrophyCup } from 'react-icons/gi';

export const Navbar = () => {
  return (
    <StyledNavbar>
      <Logo to='/'>
        <p>
          <IoFootstepsOutline />A Little Step
        </p>
      </Logo>
      <NavLinks>
        <NavLink to='/home' title='About'>
          <IoInformationCircleOutline />
        </NavLink>
        <NavLink to='/task-container'>
          <IoListOutline />
        </NavLink>
        <NavLink to='/completed-tasks'>
          <GiTrophyCup />
        </NavLink>
      </NavLinks>
    </StyledNavbar>
  );
};

const StyledNavbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff35;
  border-bottom: 1px solid #ffffff88;
  padding: 10px 16px; /* Adjust the padding as needed */
  width: 100%; /* Make the Navbar as wide as its container */
  max-width: 700px; /* Set the maximum width for NavLinks */
  margin: 0 auto; /* Center the Navbar */
`;

const Logo = styled(Link)`
  color: white;
  text-decoration: none;
  font-weight: bold;
  font-size: 20px;

  @media (max-width: 390px) {
    font-size: 14px;
  }

  p {
    font-weight: 200;
    margin: 0;
  }

  &:hover {
    text-decoration: underline;
  }
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center; 
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-weight: bold;
  font-size: 16px;
  padding: 8px; /* Adjust the padding as needed */
  display: flex;
  align-items: center;

  &:hover {
    text-decoration: underline;
  }

  svg {
    margin-right: 4px; /* Adjust the margin as needed */
  }
`;
