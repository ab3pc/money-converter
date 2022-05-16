import { IMoneyValuesState } from './../../store/slices/moneyValues/types';
export enum selectValues {
	USD = 'USD',
	UAH = 'UAH',
	EUR = 'EUR'
}
export type ISelectValues = selectValues.USD | selectValues.UAH | selectValues.EUR;

export interface IContainerProps extends IMoneyValuesState{
	handleBtnReset:()=> void,
	onChangeInputFromHandler:(e: React.ChangeEvent<HTMLInputElement>)=> void,
	onChangeSelectFromHandler:(e:React.ChangeEvent<HTMLSelectElement>)=> void,
	onChangeSelectToHandler:(e:React.ChangeEvent<HTMLSelectElement>)=> void,
	onChangeInputToHandler:(e: React.ChangeEvent<HTMLInputElement>)=> void,
	getMoneyValuesHandler:() => void
	//onChangeSelectFromHandler:()=> void
}