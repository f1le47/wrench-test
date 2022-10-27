import s from './Header.module.scss';
import Logo from './Logo/Logo';
import Profile from './Profile/Profile';

const Header = () => {
  return (
    <header className={s.header}>
        <Logo />
        <Profile />
    </header>
  );
};

export default Header;