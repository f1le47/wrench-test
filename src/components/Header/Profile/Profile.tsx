import s from './Profile.module.scss';
import {ReactComponent as DefaultUserImg} from '@img/defaultUserImg.svg'
import {ReactComponent as DefaultUserImg36} from '@img/36x36/defaultUserImg.svg';
import useResize from '@hooks/useResize';

const Profile = () => {

  const windowWidth = useResize()

  return (
    <div className={s.profile}>
      {windowWidth > 768 ? <DefaultUserImg className={s.profile__img} /> : <DefaultUserImg36 className={s.profile__img} />}
      <span className={s.profile__name}>Оспищев Матвей</span>
    </div>
  );
};

export default Profile;