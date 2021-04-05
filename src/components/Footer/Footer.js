import s from './Footer.module.css';

const Footer = () => {
  const url = '#';
  return (
    <footer className={s.footer}>
      <p className={s.description}>
        &#169; 2021 | All Rights Reserved | Developed with{' '}
        <span className={s.icon}>&#10084;</span> by{' '}
        <a className={s.link} href={url}>
          GoIT Students
        </a>
      </p>
    </footer>
  );
};

export default Footer;
