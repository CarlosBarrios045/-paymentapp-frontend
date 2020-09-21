import React from 'react';

// Layout
import Text from '../../components/Atoms/Text';
import Content from '../../components/Atoms/Content';
import Center from '../../components/Atoms/Center';

const NotFound = () => {
  return (
    <Center>
      <Content>
        <Text theme="title" style={{ marginTop: 20 }}>
          ¡Oops, no se encontró la página que buscas!
        </Text>
      </Content>
    </Center>
  );
};

export default NotFound;
