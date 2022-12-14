import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { addContact } from 'redux/contactsSlice';
// import { nanoid } from '@reduxjs/toolkit';
import { getContacts } from 'redux/selectors';
import { addContact } from 'redux/operations';
import {
  FormInput,
  Form,
  FormLabel,
  AddContactBtn,
} from './ContactForm.styled';

function ContactForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const { items } = useSelector(getContacts);
  const dispatch = useDispatch();
  // const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    if (items.length > 0 && items.find(item => item.name === name)) {
      alert('The contact is already in your phonebook.');
      setName('');
      setPhone('');
      return;
    }
    // const id = nanoid();
    // const createdAt = new Date();
    dispatch(addContact({ name, phone }));
    // dispatch(addContact({ id, name, number }));

    setName('');
    setPhone('');
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
        value={phone}
        onChange={e => setPhone(e.target.value)}
      />
      <AddContactBtn type="submit">Add contact</AddContactBtn>
    </Form>
  );
}

export default ContactForm;
