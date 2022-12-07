import { React } from 'react';
import Tyre from './Tyres/Tyre';
import Door from './Doors/Door';
import Windows from './Windows/Windows';
import Roof from './ExtraFittings/Roof';
import FrontGlass from './ExtraFittings/FrontGlass';
import Compartment from './ExtraFittings/Compartments';

const style = (context) => {
	const { dimensions: { busBody: { top, left,
		height, width, busBodyColor, borderRadius,
		transform, animation }}} = context;

	return {
		top: `${ top }px`,
		left: `${ left }px`,
		height: `${ height }px`,
		width: `${ width }px`,
		position: 'absolute',
		borderTopLeftRadius: `${ borderRadius.topLeft }px`,
		borderTopRightRadius: `${ borderRadius.topRight }px`,
		borderBottomLeftRadius: `${ borderRadius.bottomLeft }px`,
		borderBottomRightRadius: `${ borderRadius.bottomRight }px`,
		backgroundColor: busBodyColor,
		transform: `scaleX(${ transform })`,
		animation: `${ animation } 5s infinite linear`,
	};
};
const Bus = (context) =>
	<div className="busBody" style={ style(context) }>
		<Tyre { ...context }/>
		<Door { ...context }/>
		<FrontGlass { ...context }/>
		<Windows { ...context }/>
		<Roof { ...context }/>
		<Compartment { ...context }/>
	</div>;

export default Bus;
