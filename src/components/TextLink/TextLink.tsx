import selectLinkFromText from '@src/utils/selectFromLink';
import { ITextLink } from './ITextLink';
import s from './TextLink.module.scss';

const TextLink = ({text}: ITextLink) => {

  const {link, linkText, mark} = selectLinkFromText({text})

  return (
    <>
      <a 
      className={s.link}
      href={link}
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

export default TextLink;