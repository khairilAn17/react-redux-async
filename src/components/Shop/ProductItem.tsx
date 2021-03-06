import { useDispatch } from 'react-redux';
import { cartActions } from '../store/cart-slice';
import Card from '../UI/Card';
import classes from './ProductItem.module.css';

type TProps = {
  id: string,
  title: string,
  price: number,
  description: string
}

const ProductItem: React.FC<TProps> = (props: TProps) => {
  const { title, price, description, id } = props;
  const dispatch = useDispatch();

  const addToCartHandler = () => {
    dispatch(cartActions.addItemToCart({
      id,
      title,
      price,
    }))
  }

  return (
    <li className={classes.item} key={id}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addToCartHandler }>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
