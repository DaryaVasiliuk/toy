import {NavLink} from "react-router-dom";

import './style.css';

const Navbar = () => {
  return ( 
    <nav className="nav">
    <div className="header-container">
      <div className="nav-row">
        <ul className="nav-list">

          <li className="nav-list__item">
            
            <NavLink to="#" className = "nav-list">
              Каталог
            </NavLink>
          </li>

          <li className="nav-list__item">
            <NavLink to="#" className="nav-list">
              Игрушки в наличии
            </NavLink>
          </li>

          <li className="nav-list__item">
            <NavLink to="#" className= "nav-list">
              Контакты
            </NavLink>
          </li>

        </ul>
      </div>
    </div>
  </nav>
   );
}
 
export default Navbar;