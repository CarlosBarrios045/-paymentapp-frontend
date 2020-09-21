import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Swal from 'sweetalert2';
import { navigate } from '@reach/router';
import { useMutation } from '@apollo/client';

// Data
import { DELETE_USER } from '../../../data/constants';

// Icons
import { FaUserCircle } from 'react-icons/fa';

// Components
import Text from '../../Atoms/Text';
import Button from '../../Atoms/Button';
import Card from '../../Molecules/Card';
import CardTitle from '../../Molecules/CardTitle';
import CardContent from '../../Molecules/CardContent';
import CardActions from '../../Molecules/CardActions';

const Flex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Client = ({ client: { name, lastname, id, email } }) => {
  // Func delete user
  const [deleteUser] = useMutation(DELETE_USER);

  const funcDeleteUser = async () => {
    try {
      await deleteUser({ variables: { id } });
      Swal.fire({
        title: 'Usuario eliminado',
        text: `Se ha eliminado el usuario ${name} ${lastname}`,
        icon: 'success',
      });
    } catch (error) {
      Swal.fire({
        title: 'Error',
        text: error.message,
        icon: 'error',
      });
    }
  };

  return (
    <Card>
      <CardTitle>
        <Flex>
          <FaUserCircle size={30} style={{ marginRight: 10 }} />

          <Text style={{ fontWeight: 'bold' }}>
            {name} {lastname}
          </Text>
        </Flex>
      </CardTitle>

      <CardContent>
        <Text>Correo: {email}</Text>
      </CardContent>

      <CardActions>
        <Button onClick={() => navigate(`/pagos/${id}`)} color="primary">
          Pagos
        </Button>
        <Button
          onClick={() => navigate(`/editar-cliente/${id}`)}
          style={{ margin: 10 }}
        >
          Editar
        </Button>
        <Button onClick={funcDeleteUser}>Eliminar</Button>
      </CardActions>
    </Card>
  );
};

Client.propTypes = {
  client: PropTypes.object.isRequired,
};

export default Client;
