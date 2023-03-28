import styled from '@emotion/styled';

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;

  .item:last-child {
    margin-bottom: 0;
  }

  @media screen and (min-width: 768px) {
    width: calc((100% - 4 * 10px) / 2);
    margin: 10px;
  }
  @media screen and (min-width: 1310px) {
    width: calc((100% - 6 * 10px) / 3);
  }
`;

export const List = styled.ul`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    margin: -10px;
  }
`;
