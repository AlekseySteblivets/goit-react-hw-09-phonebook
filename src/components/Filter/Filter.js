import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
// import styles from './Filter.module.css';
// import PropTypes from 'prop-types';
import { getFilter, changeFilter } from '../../redux/phonebooks';

export default function Filter() {
    const dispatch = useDispatch();
    const value = useSelector(getFilter);
    const оnChange = e => dispatch(changeFilter(e.currentTarget.value));
    return (
        <label>
            FInd contacts by name
            <input
                type="text"
                value={value}
                onChange={оnChange}
            />
        </label>
    )
};

// Filter.propTypes = {
//     value: PropTypes.string.isRequired,
// }
