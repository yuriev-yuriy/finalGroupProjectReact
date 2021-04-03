import React from 'react';
import MainButton from '../../components/MainPage/MainButton';
import s from './MainPage.module.css';

// interface IId {
//   id1: string,
//   id2: string,
// }

// const ID_NEED_TEST: IId = {
//   id1: '5e29edc351e2cd3a659a8e4e',
//   id2: '5e2de905933b4f3b74d81d59',
// };

const TEXT_BUTTON = ['QA technical training', 'Testing theory'];
const BUTTON_COLOR = ['orange', 'blue'];

const MainPage = () => {
  return (
    <section className={s.mainPage}>
      <div className={s.container}>
        <h2 className={s.mainPage_quote}>
          “Regression testing. What is it? <br /> If the system compiles, that's
          good, if it boots, that's great!”
        </h2>
        <h3 className={s.mainPage_author}>Linus Torvalds</h3>
        <p className={s.mainPage_descr}>Linux kernel creator, hacker, 1969</p>
        <div className={s.mainPage_buttons}>
          <ul className={s.mainPage_buttonItems}>
            <MainButton text={TEXT_BUTTON[0]} bg={BUTTON_COLOR[1]} />

            <MainButton text={TEXT_BUTTON[1]} bg={BUTTON_COLOR[0]} />
          </ul>
        </div>
      </div>
    </section>
  );
};

export default MainPage;
