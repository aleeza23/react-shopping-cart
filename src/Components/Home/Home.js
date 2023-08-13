import React, {useState} from "react";
import Header from "../Header/Header";
import Products from "../Products/Products";
import {productsData} from "../../Data/Data";
import Cart from "../Cart/Cart";
import Order from "../Orders/Order";
const Home = () => {
  const [products, setproducts] = useState(productsData);
  const [cartItems, setcartItems] = useState([]);
  const [orders, setorders] = useState([]);
  const [showCart, setshowCart] = useState(false);
  const [showOrder, setshowOrder] = useState(false);

  //add to cart fun
  const addCart = (product) => {
    setcartItems([...cartItems, product]);
  };

  // confirm order fun
  const order = () => {
    setorders([...cartItems]);
    
    setcartItems([]);
  };

  //show cart products
  const showCartProducts = () => {
    setshowCart(true);
    console.log("i show");
  };
  //show cart products
  const hideCartProducts = () => {
    setshowCart(false);
    setshowOrder(false)
    console.log("i hide");
  };

   //show order products
   const showOrderProducts = () => {
    setshowOrder(true);
    console.log("i show");
  };

  // sub total of products
  const total = cartItems.reduce((initial, y) => initial + y.price, 0);

  return (
    <>
      <Header
        orderdata={orders}
        showcart={showCart}
        cartLength={cartItems}
        showCartFun={showCartProducts}
        showOrderFun={showOrderProducts}
      />

      <Products
        title={"Products"}
        productsData={products}
        addToCart={addCart}
      />

      {showCart && (
        <Cart
          cartProducts={cartItems}
          confirmOrder={order}
          subtotal={total}
          hideCartFun={hideCartProducts}
        />
      )}

      {showOrder && <Order Ordata={orders} hideCartFun={hideCartProducts} />}
    </>
  );
};

export default Home;
