import { useDeleteContactMutation } from 'redux/contact-API';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { useNavigate } from 'react-router-dom';
import propTypes from 'prop-types';
import {
  Text,
  Name,
  List,
  Item,
  ButtonCancel,
  ButtonDelete,
} from './DeletingContact.styled';

function DeletingContact({ id, name, togleModal }) {
  const navigate = useNavigate();
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();

  const deleteSelectedContact = () => {
    deleteContact(id);
    navigate('/');
    Notify.success(`The ${name} has been removed from your contact list.`);
  };

  return (
    <>
      <Text>
        Are you sure you want to delete a contact <Name>{name}</Name>?
      </Text>
      <List>
        <Item>
          <ButtonCancel type="button" onClick={togleModal}>
            Cancel
          </ButtonCancel>
        </Item>
        <Item>
          <ButtonDelete type="button" onClick={deleteSelectedContact}>
            {isDeleting ? '...' : 'Delete'}
          </ButtonDelete>
        </Item>
      </List>
    </>
  );
}

DeletingContact.prototype = {
  id: propTypes.string.isRequired,
  name: propTypes.string.isRequired,
  togleModal: propTypes.func.isRequired,
};

export default DeletingContact;
