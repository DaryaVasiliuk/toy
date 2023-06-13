import { Link } from 'react-router-dom';
import './style.css';

const Footer = () => {
  return ( 
    <div className="footer-wrapper">

      <div className='flex-wrapper'>

        <div className='contact-wrapper'>

          <h1>Контакты</h1>

          <Link>
            <div className='container'>
              <img src='../../img/envelope-of-white-paper.png' className='img-contacts' alt='envelope'/>
              <p>toysBrest@gmail.com</p>
            </div>
          </Link>

          <Link >
            <div className='container'>
              <img src='../../img/phone-receiver-silhouette.png' className='img-contacts' alt='phone'/>
              <p>+375(29)111-11-11</p>
            </div>
          </Link>

          <Link >
            <div className='container'>
              <img src='../../img/location-pointer.png' className='img-contacts' alt='location'/>
              <p>г.Брест</p>
            </div>
          </Link>

        </div>

        <div className='link-wrapper'>
          
          <div className='photo-container'>

            <Link>
              <img className='photo-link' src='../../img/instagram.png' alt='instagram'/>
            </Link>

            <Link>
              <img className='photo-link' src='../../img/vk.png' alt='vk'/>
            </Link>

            <Link>
              <img className='photo-link' src='../../img/envelope-of-white-paper.png' alt='mail'/>
            </Link>

          </div>

        </div>

        <div className='delivery-wrapper'>
          
          <h1>Доставка</h1>

          <p className='text-footer'>
            Бесплатная доставка по Бресту<br/>
            Срок доставки по Беларуси <br/>
            в течении 3-5 дней:<br/>
              Белпочта,
              Европочта
          </p>

        </div>

        <div className='footer-photo__wrapper'>
          
          <img className='photo_pic' src='../../img/проект вязание.jpg' />

        </div>

      </div>

    </div>
   );
}
 
export default Footer;