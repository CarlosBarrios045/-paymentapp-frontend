import React, { useState, useEffect, useContext, Suspense } from 'react';
import { Router } from '@reach/router';
import { useMutation } from '@apollo/client';

// Layout
import Loader from './components/Atoms/Loader';
import Container from './components/Atoms/Container';
import Navbar from './components/Molecules/Navbar';

// Pages
import Disconnect from './pages/Disconnect';
import NotFound from './pages/NotFound';

// Styles
import { ThemeProvider } from 'styled-components';
import theme from './theme';
import GlobalResets from './theme/globalResets';

// Context
import ContextAuth from './context/contextAuth';

// API Graphql
import { GET_USER_LOGGED } from './data/constants';

// Routes
import { Route, routes } from './routes';

// Config Dayjs
import dayjs from 'dayjs';
import 'dayjs/locale/es';
dayjs.locale('es');

const App = () => {
  const [isVerifyToken, setIsVerifyToken] = useState(true);
  const [openPageOffline, setOpenPageOffline] = useState(false);

  // Verify user with token
  const [getUserLogged, { loading, client }] = useMutation(GET_USER_LOGGED, {
    pollInterval: 15 * 60 * 1000,
  });

  const {
    signIn,
    userAuthenticated: { isAuthenticated, user },
  } = useContext(ContextAuth);

  const getUser = async () => {
    try {
      const { data } = await getUserLogged();
      if (data && data.getUserLogged) signIn(data.getUserLogged);
    } catch (error) {
      console.log(error);
    }
    setIsVerifyToken(false);
  };

  useEffect(() => {
    getUser();
  }, []);

  // Offline
  useEffect(() => {
    window.addEventListener('online', () => {
      setOpenPageOffline(false);
      window.location.reload();
    });
    window.addEventListener('offline', () => {
      setOpenPageOffline(true);
    });
  }, []);

  if (loading) return <Loader />;

  return (
    <Suspense fallback={<Loader />}>
      <ThemeProvider theme={theme}>
        <GlobalResets />
        <Navbar logOutApollo={() => client.resetStore()} />
        <Container>
          {openPageOffline && <Disconnect />}
          {!openPageOffline && (
            <Router>
              {!isVerifyToken &&
                routes.map((routeProps) => (
                  <Route
                    isAuthenticated={isAuthenticated}
                    isAdmin={user.role === 'ADMIN'}
                    key={routeProps.path}
                    {...routeProps}
                  />
                ))}
              <NotFound default />
            </Router>
          )}
        </Container>
      </ThemeProvider>
    </Suspense>
  );
};

export default App;
