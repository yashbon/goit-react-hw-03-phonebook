import { Component } from 'react';
import { ContactForm } from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import { customAlphabet } from 'nanoid';
import Filter from './Filter/Filter';

const nanoid = customAlphabet('1234567890', 2);

export class App extends Component {
    state = {
        contacts: [
            { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
            { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
            { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
            { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
        ],
        filter: '',
    };

    handleSubmitForm = contact => {
        if (this.state.contacts.find(item => item.name === contact.name)) {
            alert(`${contact.name} is already in contacts`);
        } else {
            const newContact = {
                id: 'id-' + nanoid(),
                name: contact.name,
                number: contact.number,
            };

            this.setState(({ contacts }) => ({
                contacts: [newContact, ...contacts],
            }));
        }
    };

    changeFilter = event => {
        this.setState({ filter: event.currentTarget.value });
    };

    // deleteContact = id => {
    //     this.setState(PrevState => ({
    //         contacts: PrevState.contacts.filter(contact => contact.id !== id),
    //     }));
    // };

    // filteredContacts = () => {
    //     this.state.contacts.filter(contact =>
    //         contact.name.includes(this.state.filter))
    // };
    filteredContacts = () => {
        this.state.contacts.filter(contact =>
            contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
        );
    };

    render() {
        const filteredContacts = this.state.contacts.filter(contact =>
            contact.name.toLowerCase().includes(this.state.filter.toLowerCase())
        );
        return (
            <div
                style={{
                    height: '100vh',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                    // fontSize: 40,
                    color: '#010101',
                }}
            >
                <h1>Phonebook</h1>
                <ContactForm submitForm={this.handleSubmitForm} />
                <h2>Contacts</h2>
                <Filter
                    title="Find contasts by name"
                    value={this.state.filter}
                    onChange={this.changeFilter}
                />
                <ContactList
                    contacts={filteredContacts}
                    deleteContact={this.deleteContact}
                />
            </div>
        );
    }
}
