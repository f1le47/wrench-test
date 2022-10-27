import s from './Address.module.scss';
import { IAddress } from './IAddress';

const Address = ({address}: IAddress) => {
  return (
    <div className={s.address}>
      <span className={s.address__text}>{address}</span>
    </div>
  );
};

export default Address;