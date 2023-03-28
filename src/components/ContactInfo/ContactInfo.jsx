import { FaArrowLeft } from 'react-icons/fa';
import { Route, Routes, useNavigate, useParams } from 'react-router-dom';
import Loader from 'components/Loader/Loader';
import NotFound from 'components/NotFound/NotFound';
import Modal from 'components/Modal';
import useShowModal from 'hooks/useShowModal';
import DeletingContact from 'components/DeletingContact/DeletingContact';
import { useGetContactByidQuery } from 'redux/contact-API';
import {
  GoBack,
  Label,
  Name,
  PersonalData,
  Phone,
  Wrapper,
} from './ContactInfo.styled';
import ChangeContactPage from 'pages/ChangeContactPage';

function ContactInfo() {
  const { showModal, togleModal } = useShowModal(false);

  const navigate = useNavigate();
  const { contactId } = useParams();

  const {
    data: contact,
    isFetching,
    error,
  } = useGetContactByidQuery(contactId);

  return (
    <>
      {showModal && (
        <Modal onClose={togleModal} title={contact.name}>
          <DeletingContact
            id={contactId}
            name={contact.name}
            togleModal={togleModal}
          />
        </Modal>
      )}
      {isFetching && <Loader />}
      {error && <NotFound data={error.data} status={error.status} />}
      {contact && (
        <Wrapper>
          <GoBack type="button" onClick={() => navigate('/')}>
            <FaArrowLeft />
          </GoBack>
          <PersonalData>
            <Name>{contact.name}</Name>
            <Phone>
              <Label>Phone: </Label>
              {contact.phone}
            </Phone>
          </PersonalData>
        </Wrapper>
      )}

      <Routes>
        <Route path="edit" element={<ChangeContactPage />} />
      </Routes>
    </>
  );
}

export default ContactInfo;
