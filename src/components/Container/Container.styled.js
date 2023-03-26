import styled from '@emotion/styled';

export const ContainerWrapper = styled.div`
  width: 320px;
  margin: 0 auto;
  padding: 50px 10px;
  @media screen and (min-width: 768px) {
    width: 767px;
  }
  @media screen and (min-width: 1300px) {
    width: 1299px;
  }
`;

export const Title = styled.h2`
  font-size: 26px;
  text-transform: uppercase;
  font-weight: 900;
  color: rgb(2, 100, 100);
  margin-bottom: 30px;
`;
