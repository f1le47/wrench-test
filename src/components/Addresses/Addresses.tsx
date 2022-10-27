import Address from './Address/Address';
import s from './Addresses.module.scss';
import { IAddresses } from './IAddresses';

const Addresses = ({addresses}: IAddresses) => {
  return (
    <div className={s.addresses}>
      <h2 className={s.title}>Адреса</h2>
      {addresses.map(address => {
        return (
          <Address address={address} />
        )
      })}
    </div>
  );
};

export default Addresses;