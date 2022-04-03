import { Fragment, ReactNode } from 'react';
import MainHeader from './MainHeader';

type TProps ={
  children: ReactNode
}

const Layout: React.FC<TProps> = (props: TProps) => {
  return (
    <Fragment>
      <MainHeader />
      <main>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
