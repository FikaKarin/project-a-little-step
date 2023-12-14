import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { IoFootstepsOutline, IoInformationCircleOutline, IoListOutline } from 'react-icons/io5';
import { GiTrophyCup } from 'react-icons/gi';
import { NavLink as RouterNavLink } from 'react-router-dom';

export const Navbar = () => {
  return (
    <StyledNavbar>
      <Logo to='/welcome'>
        <p>
          <IoFootstepsOutline aria-hidden='true' />
          A Little Step
        </p>
      </Logo>
      <NavLinks>
        <StyledNavLink to='/home' aria-label='About'>
          <IoInformationCircleOutline aria-hidden='true' />
          <span className="link-text">About</span>
        </StyledNavLink>
        <StyledNavLink to='/step-container' aria-label='Step Container'>
          <IoListOutline aria-hidden='true' />
          <span className="link-text">Step Container</span>
        </StyledNavLink>
        <StyledNavLink to='/completed-steps' aria-label='Completed Steps'>
          <GiTrophyCup aria-hidden='true' />
          <span className="link-text">Completed Steps</span>
        </StyledNavLink>
      </NavLinks>
    </StyledNavbar>
  );
};

const StyledNavbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 16px;
  width: 100%;
  max-width: 700px;
  margin: 0 auto;
  background-color: #252925b5;
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
    font-weight: 400;
    margin: 0;
  }

  &:hover {
    text-decoration: underline;
    svg {
      text-decoration: underline;
    }
  }
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
`;

const StyledNavLink = styled(RouterNavLink)`
  color: white;
  text-decoration: none;
  font-weight: bold;
  font-size: 20px;
  padding: 8px;
  position: relative;

  &:hover {
    &:before {
      content: '';
      position: absolute;
      left: 0;
      bottom: -2px;
      width: 100%;
      height: 2px;
      background-color: white;
      display: block;
    }
  }

  svg {
    margin-right: 4px;
  }

  &.active {
    &:before {
      content: '';
      position: absolute;
      left: 0;
      bottom: -2px;
      width: 100%;
      height: 2px;
      background-color: white;
      display: block;
    }
  }

  .link-text {
    position: absolute;
    width: 1px;
    height: 1px;
    margin: -1px;
    padding: 0;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    border: 0;
  }
`;
