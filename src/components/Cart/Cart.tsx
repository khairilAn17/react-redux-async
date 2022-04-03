import { useSelector } from 'react-redux';
import { TRootState } from '../store';
import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = () => {

  const cartItems = useSelector((state:TRootState) => state.cart.items )
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {
          cartItems.map(item => 
            <CartItem
              key={item.id}
              item={{id: item.id, title: item.name, quantity: item.quantity, total: item.totalPrice, price: item.quantity }}
            />)
        }
      </ul>
    </Card>
  );
};

export default Cart;
