import { useSelector } from 'react-redux';
import { getFilter } from 'redux/contact-selectors';
import { Item, List } from './ContactList.styled';
import { useGetContactsQuery } from 'redux/contact-API';
import Contact from 'components/Contact/Contact';
import Loader from 'components/Loader/Loader';
import NotFound from 'components/NotFound/NotFound';

function ContactList() {
  const { data: contacts, isFetching, error } = useGetContactsQuery();
  const { filter } = useSelector(state => getFilter(state));

  const filtredContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return (
      contacts &&
      contacts.filter(contact =>
        contact.name.toLowerCase().includes(normalizedFilter)
      )
    );
  };

  const filtredContactList = filtredContacts();

  return (
    <List>
      {isFetching && <Loader />}
      {error && <NotFound data={error.data} status={error.status} />}
      {contacts &&
        filtredContactList.map(({ id, name, phone }) => {
          return (
            <Item key={id}>
              <Contact id={id} name={name} phone={phone} />
            </Item>
          );
        })}
    </List>
  );
}

export default ContactList;
