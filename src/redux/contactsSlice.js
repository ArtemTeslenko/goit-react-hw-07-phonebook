import { createSlice } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: { items: [], isLoading: false, error: null },
  reducers: {
    // addContact: (state, action) => {
    //   state.items.push(action.payload);
    // },
    // removeContact: (state, action) => {
    //   state.items = state.items.filter(({ id }) => id !== action.payload);
    // },
    fetchingInProgress(state) {
      state.isLoading = true;
    },
    fetchingSuccess(state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    fetchingError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});
// export const { addContact, removeContact } = contactsSlice.actions;
export const { fetchingInProgress, fetchingSuccess, fetchingError } =
  contactsSlice.actions;

const persistConfig = {
  key: 'contacts',
  storage,
};

export const persistedContactsReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);
