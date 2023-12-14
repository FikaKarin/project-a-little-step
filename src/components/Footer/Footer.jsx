import React from 'react';
import styled from 'styled-components';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

export const Footer = () => {
  return (
    <StyledFooter>
      <Copyright>&copy; 2023 A Little Step. All rights reserved.</Copyright>
      <ContactInfo>
        <div>123 Main Street, City</div>
        <div>Email: info@example.com</div>
        <div>Phone: (123) 456-7890</div>
      </ContactInfo>
      <SocialMediaLinks>
        <StyledLink
          href='https://facebook.com'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FaFacebook />
          <span>Facebook</span>
        </StyledLink>
        <StyledLink
          href='https://twitter.com'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FaTwitter />
          <span>Twitter</span>
        </StyledLink>
        <StyledLink
          href='https://linkedin.com'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FaLinkedin />
          <span>LinkedIn</span>
        </StyledLink>
      </SocialMediaLinks>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  /* background-color: #305530a6; */
  color: white;
  padding: 20px;
  text-align: center;
  position: static;
  bottom: 0; /* Stick to the bottom */
  width: 100%; /* Full width */
`;

const Copyright = styled.div`
  font-size: 12px;
  margin-bottom: 10px;
`;

const ContactInfo = styled.div`
  font-size: 10px;
`;

const SocialMediaLinks = styled.div`
  font-size: 20px;
`;

const StyledLink = styled.a`
  color: white;
  margin: 0 10px;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;

  &:hover {
    color: #ccc;
  }

  span {
    margin-top: 5px;
  }
`;
