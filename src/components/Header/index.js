// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <>
    <div className="header-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
        alt="website logo"
        className="website-logo"
      />
      <div>
        <ul>
          <li className='nav-item'>Home</li>
          <li className='nav-item'>Products</li>
          <li className='nav-item'>Cart</li>
        </ul>
        <button className="button">Logout</button>
       
      </div>
    </div>
  </>
)

export default Header
