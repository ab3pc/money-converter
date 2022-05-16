import React from "react";
import styles from "./Converter.module.scss";
import ConverterItem from "./converter-item/ConverterItem";
import { IContainerProps } from "./types";
import { getFooterValuesToInput } from "../../utils/utils";

const Converter = ({
  values,
  date,
  inputTo,
  inputFrom,
  handleBtnReset,
  onChangeInputFromHandler,
  onChangeSelectFromHandler,
  onChangeInputToHandler,
  onChangeSelectToHandler,
  getMoneyValuesHandler
}: IContainerProps) => {

	React.useEffect(() => {
		getMoneyValuesHandler();
	}, [])
		
  return (
    <div className={styles.converter}>
      <div className={styles.converter__date}>Welcome "userName" :) 
		  <p> Last update: {date}</p>
		 </div>

      <div className={styles.converter__container}>
        <div className={styles.converter__from}>
          <ConverterItem
            onChangeSelect={onChangeSelectFromHandler}
            onChangeInput={onChangeInputFromHandler}
            input={inputFrom}
			values ={ getFooterValuesToInput(inputFrom.activeSelect,inputTo.activeSelect, values)[0]}
          />
        </div>
        <div className={styles.converter__reverse}>
          <button title="reset values" onClick={handleBtnReset}>
            <svg
              width={30}
              height={30}
              version="1.1"
              id="Capa_1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 489.645 489.645"
            >
              <g>
                <path
                  d="M460.656,132.911c-58.7-122.1-212.2-166.5-331.8-104.1c-9.4,5.2-13.5,16.6-8.3,27c5.2,9.4,16.6,13.5,27,8.3
		c99.9-52,227.4-14.9,276.7,86.3c65.4,134.3-19,236.7-87.4,274.6c-93.1,51.7-211.2,17.4-267.6-70.7l69.3,14.5
		c10.4,2.1,21.8-4.2,23.9-15.6c2.1-10.4-4.2-21.8-15.6-23.9l-122.8-25c-20.6-2-25,16.6-23.9,22.9l15.6,123.8
		c1,10.4,9.4,17.7,19.8,17.7c12.8,0,20.8-12.5,19.8-23.9l-6-50.5c57.4,70.8,170.3,131.2,307.4,68.2
		C414.856,432.511,548.256,314.811,460.656,132.911z"
                />
              </g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
              <g></g>
            </svg>
          </button>
        </div>
        <div className={styles.converter__to}>
          <ConverterItem
            onChangeSelect={onChangeSelectToHandler}
            onChangeInput={onChangeInputToHandler}
            input={inputTo}
			values ={ getFooterValuesToInput(inputFrom.activeSelect,inputTo.activeSelect, values)[1]}
          />
        </div>
      </div>
    </div>
  );
};

export default Converter;
