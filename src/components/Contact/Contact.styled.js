import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledLink = styled(Link)`
  color: var(--main-text-color);
`;

export const PersonalData = styled.div`
  margin-bottom: 15px;
  @media screen and (min-width: 768px) {
    margin-bottom: 25px;
  }
  @media screen and (min-width: 1440px) {
    margin-bottom: 30px;
  }
`;

export const Name = styled.p`
  font-weight: 700;
  font-size: 18px;
  text-align: center;
  background-color: black;
  color: var(--second-text-color);
  padding: 10px;
  margin-bottom: 15px;
  @media screen and (min-width: 768px) {
    margin-bottom: 25px;
  }
  @media screen and (min-width: 1440px) {
    margin-bottom: 30px;
  }
`;

export const Label = styled.span`
  color: var(--accent-text-color);
  font-size: 14px;
  margin-right: 5px;
`;

export const Number = styled.p`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 5px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: -30px;
  margin-left: 10px;
  @media screen and (min-width: 768px) {
    margin-top: -50px;
  }
  @media screen and (min-width: 1340px) {
    margin-top: -60px;
  }
`;

export const Button = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  width: 48%;
  height: 30px;
  padding: 10px;

  border: none;
  background-color: #2b2b2b;
  color: var(--second-text-color);

  cursor: pointer;
  transition: background-color var(--main-hover-animation);

  :hover,
  :focus {
    background-color: var(--accent-bg-color);
  }
`;
