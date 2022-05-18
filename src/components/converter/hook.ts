import { ISelectValues } from "./types";
import { useAppDispatch } from "./../../store/store";
import { useCallback } from "react";
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

interface UseConvertReturn {
  handleBtnReset: () => void;
  handleChangeInputFrom: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleChangeSelectFrom: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  handleChangeInputTo: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleChangeSelectTo: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  handleGetMoneyValues: () => void;
}

export const useConverter = (): UseConvertReturn => {
  const dispatch = useAppDispatch();

  const handleBtnReset = useCallback(() => {
    dispatch(resetValues());
    dispatch(recalcValuesFrom());
  }, []);

  const handleChangeInputFrom = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(setInputFrom(e.target.value));
      dispatch(recalcValuesFrom());
    }, []);

  const handleChangeSelectFrom = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      dispatch(selectValuesFrom(e.target.value as ISelectValues));
      dispatch(recalcValuesFrom());
    }, []);
  const handleChangeInputTo = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      dispatch(setInputTo(e.target.value));
      dispatch(recalcValuesTo(""));
    }, []);
  const handleChangeSelectTo = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      dispatch(selectValuesTo(e.target.value as ISelectValues));
      dispatch(recalcValuesTo("renderRightSide"));
    }, []);
  const handleGetMoneyValues = useCallback(() => {
    dispatch(getMoneyValuesAsync());
  }, []);

  return {
    handleBtnReset,
    handleChangeInputFrom,
    handleChangeSelectFrom,
    handleChangeInputTo,
    handleChangeSelectTo,
	handleGetMoneyValues
  };
};
