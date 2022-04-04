import { Fragment, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { TRootState } from './components/store';
import { uiActions } from './components/store/ui-slice';
import Notification from './components/UI/Notification';


let isInitial = true;

function App() {
  const dispatch = useDispatch();
  const showCart = useSelector((state: TRootState) => state.ui.cartInvisible );
  const cart = useSelector((state: TRootState) => state.cart);
  const notification = useSelector((state: TRootState) => state.ui.notification);

  useEffect(() => {
    const sendCartData = async () => {
      dispatch(uiActions.showNotification({
        status: 'pending',
        title: 'Sending...',
        message: 'Sending cart data',
      }))
      const response = await fetch('https://react-redux-33b32-default-rtdb.asia-southeast1.firebasedatabase.app/cart.json', {
        method: 'PUT',
        body: JSON.stringify(cart),
      });

      if(!response.ok){
        dispatch(uiActions.showNotification({
          status: 'error',
          title: 'Error!',
          message: 'Sent cart data failed',
        }))
      }

      dispatch(uiActions.showNotification({
        status: 'success',
        title: 'Success!',
        message: 'Sent cart data succesfully',
      }))
    }

    if(isInitial){
      isInitial = false;
      return;
    }
    sendCartData().catch(error => {
      dispatch(uiActions.showNotification({
        status: 'error',
        title: 'Error!',
        message: 'Sent cart data failed',
      }))
    })
  }, [cart, dispatch]);

  return (
    <>
    { notification && <Notification status={notification?.status} title={notification.title} message={notification.message} />}
    <Layout>
      {showCart && <Cart /> }
      <Products />
    </Layout>
    </>
  );
}

export default App;
