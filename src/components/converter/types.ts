import { IMoneyValuesState } from './../../store/slices/moneyValues/types';
export enum selectValues {
	USD = 'USD',
	UAH = 'UAH',
	EUR = 'EUR'
}
export type ISelectValues = selectValues.USD | selectValues.UAH | selectValues.EUR;

export interface IContainerProps extends IMoneyValuesState{
	handleBtnReset:()=> void
}