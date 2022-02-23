import PropTypes from 'prop-types';
import styles from './contactsList.module.css';

function ContactsList({ contacts, onDeleteContact }) {
  const element = contacts.map(contact => (
    <li className={styles.item} key={contact.id}>
      <p className={styles.info}>
        {contact.name}: {contact.number}
      </p>
      <button
        className={styles.btn}
        type="button"
        onClick={() => onDeleteContact(contact.id)}
      >
        Delete
      </button>
    </li>
  ));
  return <ul className={styles.list}>{element}</ul>;
}

export default ContactsList;

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
