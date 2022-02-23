import { memo } from 'react';
import PropTypes from 'prop-types';
import styles from './filter.module.css';

const Filter = ({ value, handleChange }) => {
  return (
    <div className="formGroup">
      <label className={styles.label}>Find contacts by name</label>
      <input
        value={value}
        name="filter"
        onChange={handleChange}
        type="text"
        className={styles.input}
        placeholder="Поиск контактов по имени"
      />
    </div>
  );
};

export default memo(Filter);

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
