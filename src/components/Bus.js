import { React } from 'react';
import Tyre from './Tyres/Tyre';
import Door from './Doors/Door';
import Windows from './Windows/Windows';
import Roof from './ExtraFittings/Roof';
import FrontGlass from './ExtraFittings/FrontGlass';
import Compartment from './ExtraFittings/Compartments';

const style = (context) => {
	const { config: { dimension: { busBody: { top, left,
		height, width, busBodyColor }}}} = context;

	return {
		top: `${ top }px`,
		left: `${ left }px`,
		height: `${ height }px`,
		width: `${ width }px`,
		position: 'absolute',
		backgroundColor: busBodyColor,
	};
};
const Bus = (context) =>
	<div className="busBody" style={ style(context) }>
		<Tyre { ...context }/>
		<Door { ...context }/>
		<FrontGlass { ...context }/>
		<Windows/>
		<Roof { ...context }/>
		<Compartment { ...context }/>
	</div>;

export default Bus;
