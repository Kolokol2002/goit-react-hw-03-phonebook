import styled from 'styled-components';

const ContactsUserList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
`;

const ContactsUser = styled.li`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

const ContactsUserName = styled.span`
  width: fit-content;
`;
const ContactsButtonDelite = styled.button`
  margin-left: auto;
`;

export {
  ContactsUserList,
  ContactsUser,
  ContactsUserName,
  ContactsButtonDelite,
};
