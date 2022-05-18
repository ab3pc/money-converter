import React from 'react';
import { Iinput } from 'store/slices/moneyValues/types';
import {selectValues } from '../types';
import styles from './ConverterItem.module.scss';
import iconUA from 'img/ua.png'
import iconUSD from 'img/usd.png'
import iconEUR from 'img/eu.png'
interface IProps {
  input:Iinput,
  onChangeSelect: (e:React.ChangeEvent<HTMLSelectElement>)=>  void, 
  onChangeInput: (e:React.ChangeEvent<HTMLInputElement>)=>  void,
  values:string
}

const ConverterItem:React.FC<IProps> = ({input, onChangeSelect, onChangeInput, values}) => {

  const icoValues = {
      USD: iconUSD,
      UAH: iconUA,
      EUR: iconEUR
  }

  return (
    <div className={styles.converter__item}>
    <div className={styles.converter__select}>
      <div><img width={30} height={30} src={icoValues[input.activeSelect]} alt={`${input.activeSelect}`} /> </div>
      <select
        name="selectMoney"
        defaultValue={input.activeSelect}
        onChange={onChangeSelect}
      >
        <option value={'USD'}>{selectValues.USD}</option>
        <option value={'EUR'}>{selectValues.EUR}</option>
        <option value={'UAH'}>{selectValues.UAH}</option>
      </select>
    </div>
    <div className={styles.input__container}>
      <input className={styles.input} placeholder='0' type="number" value={input.input} onChange={onChangeInput}/>
      <div className={styles.moneyValForOne}>{values}</div>
    </div>
  </div>
  )
}

export default ConverterItem