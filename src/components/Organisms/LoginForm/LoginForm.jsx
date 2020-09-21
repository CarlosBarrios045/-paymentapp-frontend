import React, { useState, useContext } from 'react';
import { useMutation } from '@apollo/client';
import Swal from 'sweetalert2';
import { navigate } from '@reach/router';

// Data
import { LOGIN, GET_USER_LOGGED } from '../../../data/constants';

// Context
import ContextAuth from '../../../context/contextAuth';

// Atoms
import Input from '../../Atoms/Input';
import Button from '../../Atoms/Button';
import Content from '../../Atoms/Content';
import Form from '../../Atoms/Form';

const LoginForm = () => {
  // State
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const resetState = () => {
    setEmail('');
    setPassword('');
  };

  // Context
  const { signIn } = useContext(ContextAuth);

  // Login Func
  const [LoginFunc, { loading }] = useMutation(LOGIN);

  // Verify user with token
  const [getUserLogged] = useMutation(GET_USER_LOGGED);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const { data } = await LoginFunc({ variables: { email, password } });

      // Save token
      await localStorage.setItem('token', data.login.token);

      // Query User
      const res = await getUserLogged();
      signIn(res.data.getUserLogged);

      // Reset state
      resetState();

      // Redirect
      navigate('/');
    } catch (error) {
      console.log(error);
      Swal.fire({ title: 'Error', text: error.message, icon: 'error' });
    }
  };

  return (
    <Content theme="secondary">
      <Form onSubmit={handleSubmit}>
        <Input
          type="email"
          label="Email"
          placeholder="Ej: correo@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Input
          type="password"
          label="Contraseña"
          placeholder="Ej: 1234"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          styleDiv={{ margin: '20px 0' }}
          required
        />

        <Button type="submit" disabled={!email || !password || loading}>
          Iniciar sesión
        </Button>
      </Form>
    </Content>
  );
};

export default LoginForm;
