import React from 'react';
import styled, { keyframes } from 'styled-components';

export const Header = () => {
  return (
    <HeaderWrapper>
      <h1>A Little Step</h1>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-top: 32px;
`;
