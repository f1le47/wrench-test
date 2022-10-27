import selectLinkFromText from '@src/utils/selectFromLink';
import s from './EmailLink.module.scss';
import { IEmailLink } from './IEmailLink';

const EmailLink = ({text}: IEmailLink) => {

  const {link, linkText, mark} = selectLinkFromText({text})

  return (
    <>
      <a 
      className={s.link}
      href={`mailto:${link}`}
      target="_blank"
      rel="noreferrer"
      >
        {linkText}
      </a>
      {mark && `${mark}`}
      {' '}
    </>
  );
};

export default EmailLink;