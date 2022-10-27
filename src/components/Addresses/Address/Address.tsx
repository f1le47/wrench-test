import s from './Address.module.scss';
import { IAddress } from './IAddress';

const Address = ({address}: IAddress) => {
  return (
    <span className={s.address}>
      {address}
    </span>
  );
};

export default Address;