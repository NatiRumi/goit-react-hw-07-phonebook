import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
  },
  reducers: {
    addContact(state, action) {
      const searchArray = state.contacts.filter(
        contact => contact.name.toLowerCase() === action.payload.name
      );
      if (searchArray.length !== 0) {
        alert(`${action.payload.name} is already in contacts`);
        return;
      } else {
        state.contacts.push({
          id: nanoid(),
          name: action.payload.name,
          number: action.payload.number,
        });
      }
    },

    filterContact(state, action) {
      state.contacts = state.contacts.filter(contact =>
        contact.name.toLowerCase().includes(action.payload)
      );
    },

    removeContact(state, action) {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload.id
      );
    },
  },
});

const persistConfig = {
  key: 'contact',
  storage,
};

export const storageReducer = persistReducer(
  persistConfig,
  contactSlice.reducer
);

export const { addContact, filterContact, removeContact } =
  contactSlice.actions;
export default contactSlice.reducer;

// Selectors
export const getContacts = state => state.contacts.contacts;
