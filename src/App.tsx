import { Fragment, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { TRootState } from './components/store';
import Notification from './components/UI/Notification';
import { sendCartData, fetchCartData } from './components/store/cart-actions';


let isInitial = true;

function App() {
  const dispatch = useDispatch();
  const showCart = useSelector((state: TRootState) => state.ui.cartInvisible );
  const cart = useSelector((state: TRootState) => state.cart);
  const notification = useSelector((state: TRootState) => state.ui.notification);

  useEffect(() => {
    dispatch(fetchCartData())
  }, [dispatch])

  useEffect(() => {

    if(isInitial){
      isInitial = false;
      return;
    }

    dispatch(sendCartData(cart));
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
