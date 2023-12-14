import React from 'react';
import styled from 'styled-components';
import { colors } from '../theme';

export const About = () => {
  return (
    <AboutWrapper>
      <h2>step by step...</h2>
      <PWrapper>
        <p>
          A Little Step helps you get reminded of the little things we all can
          do every day that get us started on the path of making better choices
          for the environment.<br></br>
          In our list you can choose steps for the day and check them off when you've
          completed them.<br></br>
          You can also add steps of your own choice to the list.
        </p>
      </PWrapper>
    </AboutWrapper>
  );
};

const AboutWrapper = styled.div`
  margin-top: 16px;

  h2 {
    color: ${colors.primary};
    font-weight: 600;
  }

  p {
    color: ${colors.text};
    font-weight: 400;
  }

  @media (max-width: 400px) {
    p {
      font-size: small;
      color: black;
    }
  }
`;

const PWrapper = styled.div`
  padding: 0 24px;
`;
