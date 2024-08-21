// import React from 'react'
// import {BrowserRouter, Routes, Route} from 'react-router-dom'
// import HomePage from './Pages/HomePage'
// import CartPage from './Pages/CartPage'
// import NotFoundPage from './Pages/NotFoundPage'
// import Header from './Components/Header'

// const Routers = () => {
//   return (
//     <BrowserRouter>
//     <Header/>
//     <Routes>
//         <Route path='/' element={<HomePage/>}/>
//         <Route path='/cart' element={<CartPage/>}/>
//         <Route path='*' element={<NotFoundPage/>}/>
//     </Routes>
//     </BrowserRouter>
//   )
// }

// export default Routers





import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import CartPage from './Pages/CartPage';
import NotFoundPage from './Pages/NotFoundPage';
import Header from './Components/Header';
import LoginPage from './Pages/LoginPage';
import SignUp from './Pages/SignUp';

const Routers = () => {
  const location = useLocation();
  const showHeader = ['/', '/cart', '/*'].includes(location.pathname);

  return (
    <>
      {showHeader && <Header />}
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/cart' element={<CartPage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </>
    
  );
};

const App = () => (
  <BrowserRouter>
    <Routers />
  </BrowserRouter>
);

export default App;


