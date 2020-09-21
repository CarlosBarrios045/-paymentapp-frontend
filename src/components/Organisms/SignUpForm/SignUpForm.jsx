import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useMutation } from '@apollo/client';
import Swal from 'sweetalert2';
import { navigate } from '@reach/router';
import { isEmpty } from 'lodash';

// Data
import { SIGNUP, UPDATE_USER } from '../../../data/constants';

// Atoms
import Input from '../../Atoms/Input';
import Button from '../../Atoms/Button';
import Content from '../../Atoms/Content';
import Form from '../../Atoms/Form';

const SignUpForm = ({ isUpdateClientPage, id, dataUser }) => {
  // State
  const [name, setName] = useState('');
  const [lastname, setlastname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [role, setRole] = useState('');

  const resetState = () => {
    setName('');
    setlastname('');
    setEmail('');
    setPassword('');
    setPasswordConfirm('');
    setRole('');
  };

  // Autocomplete data user
  useEffect(() => {
    if (!isEmpty(dataUser)) {
      const { name, lastname, email, role } = dataUser;
      setName(name);
      setlastname(lastname);
      setEmail(email);
      setRole(role);
    }
  }, [dataUser]);

  const [SignUp] = useMutation(SIGNUP);
  const [updateUser] = useMutation(UPDATE_USER);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password === passwordConfirm) {
      const dataSend = {
        name,
        lastname,
        email,
        password,
        role,
      };

      try {
        let funcSend;
        if (isUpdateClientPage) {
          funcSend = updateUser;
        } else {
          funcSend = SignUp;
        }

        await funcSend({
          variables: { id, input: dataSend },
        });

        // Show Message
        const messageValidate = isUpdateClientPage ? 'editado' : 'creado';
        Swal.fire({
          title: `Usuario ${messageValidate}`,
          text: `Se ha ${messageValidate} el usuario ${name} ${lastname}`,
          icon: 'success',
        });

        // Reset State
        resetState();

        // Redirect
        navigate('/clientes');
      } catch (error) {
        console.log(error);
        Swal.fire({ title: 'Error', text: error.message, icon: 'error' });
      }
    } else {
      Swal.fire({
        title: 'Error',
        text: 'Las contraseñas no coinciden',
        icon: 'error',
      });
    }
  };

  return (
    <Content theme="secondary">
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          label="Nombres"
          placeholder="Ej: Juan"
          value={name}
          onChange={(e) => setName(e.target.value)}
          styleDiv={{ marginBottom: 20 }}
          required
        />
        <Input
          type="text"
          label="Apellidos"
          placeholder="Ej: Sánchez"
          value={lastname}
          onChange={(e) => setlastname(e.target.value)}
          styleDiv={{ marginBottom: 20 }}
          required
        />
        <Input
          type="email"
          label="Email"
          placeholder="Ej: correo@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          styleDiv={{ marginBottom: 20 }}
          required
        />
        <Input
          type="password"
          label="Contraseña"
          placeholder="Ej: 1234"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          styleDiv={{ marginBottom: 20 }}
          required
        />
        <Input
          type="password"
          label="Confirmar contraseña"
          placeholder="Ej: 1234"
          value={passwordConfirm}
          onChange={(e) => setPasswordConfirm(e.target.value)}
          styleDiv={{ marginBottom: 20 }}
          required
        />
        <Input
          type="select"
          label="Elige el rol"
          placeholder=""
          value={role}
          onChange={(e) => setRole(e.target.value)}
          styleDiv={{ marginBottom: 40 }}
          required
        >
          <option value="" disabled selected>
            Ej: Cliente
          </option>
          <option value="ADMIN">Admin</option>
          <option value="CLIENT">Cliente</option>
        </Input>

        <Button
          type="submit"
          disabled={
            !email ||
            !password ||
            !passwordConfirm ||
            !name ||
            !lastname ||
            !role
          }
        >
          {isUpdateClientPage ? 'Editar usuario' : 'Crear usuario'}
        </Button>
      </Form>
    </Content>
  );
};

SignUpForm.propTypes = {
  isUpdateClientPage: PropTypes.bool.isRequired,
  id: PropTypes.string,
  dataUser: PropTypes.object,
};

SignUpForm.defaultProps = {
  id: '',
  dataUser: {},
};

export default SignUpForm;
