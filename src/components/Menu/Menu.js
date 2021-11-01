import React from "react";
import './Menu.scss';

const menuItem = [
  {
    'text': 'Главная',
    'link': '#',
    'id': '1'
  },
  {
    'text': 'основное меню',
    'link': '#',
    'id': '2',
    'submenu': [
      {
        'text': 'Заказать вёрстку',
        'link': '#',
        'id': '3'
      },
      {
        'text': 'Отправить макет на проверку',
        'link': '#',
        'id': '4'
      },
      {
        'text': 'Хочу работать у вас',
        'link': '#',
        'id': '5'
      }
    ]
  },
  {
    'text': 'Есть предложение по работе с клиентами',
    'link': '#',
    'id': '6',
    'submenu': [
      {
        'text': 'У меня есть оффер',
        'link': '#',
        'id': '7'
      },
      {
        'text': 'Сделать партнёром',
        'link': '#',
        'id': '8'
      }
    ]
  },
  {
    'text': 'Наши сервисы',
    'link': '#',
    'id': '9'
  },
  {
    'text': 'Контакты',
    'link': '#',
    'id': '10'
  }
]

export const Menu = ({active}) => {
  return (
    <div className={active ? 'menu menu_active' : 'menu'}>
      <div className='menu__content'>
        <ul className='menu__list-items'>
          {
            menuItem.map((item, index) =>
              !item.submenu ?
                <li key={item.id} className='menu__item'>
                  <a href={item.link} className='menu__link'>
                    {item.text}
                  </a>
                </li>
                :
                <li key={item.id} className='menu__item  menu__item_head'
                    onClick={(e) => {
                      if (e.target.closest('.menu__item_head')) {
                        e.target.closest('.menu__item_head').classList.toggle('menu__item_head-active');
                      }
                    }}
                >
                  <div className='menu__item-wrapper'>
                    <span>{item.text}</span>
                  </div>
                  <ul className='menu__list-items menu__list-items_submenu'>
                    {
                      item.submenu.map((item, index) =>
                        <li key={item.id} className='menu__item'>
                          <a href={item.link} className='menu__link'>
                            {item.text}
                          </a>
                        </li>
                      )
                    }
                  </ul>
                </li>
            )
          }
        </ul>
      </div>
    </div>
  );
}
