import React from 'react';
import './Sidebar.scss';
import sprite from '../../pictures/sprite.svg';
import classNames from 'classnames';

export function Sidebar() {
  return (
    <ul className="sidebar__list">
      <li className="sidebar__item sidebar__item--active">
        <svg
          width="48px"
          height="48px"
          className="sidebar__icon sidebar__icon--active"
        >
          <use href={`${sprite}#icon-app`} />
        </svg>
      </li>
     <li className="sidebar__item">
        <svg
          width="48px"
          height="48px"
          className={classNames("sidebar__icon")}
        >
          <use href={`${sprite}#icon-plan`} />
        </svg>
      </li>
      <li className="sidebar__item">
        <svg
          width="48px"
          height="48px"
          className={classNames("sidebar__icon")}

        >
          <use href={`${sprite}#icon-people`} />
        </svg>
      </li>
    </ul>
  )
}
