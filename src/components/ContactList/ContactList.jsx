import { useDispatch, useSelector } from 'react-redux';
// import { removeContact } from 'redux/contactsSlice';
import React, { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';
import { getContacts } from 'redux/selectors';
import {
  ContactItem,
  ContactItemWrapper,
  DeleteBtn,
  List,
} from './ContactList.styled';

export default function ContactList() {
  // const contacts = useSelector(state => state.contacts.items);
  const filteredValue = useSelector(state => state.filter);
  const dispatch = useDispatch();
  const { items, isLoading, error } = useSelector(getContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      {isLoading && <p>Loading contacts...</p>}
      {error && <p>{error}</p>}
      <List>
        {items.length > 0
          ? items
              .filter(item => item.name.toLowerCase().includes(filteredValue))
              .map(item => {
                const { id, name, number } = item;
                return (
                  <ContactItem key={id}>
                    <ContactItemWrapper>
                      {name}: {number}
                      <DeleteBtn
                        type="button"
                        // onClick={() => dispatch(removeContact(id))}
                      >
                        Delete
                      </DeleteBtn>
                    </ContactItemWrapper>
                  </ContactItem>
                );
              })
          : null}
      </List>
    </>
  );
}
