import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getIsloadingContacts, fetchContact } from '../redux/phonebooks';
import ContactForm from '../components/ContactForm';
import Filter from '../components/Filter';
import ContactList from '../components/ContactList';


export default function Contacts() {
    const dispatch = useDispatch();
    const isloadingContacts = useSelector(getIsloadingContacts);
    useEffect(() => { dispatch(fetchContact()) }, [dispatch]);

    return (
        <div>
            <h1>Phonebook</h1>
            <ContactForm />

            <h2>Contacts</h2>
            <Filter />
            {isloadingContacts && <h1>loading...</h1>}
            <ContactList />

        </div>
    )
}
