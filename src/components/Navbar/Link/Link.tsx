import { NavLink } from 'react-router-dom';
import { ILink } from './ILink';
import s from './Link.module.scss';

const Link = ({Icon, text, link}: ILink) => {
  return (
    <NavLink 
      to={`/${link}`} 
      className={s.link}
      end
    >
      {({isActive}: {isActive: boolean}) => (
        <>
          <div className={s.iconWrapper}>
            <Icon className={s.icon} />
          </div>
          <span className={s.text}>{text}</span>
          <div className={isActive ? s.active : ''}></div>
        </>
      )}
    </NavLink>
  );
};

export default Link;