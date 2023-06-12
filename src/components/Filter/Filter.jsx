const Filter = props => {
    const title = props.title;
    return (
        <label>
            {title} <br />
            <input
                type="text"
                name="name"
                pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                // required
                // value={this.state.name}
                onChange={props.onChange}
            />
        </label>
    );
};

export default Filter;
