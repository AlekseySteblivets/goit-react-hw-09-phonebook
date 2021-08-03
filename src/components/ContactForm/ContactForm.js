import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import styles from './ContactForm.module.css';
import { v4 as uuidv4 } from 'uuid';
import { getItems, addContact } from '../../redux/phonebooks';

export default function ContactForm() {
    const inputId = uuidv4();
    // state = {
    //     name: '',
    //     number: '',

    // };
    const [name, setName] = useState('');
    const [number, setNumber] = useState('');
    const dispatch = useDispatch();
    const contacts = useSelector(getItems);


    const handleInputChange = evt => {
        console.log(evt.currentTarget.value);
        const name = evt.currentTarget.value;
        setName(name);
        // setNumber({ [name]: value });
    };
    const handleInputChangeNumber = evt => {

        const number = evt.currentTarget.value;
        setNumber(number);
        // setNumber({ [name]: value });
    };

    const handleSubmit = evt => {
        evt.preventDefault();
        const findContact = contacts.find(contact => contact.name === name && contact.number === number);

        if (findContact) {
            alert(`${name} is already in contacts!`);
            reset();
            return;
        }
        dispatch(addContact(name, number))
        // this.props.addContact(name, number);
        reset();
    }
    const reset = () => {
        setName('');
        setNumber('');

    };

    return (

        <div className={styles.container}>
            <form onSubmit={handleSubmit} className={styles.form}>
                <label htmlFor={inputId} className={styles.label}>

                    Name:

                    <input
                        className="Container-form__input"
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                        required
                        value={name}
                        onChange={handleInputChange}
                        id={inputId}
                    />
                </label>
                <label className={styles.label}>
                    Number:
                    <input
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                        value={number}
                        onChange={handleInputChangeNumber}
                        required
                    />
                </label>

                <button type="submit" className="Container-form__btn">Add Contact</button>
            </form>
        </div>
    )
};


// const mapStateToProps = state => ({
//     contacts: getItems(state),
// });
// const mapDispatchToProps = dispatch => ({
//     addContact: (name, number) => dispatch(addContact(name, number)),

// })

// export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);



// const handleInputChange = evt => {
//     console.log(evt.currentTarget.value);
//     const { name, value } = evt.currentTarget;
//     setName({ [name]: value });
//     // setNumber({ [name]: value });
// };