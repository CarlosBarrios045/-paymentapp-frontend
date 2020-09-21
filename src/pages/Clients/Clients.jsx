import React from 'react';

// Layout
import Text from '../../components/Atoms/Text';
import Content from '../../components/Atoms/Content';
import Center from '../../components/Atoms/Center';
import ClientList from '../../components/Organisms/ClientList';

const Clients = () => {
  return (
    <Center>
      <Content>
        <Text theme="title" style={{ marginTop: 20, marginBottom: 10 }}>
          Clientes
        </Text>
        <ClientList />
      </Content>
    </Center>
  );
};

export default Clients;
