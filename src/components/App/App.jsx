import { Component } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Phonebook from '../Phonebook';
import Contacts from '../Contacts';
import Title from '../Title';
import Filter from '../Filter';
import { MainContainer } from './App.styled';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const contacts = JSON.parse(localStorage.getItem('contacts'));

    contacts
      ? this.setState({ contacts })
      : localStorage.setItem('contacts', JSON.stringify([]));
  }

  componentDidUpdate(_, prevState) {
    if (prevState.contacts.length > this.state.contacts.length) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    } else if (prevState.contacts.length < this.state.contacts.length) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  getContacts = async userData => {
    let isResetForm = true;

    await this.setState(({ contacts }) => {
      const isEmptyName = contacts.filter(
        ({ name }) => name.toLowerCase() === userData.name.toLowerCase()
      ).length;

      const isEmptyNumber = contacts.filter(
        ({ number }) => number === userData.number
      ).length;

      if (!isEmptyName && !isEmptyNumber) {
        toast.success(`${userData.name}, success add!`, {
          hideProgressBar: true,
          autoClose: 2000,
          theme: 'dark',
        });
        return { contacts: [...contacts, userData] };
      }

      if (isEmptyName || isEmptyNumber) {
        toast.warn(
          `${
            (isEmptyName && userData.name) || (isEmptyNumber && userData.number)
          }, already exist in phonebook!!!`,
          {
            hideProgressBar: true,
            autoClose: 2000,
            theme: 'dark',
          }
        );

        isResetForm = false;
      }
    });

    return await isResetForm;
  };

  handleFilter = ({ target }) => {
    this.setState({ filter: target.value });
  };

  filterChange = () => {
    const { contacts, filter } = this.state;
    return contacts.filter(
      item =>
        item.name.toLowerCase().includes(filter.toLowerCase()) ||
        item.number.toLowerCase().includes(filter.toLowerCase())
    );
  };

  onDelete = ({ target }) => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(item => item.name !== target.dataset.userName),
    }));
  };

  render() {
    const { contacts, filter } = this.state;

    return (
      <MainContainer>
        <Title title={'Phonebook'}>
          <Phonebook getContacts={this.getContacts} />
        </Title>

        {contacts.length !== 0 && (
          <Title title={'Contacts'}>
            <Filter handleFilter={this.handleFilter} />
            <Contacts
              usersArray={filter !== '' ? this.filterChange() : contacts}
              onDelete={this.onDelete}
            />
          </Title>
        )}
      </MainContainer>
    );
  }
}

export default App;
