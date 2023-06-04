import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContacts } from 'redux/Slice';
import css from '../ContactsList/ContactsList.module.css';

const ContactItem = ({ name, number, id }) => {
  const dispatch = useDispatch();

  return (
    <li className={css.listItem}>
      <p>
        {name}: {number}
      </p>
      <button
        onClick={() => dispatch(deleteContacts( id ))}
        className={css.btnDelete}
      >
        Delete
      </button>
    </li>
  );
};

export default ContactItem;

ContactItem.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
  id: PropTypes.string,
};
