// Header.jsx
import React from 'react';
import styled from 'styled-components';
import { colors } from '../theme';

export const Header = () => {
  return (
    <HeaderWrapper>
      <Logo>A Little Step</Logo>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-top: 32px;
  background-color: ${colors.primary};
  color: #fff;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 8px;
  max-width: 350px;
`;

const Logo = styled.h1`
  font-size: 24px;
  font-weight: 400;
  margin: 0;
  letter-spacing: 1px;
`;
