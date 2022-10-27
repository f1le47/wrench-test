import s from './Logo.module.scss';
import {ReactComponent as LogoIcon} from '@img/logo.svg';
import {ReactComponent as LogoIcon36} from '@img/36x36/logo.svg';
import useResize from '@hooks/useResize';

const Logo = () => {

  const windowWidth = useResize()

  return (
    <div className={s.logo}>
      {windowWidth > 768 ? <LogoIcon className={s.logo__icon} /> : <LogoIcon36 className={s.logo__icon} />}
      <span className={s.logo__text}>Wrench CRM</span>
    </div>
  );
};

export default Logo;