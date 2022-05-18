import React from "react";
import styles from "./Converter.module.scss";
import ConverterItem from "./converter-item/ConverterItem";
import { getInputPlaceholderValues } from "utils/utils";
import IconReset from "img/IconReset";
import { useConverter } from "./hook";
import { useAppSelector } from "store/store";

const Converter: React.FC = () => {
  const {
    handleBtnReset,
    handleChangeInputFrom,
    handleChangeSelectFrom,
    handleChangeInputTo,
    handleChangeSelectTo,
    handleGetMoneyValues
  } = useConverter();
  const { values, date, inputTo, inputFrom } = useAppSelector((state) => state.moneyValues);

  React.useEffect(() => {
    handleGetMoneyValues();
  }, []);

  return (
    <div className={styles.converter}>
      <div className={styles.converter__date}>
        Welcome "userName"
        <p> Last update: {date}</p>
      </div>

      <div className={styles.converter__container}>
        <div className={styles.converter__from}>
          <ConverterItem
            onChangeSelect={handleChangeSelectFrom}
            onChangeInput={handleChangeInputFrom}
            input={inputFrom}
            values={
              getInputPlaceholderValues(
                inputFrom.activeSelect,
                inputTo.activeSelect,
                values
              )[0]
            }
          />
        </div>
        <div className={styles.converter__reverse}>
          <button title="reset values" onClick={handleBtnReset}>
            <IconReset />
          </button>
        </div>
        <div className={styles.converter__to}>
          <ConverterItem
            onChangeSelect={handleChangeSelectTo}
            onChangeInput={handleChangeInputTo}
            input={inputTo}
            values={
              getInputPlaceholderValues(
                inputFrom.activeSelect,
                inputTo.activeSelect,
                values
              )[1]
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Converter;
