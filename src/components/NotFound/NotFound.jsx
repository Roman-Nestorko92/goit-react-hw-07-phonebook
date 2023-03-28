import propTypes from 'prop-types';
import { StyledLink, Text, Title, Wrapper } from './NotFound.styled';

function NotFound({ data, status }) {
  return (
    <Wrapper>
      <Title>
        `Sorry ${status} ${data} bad`
      </Title>
      <Text>Try loading the page.</Text>
      <StyledLink to="/">Go back to the main page</StyledLink>
    </Wrapper>
  );
}

NotFound.prototype = {
  data: propTypes.string,
  status: propTypes.number,
};

export default NotFound;
