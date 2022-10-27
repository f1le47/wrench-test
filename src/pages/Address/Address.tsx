import AddressForm from '@components/AddressForm/AddressForm';
import Content from '@components/Content/Content';
import Addresses from '@src/components/Addresses/Addresses';
import { useAppSelector } from '@src/hooks/redux';
import s from './Address.module.scss';

const Address = () => {

  const addresses = useAppSelector(state => state.address.addresses)

  return (
    <main className={s.address}>
      <Content title="Поиск адресов">
        <AddressForm />
        <Addresses addresses={addresses} />
      </Content>
    </main>
  );
};

export default Address;