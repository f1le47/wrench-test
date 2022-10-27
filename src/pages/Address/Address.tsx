import AddressForm from '@components/AddressForm/AddressForm';
import Content from '@components/Content/Content';
import s from './Address.module.scss';

const Address = () => {
  return (
    <main className={s.address}>
      <Content title="Поиск адресов">
        <AddressForm />
      </Content>
    </main>
  );
};

export default Address;