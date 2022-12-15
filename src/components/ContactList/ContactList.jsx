import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import { fetchContacts, deleteContact } from 'redux/operations';
import { selectContacts, selectError, selectIsLoading } from 'redux/selectors';
import {
  ContactItem,
  ContactItemWrapper,
  DeleteBtn,
  List,
} from './ContactList.styled';

export default function ContactList() {
  const dispatch = useDispatch();
  const items = useSelector(selectContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      {isLoading && <p>Loading contacts...</p>}
      {error && <p>{error}</p>}
      <List>
        {items.length > 0
          ? items.map(item => {
              const { id, name, phone } = item;
              return (
                <ContactItem key={id}>
                  <ContactItemWrapper>
                    {name}: {phone}
                    <DeleteBtn
                      type="button"
                      onClick={() => dispatch(deleteContact(id))}
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
