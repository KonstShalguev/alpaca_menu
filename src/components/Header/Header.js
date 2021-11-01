import React from "react";
import './Header.scss';

export const Header  = ({changeMenuState}) => {
  return (
    <div className='header'>
      <img className='header__logo'
           src='./images/svg/logo.svg'
           alt='logo'
      />
      <nav className='header__nav'>
        <ul className='header__list-items'>
          <li className='header__item'>
            Главная
          </li>
          <li className='header__item header__item_head'>
            Основное меню
            <ul className='header__sub-menu'>
              <li className='header__sub-menu-item'>Заказать вёрстку</li>
              <li className='header__sub-menu-item'>Отправить макет на проверку</li>
              <li className='header__sub-menu-item'>Хочу работать у вас</li>
              <li className='header__sub-menu-item header__item-head'>
                Есть предложение по работе с...
                <ul className='header__sub-menu-right'>
                  <li className='header__sub-menu-item'>У меня есть оффер</li>
                  <li className='header__sub-menu-item'>Сделать партнёром</li>
                </ul>
              </li>
            </ul>
          </li>
          <li className='header__item'>
            Наши сервисы
          </li>
          <li className='header__item'>
            Контакты
          </li>
        </ul>
      </nav>
      <div className='header__tel'>
        {
          window.innerWidth > 375 ?
            <img className='header__tel-icon'
                 src='./images/svg/tel.svg'
                 alt='telephone icon'
            />
            :
            <a href='tel:+13212223333'>
              <img className='header__tel-icon'
                   src='./images/svg/tel.svg'
                   alt='telephone icon'
              />
            </a>
        }
        <p className='header__tel-number'>
          +1 (321) 222 - 33 -33
        </p>
      </div>
      <div className='header__button-menu'
           onClick={() => changeMenuState()}
      >
      </div>
    </div>
  );
}
