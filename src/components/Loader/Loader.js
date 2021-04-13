import React from 'react';
import s from './Loader.module.css';

// eslint-disable-next-line import/no-anonymous-default-export
export default () => (
  <div style={{ display: 'flex', justifyContent: 'center', margin: '.5rem' }}>
    <div className={s.lds_dual_ring} />
  </div>
);
