import ProductItem from './ProductItem';
import classes from './Products.module.css';


const DUMMY_PRODUCS = [
  {
    id: 'p1',
    price: 6,
    title: 'My First Book',
    description: 'The first book I ever wrote'
  },
  {
    id: 'p3',
    price: 7,
    title: 'My Second Book',
    description: 'The first book I ever wrote 2'
  },
]

const Products = () => {
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {
          DUMMY_PRODUCS.map(item => {
            return <ProductItem id={item.id} title={item.title} price={item.price} description={item.description}/> 
          })
        }
      </ul>
    </section>
  );
};

export default Products;
