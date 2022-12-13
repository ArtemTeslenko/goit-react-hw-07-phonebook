import { useDispatch, useSelector } from 'react-redux';
import { removeContact } from 'redux/contactsSlice';
import React from 'react';
import {
  ContactItem,
  ContactItemWrapper,
  DeleteBtn,
  List,
} from './ContactList.styled';

export default function ContactList() {
  const contacts = useSelector(state => state.contacts.items);
  const filteredValue = useSelector(state => state.filter);
  const dispatch = useDispatch();

  return (
    <List>
      {contacts.length > 0
        ? contacts
            .filter(item => item.name.toLowerCase().includes(filteredValue))
            .map(item => {
              const { id, name, number } = item;
              return (
                <ContactItem key={id}>
                  <ContactItemWrapper>
                    {name}: {number}
                    <DeleteBtn
                      type="button"
                      onClick={() => dispatch(removeContact(id))}
                    >
                      Delete
                    </DeleteBtn>
                  </ContactItemWrapper>
                </ContactItem>
              );
            })
        : null}
    </List>
  );
}
