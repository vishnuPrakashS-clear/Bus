import { React } from 'react';

const glassComponents = [
	'frontGlass',
];

const Glasses = () => glassComponents.map((glass, key) =>
	<div key={ key } className={ `${ glass }` }/>);

export default Glasses;
