import { React } from 'react';
import Tyre from './Tyre';
import Door from './Door';
import Windows from './Windows';
import Roof from './Roof';
import FrontGlass from './FrontGlass';
import Compartment from './Compartments';

const style = (context) => {
	const { config: { dimension: { busBody: { top, left,
		height, width }}}} = context;

	return {
		top: `${ top }px`,
		left: `${ left }px`,
		height: `${ height }px`,
		width: `${ width }px`,
		position: 'absolute',
	};
};
const Bus = (context) =>
	<div className="busBody" style={ style(context) }>
		<Tyre { ...context }/>
		<Door/>
		<FrontGlass { ...context }/>
		<Windows/>
		<Roof { ...context }/>
		<Compartment { ...context }/>
	</div>;

export default Bus;
