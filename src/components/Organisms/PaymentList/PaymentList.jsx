import React from 'react';
import PropTypes from 'prop-types';
import { useQuery } from '@apollo/client';

// Data
import { GET_PAYMENTS } from '../../../data/constants';

// Components
import Text from '../../Atoms/Text';
import Loader from '../../Atoms/Loader';
import Content from '../../Atoms/Content';
import Payment from '../../Molecules/Payment';

const PaymentList = ({ id, user, isPerfilPage }) => {
  // Get users
  const { data, error, loading } = useQuery(GET_PAYMENTS, {
    variables: { idUser: id },
    pollInterval: 1000,
  });

  if (loading) return <Loader />;
  if (error)
    return (
      <Content theme="secondary">
        <Text>{error.message}</Text>
      </Content>
    );

  if (!data?.getPayments.length) return <Text>No hay pagos registrados.</Text>;
  return (
    <Content theme="secondary">
      {data?.getPayments.map((pay) => (
        <Payment
          key={pay.id}
          payment={pay}
          user={user}
          isPerfilPage={isPerfilPage}
        />
      ))}
    </Content>
  );
};

PaymentList.propTypes = {
  id: PropTypes.string.isRequired,
  user: PropTypes.object.isRequired,
  isPerfilPage: PropTypes.bool.isRequired,
};

export default PaymentList;
