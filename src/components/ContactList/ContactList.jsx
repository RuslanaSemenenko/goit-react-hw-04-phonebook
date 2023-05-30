import React from 'react';
import PropTypes from 'prop-types';
import {
  TaskList,
  TaskListItem,
  TaskListButton
} from './ContactList.module.jsx';

const ContactList = ({ contacts, onRemoveContact }) => (
  <TaskList>
    {contacts.map(contact => (
      <TaskListItem key={contact.id}>
        {contact.name + ':' + contact.number}
        <TaskListButton
          type="button"
          name="delete"
          onClick={() => onRemoveContact(contact.id)}
        >
          delete
        </TaskListButton>
      </TaskListItem>
    ))}
  </TaskList>
);

ContactList.propTypes = {
  onRemoveContact: PropTypes.func.isRequired,
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ContactList;
