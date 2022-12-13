import { useState } from 'react';
import { useSelector } from 'react-redux';
// import { addContact } from 'redux/contactsSlice';
// import { nanoid } from '@reduxjs/toolkit';
import { getContacts } from 'redux/selectors';
import {
  FormInput,
  Form,
  FormLabel,
  AddContactBtn,
} from './ContactForm.styled';

function ContactForm() {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const { items } = useSelector(getContacts);
  // const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    // const id = nanoid();

    if (items.length > 0 && items.find(item => item.name === name)) {
      alert('The contact is already in your phonebook.');
      setName('');
      setNumber('');
      return;
    }

    // dispatch(addContact({ id, name, number }));

    setName('');
    setNumber('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormLabel>Name</FormLabel>
      <FormInput
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        value={name}
        onChange={e => setName(e.target.value)}
      />
      <FormLabel />
      <FormInput
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        value={number}
        onChange={e => setNumber(e.target.value)}
      />
      <AddContactBtn type="submit">Add contact</AddContactBtn>
    </Form>
  );
}

export default ContactForm;
