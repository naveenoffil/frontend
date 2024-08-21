// import React, { useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux';

// const CartPage = () => {

//   const dispatch = useDispatch();
//   const { cart, cartDataLoading } = useSelector((state) => state.cartReducer);

//   useEffect(() => {
//     dispatch(getProductsRequest());
//   }, [dispatch]);
  
//   return (
//     <div>

// {cartDataLoading ? (
//             <h3><div className="productsLoading">Loading...</div></h3>
//         ) : (
//             <>
//         <h3>CART</h3>

//       <div className="product-container">
//         {cart.map((item, i) => (
//           <div key={i} className="product-item">
//             <div>
//               <img src={item.avatar} alt="" />
//             </div>
//             <div>Name: {item.name}</div>
//             <div>Id: {item.id}</div>
//             <div>Price: {item.price}</div>
//             <div>
//               <button onClick={() => dispatch(addToCartRequest(item))}>Add to cart</button>
//             </div>
//           </div>
//         ))}
//       </div>
//       </>
//         )}
//     </div>

//   );
// };


// export default CartPage



import React from 'react'

const CartPage = () => {
  return (
    <div>CartPage</div>
  )
}

export default CartPage