import { createSelector } from '@reduxjs/toolkit';

export const selectPrimaryContacts = state => {
  return state.contacts;
};

export const selectFilter = state => state.filter;

export const selectContacts = state => {
  const filteredValue = selectFilter(state);
  return state.contacts.items.filter(item =>
    item.name.toLowerCase().includes(filteredValue)
  );
};

export const selectIsLoading = createSelector(
  [selectPrimaryContacts],
  contacts => {
    return contacts.isLoading;
  }
);

export const selectError = createSelector([selectPrimaryContacts], contacts => {
  return contacts.error;
});
