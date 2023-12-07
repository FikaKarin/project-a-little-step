// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { IoFootstepsOutline } from 'react-icons/io5';

export const Navbar = () => {
  return (
    <StyledNavbar>
      <NavLink to='/home'>About</NavLink>
      <NavLink to='/task-container'>
        <IoFootstepsOutline />
      </NavLink>
      <NavLink to='/completed-tasks'>Achievements</NavLink>
    </StyledNavbar>
  );
};

const StyledNavbar = styled.nav`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  max-height: 34px;
  background-color: #ffffff35;
  margin: 0 auto;
`

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-weight: 400;
  font-size: 16px;
  padding: 6px 16px;

  &:hover {
    text-decoration: underline;
  }
`;
