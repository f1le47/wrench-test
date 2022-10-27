import s from './Settings.module.scss';
import {ReactComponent as SettingsIcon} from '@img/settingsIcon.svg';
import {ReactComponent as Markup} from '@img/markup.svg';
import {ReactComponent as Markdown} from '@img/markdown.svg';
import {ReactComponent as ProfileSettingsIcon} from '@img/profileSettingsIcon.svg';
import {ReactComponent as FinanceManagmentIcon} from '@img/financeManagmentIcon.svg';
import { useState } from 'react';
import Link from '../Link/Link';

const Settings = () => {

  const [isSettingsShown, setIsSettingsShown] = useState(false)

  return (
    <div className={s.settings}>
      <div 
        className={s.button}
        onClick={() => setIsSettingsShown(prev => !prev)}
      >
        <div className={s.iconWrapper}>
          <SettingsIcon className={s.icon} />
        </div>
        <span className={s.text}>Настройки</span>
        {isSettingsShown ? <Markup className={s.mark} /> : <Markdown className={s.mark} />}
      </div>
      {isSettingsShown && (
        <div className={s.addButtons}>
          <Link Icon={ProfileSettingsIcon} link="profile-settings" text="Настройки профиля" />
          <Link Icon={FinanceManagmentIcon} link="finance-managment" text="Управление финансами" />
        </div>
      )}
    </div>
  );
};

export default Settings;