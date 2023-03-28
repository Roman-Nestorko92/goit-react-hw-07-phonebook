import { ErrorMessage, Form, Formik } from 'formik';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { useParams, useNavigate } from 'react-router-dom';
import {
  useChangeContactMutation,
  useGetContactByidQuery,
} from 'redux/contact-API';
import {
  Button,
  Label,
  MainTitle,
  StyledField,
  Title,
} from './ChangeContactForm.styled';

function ChangeContactForm() {
  const { contactId } = useParams();
  const navigate = useNavigate();

  const [changeContact, { isLoading: isUpdating }] = useChangeContactMutation();
  const { data: contact } = useGetContactByidQuery(contactId);

  const onSubmitForm = values => {
    if (JSON.stringify(values) === JSON.stringify(initialValues)) {
      Notify.warning('Try contact has been successfully changed.');
      return;
    }

    changeContact({ contactId, ...values });
    navigate(`/contacts/${contactId}`);
    Notify.success('The contact has been successfully changed.');
  };

  let initialValues = null;
  if (contact) {
    initialValues = {
      name: contact.name,
      phone: contact.phone,
    };
  }

  return (
    contact && (
      <Formik initialValues={initialValues} onSubmit={onSubmitForm}>
        {({ values, handleChange, handleSubmit }) => (
          <>
            <MainTitle>{`Edit contact ${contact.name}`}</MainTitle>
            <Form onSubmit={handleSubmit}>
              <Label>
                <Title>Name</Title>
                <StyledField
                  type="text"
                  name="name"
                  onChange={handleChange}
                  value={values.name}
                />
                <ErrorMessage name="name" component="div" />
              </Label>
              <Label>
                <Title>Phone</Title>
                <StyledField
                  type="tel"
                  name="phone"
                  onChange={handleChange}
                  value={values.phone}
                />
                <ErrorMessage name="phone" component="div" />
              </Label>
              <Button type="submit">
                {isUpdating ? '...' : 'Change contact'}
              </Button>
            </Form>
          </>
        )}
      </Formik>
    )
  );
}

export default ChangeContactForm;
