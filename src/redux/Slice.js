import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchContacts',
  async function (_, { rejectWithValue }) {
    try {
      const responce = await axios.get(
        'https://6479da19a455e257fa63e723.mockapi.io/contacts'
      );

      if (responce.status !== 200) {
        throw new Error('Status error');
      }
      return responce.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteContacts = createAsyncThunk(
  'contacts/deleteContacts',
  async function (id, { rejectWithValue, dispatch }) {
    try {
      const responce = await axios.delete(
        `https://6479da19a455e257fa63e723.mockapi.io/contacts/${id}`
      );

      if (responce.status !== 200) {
        throw new Error('Can not delete contact. Server error');
      }
      dispatch(removeContact({ id }));
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addNewContact = createAsyncThunk(
  'contacts/addContacts',
  async function (contact, { rejectWithValue, dispatch, getState }) {
    try {
      const item = {
        name: contact.name,
        phone: contact.number,
      };

      const currentState = getState();
      const searchArray = currentState.contacts.contacts.filter(
        contact => contact.name.toLowerCase() === item.name
      );

      if (searchArray.length !== 0) {
        alert(`${item.name} is already in contacts`);
        return;
      } else {
        const responce = await axios.post(
          `https://6479da19a455e257fa63e723.mockapi.io/contacts`,
          item
        );
        if (responce.statusText !== 'Created') {
          throw new Error('Can not add contact. Server error');
        }
        dispatch(addContact(responce.data));
      }
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const setError = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    addContact(state, action) {
      state.contacts.push(action.payload);
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

  extraReducers: {
    [fetchContacts.pending]: state => {
      state.isLoading = true;
      state.error = null;
    },

    [fetchContacts.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.contacts = action.payload;
    },

    [fetchContacts.rejected]: setError,
    [deleteContacts.rejected]: setError,
    [addNewContact.rejected]: setError,
  },
});

export const { addContact, filterContact, removeContact } =
  contactSlice.actions;
export default contactSlice.reducer;

// Selectors
export const getContacts = state => state.contacts.contacts;
