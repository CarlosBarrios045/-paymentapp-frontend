import React from 'react';

// Layout
import Text from '../../components/Atoms/Text';
import Content from '../../components/Atoms/Content';
import Center from '../../components/Atoms/Center';

const Disconnect = () => {
  return (
    <Center>
      <Content>
        <Text theme="title" style={{ marginTop: 20 }}>
          ¡Oops, conexión perdida!
        </Text>
      </Content>
    </Center>
  );
};

export default Disconnect;
