import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// Icons
import { FaBars, FaTimes } from 'react-icons/fa';
import { AiOutlineDollar } from 'react-icons/ai';

// Context
import ContextAuth from '../../../context/contextAuth';

// Atoms
import Link from '../../Atoms/Link';
import Button from '../../Atoms/Button';

const NavbarWrapper = styled.nav`
  position: relative;
  width: 100vw;
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

const FlexColumn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 480px) {
    display: ${({ openMenu }) => (openMenu ? 'flex' : 'none')};
    flex-direction: column;
    position: absolute;
    top: 70px;
    width: 100%;
    left: 0;
    background-color: ${({ theme }) => theme.palette.secondary};

    & * {
      color: #fff;
      font-size: 14px;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 50px;
      margin: 0 !important;
      border-radius: 0;
      box-shadow: none;
    }
  }
`;

const Div = styled.div`
  @media screen and (min-width: 480px) {
    display: none;
  }
`;

const Navbar = ({ logOutApollo }) => {
  const [openMenu, setOpenMenu] = useState(false);
  const showMenu = () => setOpenMenu((prev) => !prev);

  const {
    logOut,
    userAuthenticated: { isAuthenticated, user },
  } = useContext(ContextAuth);

  const isAdmin = user.role === 'ADMIN';
  const isClient = user.role === 'CLIENT';

  const Links = () =>
    isAuthenticated ? (
      <FlexColumn openMenu={openMenu}>
        {isClient && <Link to="/perfil">Ver perfil</Link>}

        {isAdmin && (
          <>
            <Link to="/clientes">Clientes</Link>

            <Link to="/crear-usuario" style={{ margin: '0 20px' }}>
              Crear Usuario
            </Link>
          </>
        )}

        <Button
          onClick={() => {
            logOut();
            logOutApollo();
          }}
        >
          Cerrar Sesión
        </Button>
      </FlexColumn>
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

      {isAuthenticated && (
        <Div onClick={showMenu}>
          {openMenu ? <FaTimes color="#fff" /> : <FaBars color="#fff" />}
        </Div>
      )}

      <Links />
    </NavbarWrapper>
  );
};

Navbar.propTypes = {
  logOutApollo: PropTypes.func.isRequired,
};

export default Navbar;
