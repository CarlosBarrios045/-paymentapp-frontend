import React, { useContext } from 'react';
import styled from 'styled-components';

// Icons
import { AiOutlineDollar } from 'react-icons/ai';

// Context
import ContextAuth from '../../../context/contextAuth';

// Atoms
import Link from '../../Atoms/Link';
import Button from '../../Atoms/Button';

const NavbarWrapper = styled.nav`
  width: 100%;
  min-height: 70px;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.palette.primary};
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.2);
`;

const Flex = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Navbar = () => {
  const {
    logOut,
    userAuthenticated: { isAuthenticated, user },
  } = useContext(ContextAuth);

  const Links = () =>
    isAuthenticated ? (
      <Flex>
        {user.role === 'CLIENT' && <Link to="/">Ver perfil</Link>}

        {user.role === 'ADMIN' && (
          <>
            <Link to="/clientes" style={{ margin: '0 20px' }}>
              Clientes
            </Link>

            <Link to="/registrar-cliente">Crear Cliente</Link>
          </>
        )}

        <Button onClick={logOut} style={{ marginLeft: 20 }}>
          Cerrar Sesión
        </Button>
      </Flex>
    ) : (
      <Flex>
        <Link to="/iniciar-sesion">Iniciar Sesión</Link>
      </Flex>
    );

  return (
    <NavbarWrapper>
      <Link to="/">
        <Flex>
          <AiOutlineDollar size={30} style={{ marginRight: 10 }} />
          PaymentsApp
        </Flex>
      </Link>

      <Links />
    </NavbarWrapper>
  );
};

export default Navbar;
