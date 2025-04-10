import { NavLink} from 'react-router-dom'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import LogoutIcon from '@mui/icons-material/Logout';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import './index.css'

const Header=()=>{
    return (
        <div className='HeaderParentContainer'>
            <NavLink to="/">
            <img
              className="website-logo"
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
              alt="website logo"
            />
          </NavLink>
            <div className='IconContainer'>
           <NavLink to="/home"><HomeOutlinedIcon/></NavLink> 
            <NavLink to="/products"><StorefrontOutlinedIcon/></NavLink> 
            <ShoppingCartOutlinedIcon/>
            <LogoutIcon/>
            </div>
        </div>
    )
}
export default Header