import EmailLink from '../EmailLink/EmailLink';
import TextLink from '../TextLink/TextLink';
import s from './Article.module.scss';
import { IArticle } from './IArticle';

const Article = ({title, article}: IArticle) => {

  const linkRegExp = /^\(((https?|ftp):\/\/)?([a-z0-9]{1})((\.[a-z0-9-])|([a-z0-9-]))*\.([a-z]{2,6})(\/?)\)\[.*\]\.?$/
  const mailRegExp = /^\(([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}\)\[.*\]\.?$/

  const textArr = article.text.split(' ')


  return (
    <article className={s.article}>
      <h2 className={s.title}>{title}</h2>
      <p className={s.text}>
        {textArr.map(el => {
          if (linkRegExp.test(el)) {
            return <TextLink key={article.id} text={el}  />
          }
          if (mailRegExp.test(el)) {
            return <EmailLink key={article.id} text={el} />
          }

          return el + ' '
        })}
      </p>
    </article>
  );
};

export default Article;