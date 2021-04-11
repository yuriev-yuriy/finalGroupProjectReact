import s from './Value.module.css';

const Value = ({ value }) => (
  <span className={s.testPage__questionNumValue}>&#160;{value}&#160;</span>
);

export default Value;
