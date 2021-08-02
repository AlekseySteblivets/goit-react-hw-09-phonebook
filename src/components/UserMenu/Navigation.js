import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { authSelectors } from '../../redux/auth';

const styles = {
    link: {
        display: 'inline-block',
        textDecoration: 'none',
        padding: 12,
        fontWeight: 700,
        color: '#2A363B',
    },
    activeLink: {
        color: '#E84A5F',
    },
};

export default function Navigation() {

    const isLoggedIn = useSelector(authSelectors.getIsAuthenticated);

    return (
        <div>
            <NavLink to="/" exact style={styles.link} activeStyle={styles.activeLink}> Главная</NavLink>
            {isLoggedIn && (
                <NavLink to="/contacts" style={styles.link} activeStyle={styles.activeLink}> Заметки
                </NavLink>)}

        </div>
    )
}

// const mapStateToProps = state => ({
//     isAuthenticated: authSelectors.getIsAuthenticated(state),
// })
// export default connect(mapStateToProps)(Navigation);