import React from "react";
import logo from "../../assets/undraw_shopping_app_flsj.svg";
const Header = ({cartLength , showCartFun , orderdata ,showOrderFun}) => {





  return (
    <>
      <div className='container-fluid'>     
        <nav class='navbar navbar-light mb-5 py-4 '>
          <h1 className='navbar-brand text-white'>Shopping Cart</h1>
          <i class='fa-solid fa-icon fa-cart-shopping ms-auto me-3' onClick={showCartFun}><p className="count" >{cartLength.length}</p></i>
          <i class='fa-solid fa-icon fa-bag-shopping' onClick={showOrderFun}><p className="count">{orderdata.length}</p></i>
        </nav>

        <div className='row px-4 '>
          <div className='col-12 col-lg-6 mx-auto text'>
            <h1 className='h1 display-5 '>
              Discover Your Wishlist: Unveiling the Ultimate Shopping Cart
              Experience!
            </h1>
            <button className='btn btn-warning my-4'>SHOP NOW</button>
          </div>
        </div>
       
      </div>
      
    </>
  );
};

export default Header;
