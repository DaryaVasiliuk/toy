import { Link } from 'react-router-dom';
import './style.css';


const Catalog = () => {
  return ( 

<div className='catalog_container'>
    
  <div className='main-container'>
    <div className='category-wrapper'>
      <h1 className="categoty_h1"> Категории</h1>
        <Link className='link'>
          <h2 className="categoty_h2">Животные</h2>
            <h4>Домашние</h4>
            <h4>Лесные</h4>
            <h4>Морские</h4>
          <h2 className="categoty_h2">Мифические</h2>
            <h4>Драконы/Динозавры</h4>
            <h4>Монстрики</h4>
            <h4>Чебурашки</h4>
          </Link>
    </div>

    <div className='main_category-wrapper'> 

      <div className='cart_category-wrapper'>
        <Link className='link'>
          <img className='picture_category' src='../../img/собака2.jpg' alt='dog'/>
          <p className='name_category'>Домашние животные</p>
        </Link>
      </div>

      <div className='cart_category-wrapper'>
        <Link className='link'>
          <img className='picture_category' src='../../img/олень.jpg' alt='dog'/>
          <p className='name_category'>Лесные животные</p>
        </Link>
      </div>

      <div className='cart_category-wrapper'>
        <Link className='link'>
          <img className='picture_category' src='../../img/кит.jpg' alt='dog'/>
          <p className='name_category'>Морские животные</p>
        </Link>
      </div>

      <div className='cart_category-wrapper'>
        <Link className='link'>
          <img className='picture_category' src='../../img/драконЗел.jpg' alt='dog'/>
          <p className='name_category'>Драконы/Динозавры</p>
        </Link>
      </div>

      <div className='cart_category-wrapper'>
        <Link className='link'>
          <img className='picture_category' src='../../img/монстрик.jpg' alt='dog'/>
          <p className='name_category'>Монстрики</p>
        </Link>
      </div>

      <div className='cart_category-wrapper'>
        <Link className='link'>
          <img className='picture_category' src='../../img/Чебурашка2.jpg' alt='dog'/>
          <p className='name_category'>Чебурашки</p>
        </Link>
      </div>
    </div>
  </div>

</div>

   );
}
 
export default Catalog;