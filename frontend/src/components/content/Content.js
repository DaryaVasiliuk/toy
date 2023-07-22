import './style.css';

const Content = () => {
  return ( 
    <div className='content-wrapper'>

      <div className='big-wrapper'>

        <div className='text-wrapper'>

          <div className='logo'>ПлюшИгруш</div>
          <div className='text'>
            магазин игрушек ручной работы,<br/>
            тут вы можете купить не только игрушки, <br/>
            но и преобрести схемы для того что бы <br/>
            порадовать вас и ваших близких.
          </div>

        </div>

        <div className='photo-wrapper'>
          <img src='../../img/зайцы.jpg'alt='rabbit' className='photo'/>
        </div>

      </div>

    </div>
   );
}
 
export default Content;