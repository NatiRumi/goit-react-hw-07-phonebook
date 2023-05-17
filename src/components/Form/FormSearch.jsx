import React from 'react';
import PropTypes from 'prop-types';
import css from './Form.module.css';

const FormSearch = ({ onChange }) => {
  return (
    <label className={css.formSearch}>
      Find contacts by name
      <input
        type="text"
        name="filter"
        onChange={e => onChange(e.currentTarget.value)}
        className={css.inputFormSearch}
      />
    </label>
  );
};

export default FormSearch;

FormSearch.propTypes = {
  onChange: PropTypes.func,
};
