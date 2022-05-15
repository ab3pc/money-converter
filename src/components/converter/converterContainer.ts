import { connect } from 'react-redux';
import { recalcValuesFrom, resetValues } from '../../store/slices/moneyValues/moneyValues-slice';
import { AppDispatch, RootState } from './../../store/store';
import Converter from './Converter';

const mapDispatchToProps = (dispatch:AppDispatch) => {
	return {

		handleBtnReset: () => { 
			dispatch(resetValues())
			dispatch(recalcValuesFrom())
		},
	 
	}
  }

const mapStateToProps = (state:RootState) => {

	return {
		values:state.moneyValues.values,
		date:state.moneyValues.date,
		inputTo:state.moneyValues.inputTo,
		inputFrom:state.moneyValues.inputFrom
	}
}

const ConverterContainer = connect(mapStateToProps, mapDispatchToProps)(Converter);
export default ConverterContainer;