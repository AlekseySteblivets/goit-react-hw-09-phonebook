import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';

const styles = {
    container: {
        display: 'flex',
        alignItems: 'center',
    },
    avatar: {
        marginRight: 4,
    },
    name: {
        fontWeight: 700,
        marginRight: 12,
    },
};

export default function UserMenu() {
    const dispatch = useDispatch();
    const name = useSelector(authSelectors.getUserName);
    const onLogout = useCallback(() => { dispatch(authOperations.logout()); }, [dispatch]);

    return (
        <div style={styles.container}>
            <img src="" alt="" width="32" style={styles.avatar} />
            <span style={styles.name}>Welcome, {name}</span>
            <button type="button" onClick={onLogout}>Выйти</button>
        </div>
    )
}


// const mapStateToProps = state => ({
//     name: authSelectors.getUserName(state),
//     // avatar:
// });

// const mapDispatchToProps = {
//     onLogout: authOperations.logout,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);