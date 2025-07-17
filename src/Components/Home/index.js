import { NavLink} from 'react-router-dom'
import Header from '../header'
import Footer from '../footer'
import './index.css'


const Home=()=>{
   
    return(
        <>
        <Header/>
        <div className="home-container">
        <div className="home-content">
          <h1 className="home-heading">Products That Get YOU Noticed</h1>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
            alt="clothes that get you noticed"
            className="home-mobile-img"
          />
          <p className="home-description">
          In a world full of noise, standing out matters. Our products are designed with purpose 
          and personality — tailored to make a statement, turn heads, and get you the recognition you deserve. 
          Whether it’s innovation, style, or performance, we deliver products that don’t just meet expectations
           — they exceed them. Be bold. Be seen. Be remembered.
          </p>
          <NavLink to="/products">
            <button type="button" className="shop-now-button">
              Shop Now
            </button>
          </NavLink>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
          alt="clothes that get you noticed"
          className="home-desktop-img"
        />
      </div>
      <Footer/>
    </>
        
    )
}
export default Home