import { useDispatch, useSelector } from 'react-redux';
import { TRootState } from '../store';

import { uiActions } from '../store/ui-slice';
import classes from './CartButton.module.css';

const CartButton = () => {

  const totalQuantity = useSelector((state: TRootState) => state.cart.totalQuantity);
  const dispatch = useDispatch()

  const toggleCartHandler = () => {
    dispatch(uiActions.toggle());
  }

  return (
    <button className={classes.button} onClick={toggleCartHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalQuantity}</span>
    </button>
  );
};

export default CartButton;
