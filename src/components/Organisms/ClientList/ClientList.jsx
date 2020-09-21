import React from 'react';
import { useQuery } from '@apollo/client';

// Data
import { GET_USERS } from '../../../data/constants';

// Components
import Text from '../../Atoms/Text';
import Loader from '../../Atoms/Loader';
import Content from '../../Atoms/Content';
import Client from '../../Molecules/Client';

const ClientList = () => {
  // Get users
  const { data, error, loading } = useQuery(GET_USERS, { pollInterval: 1000 });

  if (loading) return <Loader />;
  if (error)
    return (
      <Content theme="secondary">
        <Text>{error.message}</Text>
      </Content>
    );

  if (!data?.getUsers.length) return <Text>No hay clientes registrados.</Text>;
  return (
    <Content theme="secondary">
      {data.getUsers &&
        data.getUsers.map((client) => (
          <Client key={client.id} client={client} />
        ))}
    </Content>
  );
};

export default ClientList;
