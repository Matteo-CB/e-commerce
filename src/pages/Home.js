import React from 'react';
import Menu from '../components/Menu';
import Header from '../components/Header';
import Cart from '../components/Cart';
import Product from '../components/Product';
import Detail from '../components/Detail';
import AddToCart from '../components/AddToCart';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <>
            <Menu />
      <Header />
      <Cart />
      <div className="desktop">
        <Product />

        <div className="dd">
          <Detail />
          <AddToCart />
        </div>
      </div>
      <Footer />
        </>
    );
};

export default Home;