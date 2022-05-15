import { ISelectValues } from './../../../components/converter/types';
import { IMoneyValuesState } from './types';
import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { selectValues } from '../../../components/converter/types';



const initialState:IMoneyValuesState = {
	values: {
		UAH: 1,
		USD: 29.51111,
		EUR: 30.67111,
	},
	date: 'Sun, 15 May 2022 00:00:01',
	inputFrom: {
		input: '',
		activeSelect: selectValues.USD
	},
	inputTo: {
		input: '',
		activeSelect: selectValues.UAH,
	},

}

const moneyValues = createSlice({
	name: 'moneyValues',
	initialState,
	reducers: {
		setInputFrom: (state, action:PayloadAction<string>) => {
			state.inputFrom.input = action.payload;
						
		},
		setInputTo: (state, action:PayloadAction<string>) => {
			state.inputTo.input = action.payload;
			
		},
		resetValues: (state) => {
			state.inputFrom.input = '1';
		},
		selectValuesFrom: (state, action:PayloadAction<ISelectValues>) => {
			state.inputFrom.activeSelect = action.payload;
		
		},
		selectValuesTo: (state, action:PayloadAction<ISelectValues>) => {
			state.inputTo.activeSelect = action.payload;
	
		},
		recalcValuesFrom:(state) => {
			state.inputTo.input = (+state.inputFrom.input * state.values[state.inputFrom.activeSelect] / state.values[state.inputTo.activeSelect]).toFixed(5);
		},
		recalcValuesTo:(state ,action:PayloadAction<string>) => {
			if(action.payload) {
				state.inputTo.input = (+state.inputFrom.input * state.values[state.inputFrom.activeSelect] / state.values[state.inputTo.activeSelect]).toFixed(5);
			}
			else {
				state.inputFrom.input = (+state.inputTo.input * state.values[state.inputTo.activeSelect] / state.values[state.inputFrom.activeSelect]).toFixed(5);
			}
		},
	}
})

export const {resetValues, setInputFrom, setInputTo, selectValuesFrom, selectValuesTo, recalcValuesFrom, recalcValuesTo} = moneyValues.actions;
export default moneyValues.reducer;