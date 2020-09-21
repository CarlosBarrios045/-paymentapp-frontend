import React, { useState, useEffect, useContext } from 'react';
import Swal from 'sweetalert2';
import { navigate, useLocation } from '@reach/router';
import { useLazyQuery, useMutation } from '@apollo/client';
import { isEmpty } from 'lodash';

// Data
import { GET_USER, CREATE_PAYMENT } from '../../data/constants';

// Context
import ContextAuth from '../../context/contextAuth';

// Components
import Text from '../../components/Atoms/Text';
import Button from '../../components/Atoms/Button';
import Content from '../../components/Atoms/Content';
import Center from '../../components/Atoms/Center';
import CardActions from '../../components/Molecules/CardActions';
import PaymentList from '../../components/Organisms/PaymentList';

const Payments = () => {
  // Get user data of id
  const [isPerfilPage, setIsPerfilPage] = useState(false);
  const [id, setId] = useState('');

  const [getUser, { data: dataUser, error }] = useLazyQuery(GET_USER);

  const funcGetUser = async () => {
    try {
      await getUser({ variables: { id } });
    } catch (error) {
      console.log(error);
    }
  };

  const {
    userAuthenticated: { user },
  } = useContext(ContextAuth);

  const { pathname } = useLocation();

  useEffect(() => {
    // Verify if is account page or payment page
    if (pathname.includes('/perfil')) {
      if (pathname === '/perfil') {
        setIsPerfilPage(true);

        setId(user?.id);
      } else {
        navigate('/perfil');
      }
    } else if (pathname.includes('/pagos/')) {
      setIsPerfilPage(false);

      // Get id of URL
      const id = pathname.split('/')[2];
      setId(id);
    } else {
      navigate('/');
    }
  }, [pathname]);

  useEffect(() => {
    if (id) {
      funcGetUser(id);
    }
  }, [id]);

  useEffect(() => {
    // Redirect if user not exist
    const message = () => Swal.fire('Error', 'El usuario no existe', 'error');
    const notExist = error?.message;
    console.log({ notExist, dataUser });
    if (notExist && !isPerfilPage) {
      message();
      navigate('/clientes');
    } else if (notExist && isPerfilPage) {
      message();
      navigate('/');
    }
  }, [dataUser, error]);

  // Add Payment
  const [addPayment] = useMutation(CREATE_PAYMENT);

  const handleAddPayment = () => {
    Swal.fire({
      title: 'Agrega el monto del pago',
      input: 'text',
      showCancelButton: true,
      confirmButtonText: 'Agregar pago',
      cancelButtonText: 'Cancelar',
      showLoaderOnConfirm: true,
      padding: 50,
      preConfirm: async (amount) => {
        if (amount !== '') {
          try {
            await addPayment({
              variables: { input: { user: dataUser.getUser.id, amount } },
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
        Swal.fire('Pago creado', 'Se ha creado tu pago', 'success');
      }
    });
  };

  return (
    <Center>
      <Content>
        <Text theme="title" style={{ marginTop: 20 }}>
          {isPerfilPage ? 'Perfil' : 'Pagos'} - {dataUser?.getUser?.name}{' '}
          {dataUser?.getUser?.lastname}
        </Text>
        {!isPerfilPage && (
          <CardActions>
            <Button onClick={handleAddPayment}>Agregar Pago</Button>
          </CardActions>
        )}
        {!isEmpty(dataUser?.getUser) && (
          <PaymentList
            id={id}
            user={dataUser.getUser}
            isPerfilPage={isPerfilPage}
          />
        )}
      </Content>
    </Center>
  );
};

export default Payments;
