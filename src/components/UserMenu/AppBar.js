import React from 'react';
import { useSelector } from 'react-redux';
import Navigation from './Navigation';
import AuthNav from './AuthNav';
import UserMenu from './UserMenu';
import { authSelectors } from '../../redux/auth';



const styles = {
    header: {
        display: 'flex',
        justifyContent: 'space-between',
        alingItems: 'center',
        borderBotton: '1px, solid #2A363B',
    },
}

export default function AppBar() {
    const isLoggedIn = useSelector(authSelectors.getIsAuthenticated);

    return (
        <header style={styles.header} >
            <Navigation />
            {isLoggedIn ? <UserMenu /> : <AuthNav />}
        </header>
    )
}



// const mapStateToProps = state => ({
//     isAuthenticated: authSelectors.getIsAuthenticated(state),

// });

// export default connect(mapStateToProps)(AppBar);
