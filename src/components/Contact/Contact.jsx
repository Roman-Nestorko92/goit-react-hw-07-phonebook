import DeletingContact from 'components/DeletingContact/DeletingContact';
import Modal from 'components/Modal';
import useShowModal from 'hooks/useShowModal';
import PropTypes from 'prop-types';
import { FaTrash, FaUserEdit } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import {
  Button,
  ButtonWrapper,
  Label,
  Name,
  Number,
  PersonalData,
  StyledLink,
  Wrapper,
} from './Contact.styled';

function Contact({ id, name, phone }) {
  const { showModal, togleModal } = useShowModal(false);

  const navigate = useNavigate();
  const openEditPage = () => navigate(`/contacts/${id}/edit`);

  return (
    <>
      {showModal && (
        <Modal onClose={togleModal} title={name}>
          <DeletingContact id={id} name={name} togleModal={togleModal} />
        </Modal>
      )}

      <Wrapper>
        <StyledLink to={`/contacts/${id}`}>
          <PersonalData>
            <Name>{name}</Name>
            <Number>
              <Label>Phone:</Label>
              {phone}
            </Number>
          </PersonalData>
        </StyledLink>
        <ButtonWrapper>
          <Button type="button" onClick={togleModal}>
            <FaTrash />
          </Button>
          <Button type="button" onClick={openEditPage}>
            <FaUserEdit />
          </Button>
        </ButtonWrapper>
      </Wrapper>
    </>
  );
}

Contact.prototype = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default Contact;
