import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { navigate, useLocation } from '@reach/router';
import { useLazyQuery } from '@apollo/client';

// Data
import { GET_USER } from '../../data/constants';

// Layout
import Text from '../../components/Atoms/Text';
import Content from '../../components/Atoms/Content';
import Center from '../../components/Atoms/Center';
import SignUpForm from '../../components/Organisms/SignUpForm';

const SignUp = ({ id }) => {
  const [isUpdateClientPage, setIsUpdateClientPage] = useState(false);

  // Get user data of id
  const [getUser, { data }] = useLazyQuery(GET_USER);

  const funcGetUser = async () => {
    await getUser({ variables: { id } });
  };

  // Verify if is update client page
  const { pathname } = useLocation();
  useEffect(() => {
    if (pathname.includes('/editar-cliente/')) {
      setIsUpdateClientPage(true);
    } else {
      setIsUpdateClientPage(false);
    }

    if (id) {
      funcGetUser();
    }
  }, [pathname]);

  // Redirect if user not exist
  useEffect(() => {
    if (data && !data.getUser) {
      navigate('/clientes');
    }
  }, [data]);

  return (
    <Center>
      <Content>
        <Text theme="title" style={{ marginTop: 20 }}>
          {isUpdateClientPage ? 'Editar usuario' : 'Crear usuario'}
        </Text>
        <SignUpForm
          isUpdateClientPage={isUpdateClientPage}
          dataUser={data?.getUser}
          id={id}
        />
      </Content>
    </Center>
  );
};

SignUp.propTypes = {
  id: PropTypes.string,
};

SignUp.defaultProps = {
  id: '',
};

export default SignUp;
