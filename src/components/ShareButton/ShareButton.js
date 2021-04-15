import React from 'react';
import s from './ShareButton.module.css';
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  PinterestShareButton,
  TelegramShareButton,
  // EmailShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  PinterestIcon,
  TelegramIcon,
  // EmailIcon,
} from 'react-share';

const ShareButton = () => {
  const size = '2.0rem';
  const title = 'Test results';
  const url = 'https://final-group-project-react-front.netlify.app/result';

  return (
    <>
      <h1 className={s.title}>Share on social media</h1>
      <div className={s.wrap}>
        <FacebookShareButton className={s.share_custom} title={title} url={url}>
          <FacebookIcon size={size} />
        </FacebookShareButton>

        <TwitterShareButton className={s.share_custom} title={title} url={url}>
          <TwitterIcon size={size} />
        </TwitterShareButton>

        <LinkedinShareButton
          className={s.share_custom}
          url={url}
          title={title}
          windowWidth={750}
          windowHeight={600}
        >
          <LinkedinIcon size={size} />
        </LinkedinShareButton>

        <PinterestShareButton
          className={s.share_custom}
          url={url}
          title={title}
          // url={String(window.location)}
          // media={`${shareImage}`}
          windowWidth={1000}
          windowHeight={730}
        >
          <PinterestIcon size={size} />
        </PinterestShareButton>

        <TelegramShareButton className={s.share_custom} title={title} url={url}>
          <TelegramIcon size={size} />
        </TelegramShareButton>

        {/* <EmailShareButton className={s.share_custom}
                title={title}
                url={url}
          >
            <EmailIcon
              size={size}
            />
                </EmailShareButton> */}
      </div>
    </>
  );
};

export default ShareButton;
