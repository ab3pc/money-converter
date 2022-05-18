import { ISelectValues } from "./types";
import { connect } from "react-redux";
import {
  getMoneyValuesAsync,
  recalcValuesFrom,
  recalcValuesTo,
  resetValues,
  selectValuesFrom,
  selectValuesTo,
  setInputFrom,
  setInputTo,
} from "store/slices/moneyValues/moneyValues-slice";
import { AppDispatch, RootState } from "store/store";
import Converter from "./Converter";

const mapDispatchToProps = (dispatch: AppDispatch) => {
  return {
    handleBtnReset: () => {
      dispatch(resetValues());
      dispatch(recalcValuesFrom());
    },
    onChangeInputFromHandler: (e: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(setInputFrom(e.target.value));
      dispatch(recalcValuesFrom());
    },

    onChangeSelectFromHandler: (e: React.ChangeEvent<HTMLSelectElement>) => {
      dispatch(selectValuesFrom(e.target.value as ISelectValues));
      dispatch(recalcValuesFrom());
    },
    onChangeInputToHandler: (e: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(setInputTo(e.target.value));
      dispatch(recalcValuesTo(""));
    },

    onChangeSelectToHandler: (e: React.ChangeEvent<HTMLSelectElement>) => {
      const typeSelect = e.target.value as ISelectValues;
      dispatch(selectValuesTo(typeSelect));
      dispatch(recalcValuesTo("renderRightSide"));
    },
    getMoneyValuesHandler: () => {
      dispatch(getMoneyValuesAsync());
    },
  };
};

const mapStateToProps = (state: RootState) => {
  return {
    values: state.moneyValues.values,
    date: state.moneyValues.date,
    inputTo: state.moneyValues.inputTo,
    inputFrom: state.moneyValues.inputFrom,
  };
};

const ConverterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Converter);
export default ConverterContainer;
