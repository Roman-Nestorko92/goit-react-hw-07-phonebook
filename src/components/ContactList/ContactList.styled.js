import styled from '@emotion/styled';

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 15px;

  .item:last-child {
    margin-bottom: 0;
  }
`;
