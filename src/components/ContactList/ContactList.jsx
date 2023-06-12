const ContactList = props => {
    // console.log(props);
    const { contacts, deleteContact } = props;
    return (
        <div>
            <ul>
                {contacts.map(contact => (
                    <li key={contact.id}>
                        {contact.name} {contact.number}
                        <button
                            type="button"
                            onClick={() => deleteContact(contact.id)}
                        >
                            delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ContactList;
