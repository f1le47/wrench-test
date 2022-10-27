import s from './AddressForm.module.scss';
import {ReactComponent as AddressIcon} from '@img/addressIcon.svg'
import {ReactComponent as AddressIcon24} from '@img/24x24/addressIcon.svg';
import { useState } from 'react';
import useResize from '@hooks/useResize';
import { useActions } from '@hooks/redux';

const AddressForm = () => {

  const windowWidth = useResize()

  const [inputValue, setInputValue] = useState('')
  const isBtnDisabled = inputValue.length < 3 ? true : false

  const {getAddresses} = useActions()

  return (
    <form className={s.form} onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="address" className={s.label}>Введите интересующий вас адрес</label>
      <div className={s.inputs}>
        <input 
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          type="text" 
          placeholder="Введите интересующий вас адрес" 
          className={s.input}
          name="address"
        />
        <button className={s.button} disabled={isBtnDisabled} onClick={() => getAddresses({address: inputValue})}>
          {windowWidth > 768 ? <AddressIcon className={s.button__icon} /> : <AddressIcon24 className={s.button__icon} />}
          <span className={s.button__text}>Поиск</span>
        </button>
      </div>
    </form>
  );
};

export default AddressForm;