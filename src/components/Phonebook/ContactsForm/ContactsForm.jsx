import { useState } from 'react';
import PropTypes from 'prop-types';
import { initialState } from './initialState';
import styles from './contactsForm.module.css';

const ContactsForm = ({ onSubmit }) => {
  const [contact, setContact] = useState({ ...initialState });

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setContact({
      ...contact,
      [name]: value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(contact);
    setContact({ ...initialState });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className="form-group">
        <label className={styles.label}>Name</label>
        <input
          className={styles.input}
          type="text"
          name="name"
          value={contact.name}
          onChange={handleChange}
          placeholder="Введите ваше имя"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </div>
      <div className="form-group">
        <label className={styles.label}>Number</label>
        <input
          className={styles.input}
          type="tel"
          name="number"
          value={contact.number}
          onChange={handleChange}
          placeholder="Введите ваш номер телефона"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </div>
      <div className="form-group">
        <label className={styles.label}></label>
        <button type="submit" className={styles.btn}>
          Add contact
        </button>
      </div>
    </form>
  );
};

export default ContactsForm;

ContactsForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
