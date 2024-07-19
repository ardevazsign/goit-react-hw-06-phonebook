import { ContactListItem } from 'components/ContactListItem/ContactListItem';
// import PropTypes from 'prop-types';
import css from './ContactList.module.css';
import { useSelector } from 'react-redux';
import { getContacts, getFilter } from '../../redux/selectors';


const getFilteredContacts = (contacts, filter) => {
  return contacts.filter(contact => 
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
};

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);


  const filteredContacts = getFilteredContacts(contacts, filter);

  return (
    <ul className={css.contactList}>
      {filteredContacts.map(filteredContact => (
        <ContactListItem
          key={filteredContact.id}
          filteredContact={filteredContact}
          // deleteContact={deleteContact}
        />
      ))}
    </ul>
  );
};

// ContactList.propTypes = {
//   filterContact: PropTypes.func.isRequired,
//   deleteContact: PropTypes.func.isRequired,
// };