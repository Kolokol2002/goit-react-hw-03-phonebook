import {
  ContactsUserList,
  ContactsUser,
  ContactsUserName,
  ContactsButtonDelite,
} from './Contacts.styled';
import PropTypes from 'prop-types';

function Contacts({ usersArray, onDelete }) {
  return (
    <ContactsUserList>
      {usersArray.map(({ name, number, id }) => (
        <ContactsUser key={id}>
          <ContactsUserName>
            {name}: {number}
          </ContactsUserName>

          <ContactsButtonDelite
            data-user-name={name}
            onClick={onDelete}
            type="button"
          >
            Delite
          </ContactsButtonDelite>
        </ContactsUser>
      ))}
    </ContactsUserList>
  );
}

Contacts.propTypes = {
  usersArray: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ),
  onDelete: PropTypes.func.isRequired,
};

export default Contacts;
