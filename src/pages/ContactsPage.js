import Container from 'components/Container/Container';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';
import Message from 'components/Message';
import { useGetContactsQuery } from 'redux/contact-API';

function ContactsPage() {
  const { data } = useGetContactsQuery();

  return (
    <Container>
      <Filter />
      {!data || data.length === 0 ? <Message /> : <ContactList />}
    </Container>
  );
}

export default ContactsPage;
