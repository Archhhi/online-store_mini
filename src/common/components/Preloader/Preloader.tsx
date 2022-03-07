import React from 'react';
import s from './Preloader.module.css';
import preloader from '../../../assets/image/preloader.gif';

export const Preloader = () => {
  return (
    <div className={s.preloader}>
      <img src={preloader} alt={'Загрузка...'} />
    </div>
  );
};
