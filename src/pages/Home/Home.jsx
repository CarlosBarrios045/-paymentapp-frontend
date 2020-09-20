import React from 'react';

// Layout
import Text from '../../components/Atoms/Text';
import Link from '../../components/Atoms/Link';
import Content from '../../components/Atoms/Content';
import Center from '../../components/Atoms/Center';

const Home = () => {
  return (
    <Center>
      <Content>
        <Text theme="title" style={{ marginTop: 20, marginBottom: 10 }}>
          PaymentsApp
        </Text>
        <Text>
          Desarrollada por{' '}
          <Link href="https://juanbarrios.netlify.app/" target="blank">
            Juan C. Barrios S.
          </Link>
        </Text>
      </Content>
    </Center>
  );
};

export default Home;
