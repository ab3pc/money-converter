import { ISelectValues } from './../components/converter/types';
import { IValues } from "../store/slices/moneyValues/types"

export 	const getInputPlaceholderValues = (from:ISelectValues, to:ISelectValues, values:IValues) => {
	const strInInput = [`1 ${from} = ${(values[from] /values[to]).toFixed(5)} ${to}`, 
						`1 ${to} = ${(values[to] / values[from]).toFixed(5)} ${from} `]
	return strInInput
}