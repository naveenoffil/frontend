// import React, { useEffect } from "react";
// import '../Styles/HomePage.css'
// import { getProductsRequest } from "../Redux/Products/ProductsAction";
// import { useDispatch, useSelector } from "react-redux";

// const HomePage = () => {
//   const dispatch = useDispatch();
//   const { products, productsDataLoading } = useSelector((state) => state.productReducer);

//   useEffect(() => {
//     dispatch(getProductsRequest());
//   }, [dispatch]);


//   if (productsDataLoading) {
//     return <h3><div className="productsLoading">Loading...</div></h3>; 
//   }

  

//   return (
//     <div>
//         <h3>PRODUCTS</h3>
//       <div className="product-container">
//         {products.map((item, i) => (
//           <div key={i} className="product-item">
//             <div>
//               <img src={item.avatar} alt="" />
//             </div>
//             <div>Name: {item.name}</div>
//             <div>Id: {item.id}</div>
//             <div>Price: {item.price}</div>
//             <div>
//               <button onClick={() => dispatch((item))}>Add to cart</button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default HomePage;



import React, { useEffect } from "react";
import '../Styles/HomePage.css'
import { getProductsRequest } from "../Redux/Products/ProductsAction";
import { useDispatch, useSelector } from "react-redux";
import { addToCartRequest } from "../Redux/Cart/CartAction";

const HomePage = () => {
  const dispatch = useDispatch();
  const { products, productsDataLoading } = useSelector((state) => state.productReducer);

  useEffect(() => {
    dispatch(getProductsRequest());
  }, [dispatch]);
  

  return (
    <div>

{productsDataLoading ? (
            <h3><div className="productsLoading">Loading...</div></h3>
        ) : (
            <>
        <h3>PRODUCTS</h3>

      <div className="product-container">
        {products.map((item, i) => (
          <div key={i} className="product-item">
            <div>
              <img src={item.avatar} alt="" />
            </div>
            <div>Name: {item.name}</div>
            <div>Id: {item.id}</div>
            <div>Price: {item.price}</div>
            <div>
              <button onClick={() => dispatch(addToCartRequest(item))}>Add to cart</button>
            </div>
          </div>
        ))}
      </div>
      </>
        )}
    </div>

  );
};

export default HomePage;
