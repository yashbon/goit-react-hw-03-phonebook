import { Component } from 'react';
import css from './ContactForm.module.css';
// import { customAlphabet } from 'nanoid';

// const nanoid = customAlphabet('1234567890', 1);

export class ContactForm extends Component {
    state = {
        id: '',
        name: '',
        number: '',
    };

    handleChange = event => {
        this.setState({
            [event.currentTarget.name]: event.currentTarget.value,
        });
    };

    handleSubmit = event => {
        event.preventDefault();
        // console.log(this.state);
        const newContact = {
            // id: 'id-' + nanoid(),
            name: this.state.name,
            number: this.state.number,
        };
        // console.log(newContact);
        this.props.submitForm(newContact);
        this.resetFrom();
    };

    resetFrom = () => {
        this.setState({ name: '', number: '' });
    };

    render() {
        return (
            <form
                className={css.form}
                // style={
                //     {
                //         // width: '300px',
                //         // height: '100vh',
                //         // display: 'flex',
                //         // flexDirection: 'column',
                //         // border: '1px solid gray',
                //     }
                // }
                action=""
                onSubmit={this.handleSubmit}
            >
                <label className={css.label} htmlFor="">
                    Name
                    <br />
                    <input
                        className={css.input}
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                        value={this.state.name}
                        onChange={this.handleChange}
                    />
                </label>
                <label className={css.label} htmlFor="">
                    Number
                    <br />
                    <input
                        className={css.input}
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                        value={this.state.number}
                        onChange={this.handleChange}
                    />
                </label>
                <button className={css.form_button} type="submit">
                    Add contact
                </button>
            </form>
        );
    }
}
