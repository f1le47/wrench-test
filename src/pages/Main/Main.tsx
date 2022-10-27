import Article from '@components/Article/Article';
import Content from '@components/Content/Content';
import { useAppSelector } from '@src/hooks/redux';
import s from './Main.module.scss';

const Main = () => {

  const articles = useAppSelector(state => state.article.articles)

  return (
    <main className={s.main}>
      <Content title="Новости">
        {articles.map(art => {
          return (
            <Article 
              title="Обновление CRM до 1.2"
              article={art}
              key={art.id}
            />
          )
        })}
      </Content>
    </main>
  );
};

export default Main;