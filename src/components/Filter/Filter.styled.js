import styled from '@emotion/styled';

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin-bottom: 50px;
`;

export const Text = styled.p`
  font-weight: 700;
  font-size: 25px;
  font-family: monospace;
  color: rgb(2, 100, 100);
  margin-bottom: 5px;
`;

export const Input = styled.input`
  width: 70%;
  height: 40px;
  padding: 0 10px 0 10px;

  border: 1px solid var(--second-bg-color);
  outline: none;

  color: var(--main-text-color);
  font-size: 14px;

  :focus {
    border-color: var(--accent-bg-color);
  }
  ::placeholder {
    font-size: 12px;
    color: black;
  }
`;