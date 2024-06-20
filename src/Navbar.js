import { NavLink } from 'react-router-dom'
import { ReactComponent as Brand } from './logo.svg'
import './Navbar.css'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <Brand />
        </div>
        <div className="nav-elements">
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/Electronics">Electronics</NavLink>
            </li>
            <li>
              <NavLink to="/jewelery">Jewelery</NavLink>
            </li>
            <li>
              <NavLink to="/men">Men Cloths</NavLink>
            </li>
            <li>
              <NavLink to="/women">Women Cloths</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;