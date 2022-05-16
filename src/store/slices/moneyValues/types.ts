import { ISelectValues } from './../../../components/converter/types';


export interface IMoneyValuesState {
		values: {
			UAH: number,
			USD: number,
			EUR: number,
		},
		date: string,
		inputFrom: Iinput,
		inputTo: Iinput,
	
	
}
export interface Iinput {
	input: number | string,
	activeSelect: ISelectValues
}
export interface IValues {
	UAH: number,
	USD: number,
	EUR: number,
}