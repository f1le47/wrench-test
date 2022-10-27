import Link from './Link/Link';
import s from './Navbar.module.scss';
import {ReactComponent as MainIcon} from '@img/mainIcon.svg';
import {ReactComponent as AddressIcon} from '@img/addressIcon.svg';
import {ReactComponent as TablesIcon} from '@img/tablesIcon.svg';
import {ReactComponent as CalendarIcon} from '@img/calendarIcon.svg';
import {ReactComponent as MapsIcon} from '@img/mapsIcon.svg';
import {ReactComponent as WidgetsIcon} from '@img/widgetsIcon.svg';
import {ReactComponent as ExitIcon} from '@img/exitIcon.svg';
import {ReactComponent as Markright} from '@img/markright.svg';
import {ReactComponent as Markleft} from '@img/markleft.svg';
import Settings from './Settings/Settings';
import {  useState } from 'react';
import useResize from '@hooks/useResize';

const Navbar = () => {

  const windowWidth = useResize()
  const [isMenuOpened, setIsMenuOpened] = useState(windowWidth > 768)

  return (
    <aside className={s.navbar}>
      {isMenuOpened && (
        <div className={s.wrapper}>
          <span className={s.menu}>Меню</span>
          <nav className={s.nav}>
            <Link Icon={MainIcon} text="Главная" link="" />
            <Link Icon={AddressIcon} text="Поиск адресов" link="address" />
            <Link Icon={TablesIcon} text="Таблицы" link="tables" />
            <Link Icon={CalendarIcon} text="Календарь" link="calendar" />
            <Link Icon={MapsIcon} text="Карты" link="maps" />
            <Link Icon={WidgetsIcon} text="Виджеты" link="widgets" />
            <Settings />
            <Link Icon={ExitIcon} text="Выход" link="exit" />
          </nav>
        </div>
      )}
      <div 
        className={isMenuOpened ? s.mark : `${s.mark} ${s.mark_closed}`}
        onClick={() => setIsMenuOpened(prev => !prev)}
      >
        {isMenuOpened ? <Markleft className={s.mark__icon} /> : <Markright className={s.mark__icon} />}
      </div>
    </aside>
  );
};

export default Navbar;