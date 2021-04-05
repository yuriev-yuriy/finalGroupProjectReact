import React from 'react';
import s from './ContactsListItem.module.css';
import { ReactComponent as IconLinkedin } from '../../assets/icons/svg/linkedin.svg';

const ContactsListItem = ({ image, name, position, eMail, linkedin }) => (
  <li className={s.card}>
    <figure>
      <img src={image} className={s.image} alt={name} height="246" />
      <figcaption className={s.figcaption}>
        <p className={s.name}>{name}</p>
        <p className={s.position}>{position}</p>
        <p className={s.eMail}>{eMail}</p>
        {linkedin && (
          <span className={s.spanLinkedin}>
            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className={s.linkedin}
            >
              <IconLinkedin />
            </a>
          </span>
        )}
      </figcaption>
    </figure>
  </li>
);

export default ContactsListItem;
