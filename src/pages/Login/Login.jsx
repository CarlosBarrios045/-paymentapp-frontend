import React from 'react';

// Layout
import Text from '../../components/Atoms/Text';
import Content from '../../components/Atoms/Content';
import Center from '../../components/Atoms/Center';
import LoginForm from '../../components/Organisms/LoginForm';

const Login = () => {
  return (
    <Center>
      <Content>
        <Text theme="title" style={{ marginTop: 20 }}>
          Iniciar Sesión
        </Text>
        <LoginForm />
      </Content>
    </Center>
  );
};

export default Login;
