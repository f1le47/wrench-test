import s from './Article.module.scss';
import { IArticle } from './IArticle';

const Article = ({title, text}: IArticle) => {
  return (
    <article className={s.article}>
      <h2 className={s.title}>{title}</h2>
      <p className={s.text}>{text}</p>
    </article>
  );
};

export default Article;