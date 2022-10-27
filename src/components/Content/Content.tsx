import s from './Content.module.scss';
import { IContent } from './IContent';

const Content = ({title, children}: IContent) => {
  return (
    <div className={s.content}>
      <h1 className={s.title}>{title}</h1>
      {children}
    </div>
  );
};

export default Content;