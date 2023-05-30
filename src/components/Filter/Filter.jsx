import React from 'react';
import PropTypes from 'prop-types';
import styles from './Filter.module.jsx';

const Filter = ({ value, onChangeFilter }) => {
  return (
    <div>
      Find contacts by name
      <input
        type="text"
        value={value}
        onChange={e => onChangeFilter(e.target.value)}
        className={styles.input}
      />
    </div>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChangeFilter: PropTypes.func.isRequired,
};

export default Filter;
