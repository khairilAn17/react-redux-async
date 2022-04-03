import { useSelector } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { TRootState } from './components/store';

function App() {

  const showCart = useSelector((state: TRootState) => state.ui.cartInvisible )

  return (
    <Layout>
      {showCart && <Cart /> }
      <Products />
    </Layout>
  );
}

export default App;
