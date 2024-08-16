import React from 'react'
import '../Styles/Header.css'
import { Link } from 'react-router-dom'
import Badge from '@mui/material/Badge';
import HomeIcon from '@mui/icons-material/Home';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';



const Header = () => {
  return (
    <div>
    <div className='header'>

        <div className='home-icon'>
        <Link to='/'><Badge badgeContent={0} color="primary">
            <HomeIcon color="action" />
          </Badge></Link>
        </div>


        <div className='cart-icon'>
            <Link to='/cart'><Badge badgeContent={0} color="primary">
                <ShoppingCartIcon color="action" />
                </Badge></Link>
        </div>
    
    
    
    </div>
    </div>
  )
}

export default Header