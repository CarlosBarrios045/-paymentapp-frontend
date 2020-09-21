import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import dayjs from 'dayjs';
import Swal from 'sweetalert2';
import { useMutation } from '@apollo/client';

// Data
import { DELETE_PAYMENT, UPDATE_PAYMENT } from '../../../data/constants';

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

const Payment = ({ payment: { amount, date, id }, user, isPerfilPage }) => {
  // Func delete payment
  const [deletePayment] = useMutation(DELETE_PAYMENT);

  const funcDeletePayment = async () => {
    try {
      await deletePayment({ variables: { id } });
      Swal.fire({
        title: 'Pago eliminado',
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

  // Func update payment
  const [updatePayment] = useMutation(UPDATE_PAYMENT);

  const handleUpdatePayment = () => {
    Swal.fire({
      title: 'Agrega el nuevo monto del pago',
      input: 'text',
      showCancelButton: true,
      confirmButtonText: 'Editar pago',
      cancelButtonText: 'Cancelar',
      showLoaderOnConfirm: true,
      padding: 50,
      preConfirm: async (amount) => {
        if (amount !== '') {
          try {
            await updatePayment({
              variables: { id, input: { user: user.id, amount } },
            });
          } catch (error) {
            console.log(error);
          }
        } else {
          Swal.fire('Error', 'Debes agregar un monto', 'error');
        }
      },
    }).then(({ isConfirmed }) => {
      if (isConfirmed) {
        Swal.fire('Pago editado', 'Se ha editado tu pago', 'success');
      }
    });
  };

  return (
    <Card>
      <CardTitle>
        <Flex>
          <Text style={{ fontWeight: 'bold' }}>$ {amount}</Text>
        </Flex>
      </CardTitle>

      <CardContent>
        <Text>Fecha: {dayjs(Number(date)).format('DD MMM hh:mm a')}</Text>
      </CardContent>

      {!isPerfilPage && (
        <CardActions>
          <Button onClick={handleUpdatePayment} style={{ margin: 10 }}>
            Editar
          </Button>
          <Button onClick={funcDeletePayment}>Eliminar</Button>
        </CardActions>
      )}
    </Card>
  );
};

Payment.propTypes = {
  payment: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  isPerfilPage: PropTypes.bool.isRequired,
};

export default Payment;
