import React, { Suspense, lazy, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { Switch } from "react-router-dom";
import AppBar from './components/UserMenu/AppBar';
import { authOperations } from './redux/auth';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute/PublicRoute';

const HomeView = lazy(() => import('./views/HomeView'));
const RegisterView = lazy(() => import('./views/RegisterView'));
const LoginView = lazy(() => import('./views/LoginView'));
const Contacts = lazy(() => import('./views/Contacts'));


export default function App() {
  // state = {
  // }

  const dispatch = useDispatch();
  useEffect(() => {
    console.log(dispatch);
    dispatch(authOperations.getCurrentUser());
  }, [dispatch]);

  return (
    <div>
      <AppBar />

      <Suspense fallback={<p>Loading page...</p>}>
        <Switch>
          <PublicRoute exact path="/">
            <HomeView />
          </PublicRoute>
          <PublicRoute
            path="/register"
            restricted
            redirectTo="/contacts">
            <RegisterView />
          </PublicRoute>
          <PublicRoute
            path="/login"
            restricted
            redirectTo="/contacts">
            <LoginView />
          </PublicRoute>
          <PrivateRoute
            path="/contacts"
            redirectTo="/login">
            <Contacts />
          </PrivateRoute>
        </Switch>
      </Suspense>


    </div>
  )
}




// const mapDispatchToProps = {
//   onGetCurrentUser: authOperations.getCurrentUser
// }

// export default connect(null, mapDispatchToProps)(App);




