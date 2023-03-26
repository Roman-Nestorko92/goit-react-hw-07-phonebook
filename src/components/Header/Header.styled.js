import styled from '@emotion/styled';

export const Title = styled.h1`
  color: rgb(2, 100, 100);
  font-size: 36px;
  text-transform: uppercase;
  font-weight: 900;
  letter-spacing: 2px;
  padding: 20px 0;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 270px;
  height: 40px;
  margin-bottom: 50px;

  background-color: rgb(2, 100, 100);
  color: whitesmoke;
  font-family: inherit;
  border: none;
  border-radius: 4px;

  cursor: pointer;
  transition: background-color var(--main-hover-animation);

  :hover,
  :focus {
    background-color: rgb(2, 120, 100);
  }
`;

export const ButtonText = styled.span`
  margin-right: 10px;
`;
