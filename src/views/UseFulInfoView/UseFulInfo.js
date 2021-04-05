import React, { useState } from 'react';
import s from './UseFulInfo.module.css';
import { literature, sources } from './dataUseFulInfo';

const UseFulInfoView = () => {
  const [extendedLiterature, setExtendedLiterature] = useState(false);
  const [extendedSources, setExtendedSources] = useState(false);

  const onShowMore = e => {
    const buttonId = e.currentTarget.id;
    switch (buttonId) {
      case 'literature':
        setExtendedLiterature(!extendedLiterature);
        break;
      case 'sources':
        setExtendedSources(!extendedSources);
        break;
      default:
        break;
    }
  };

  const booksToShow = extendedLiterature ? literature.length : 3;
  const sourcesToShow = extendedSources ? sources.length : 3;

  return (
    <section className={s.wrapper}>
      <div className={s.container}>
        <div className={s.useful}>
          <h2 className={s.title}>Useful literature</h2>
          <ol className={s.list}>
            {literature.slice(0, booksToShow).map(book => (
              <li key={book.name} className={s.listItem}>
                {book.name} <span className={s.author}>{book.author}</span>
              </li>
            ))}
          </ol>
          {literature.length > 3 && (
            <button
              id="literature"
              className={s.showMoreButton}
              onClick={onShowMore}
            >
              {extendedLiterature ? 'Roll up' : 'Show more'}
            </button>
          )}
        </div>

        <div className={s.useful}>
          <h2 className={s.title}>Useful resources</h2>
          <ol className={s.list}>
            {sources.slice(0, sourcesToShow).map(source => (
              <li key={source.name} className={s.listItem}>
                <a
                  className={s.listLink}
                  href={source.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {source.name}
                </a>
              </li>
            ))}
          </ol>
          {sources.length > 3 && (
            <button
              id="sources"
              className={s.showMoreButton}
              onClick={onShowMore}
            >
              {extendedSources ? 'Roll up' : 'Show more'}
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default UseFulInfoView;
