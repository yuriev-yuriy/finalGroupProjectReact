import React from 'react';
import s from './ContactsView.module.css';
import dataTeam from './dataTeam';
import ContactsListItem from '../../components/ContactsListItem';

const ContactsView = () => (
  <section className={s.section}>
    <div className={s.container}>
      <h2 className={s.mainTitle}>Our team</h2>
      <ul className={s.contactsListItemContainer}>
        {dataTeam.map(el => (
          <ContactsListItem
            key={el.id}
            name={el.name}
            position={el.position}
            eMail={el.eMail}
            image={el.imgSrc}
            linkedin={el.linkedin}
          />
        ))}
      </ul>
    </div>
  </section>
);

export default ContactsView;
