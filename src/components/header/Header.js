import Navbar from "../nav/NavBar";
import './style.css';

const Header = () => {
  return ( 
    <div className="header-wrapper">

      <div className="title-container">
        <div className="title">
          ПлюшИгруш
        </div>
      </div>

      <Navbar />

      <div className="search">
        search
      </div>

      <div className="basket">
        <img className="basket-pic" src="../../../img/shopping-cart.png" alt="backet"/>
        Корзина
      </div>

    </div>
   );
}
 
export default Header;