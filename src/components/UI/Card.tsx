import { ReactNode } from 'react';
import classes from './Card.module.css';

type TProps = {
  className?: string,
  children: ReactNode
}

const Card: React.FC<TProps> = (props: TProps) => {
  return (
    <section
      className={`${classes.card} ${props.className ? props.className : ''}`}
    >
      {props.children}
    </section>
  );
};

export default Card;
