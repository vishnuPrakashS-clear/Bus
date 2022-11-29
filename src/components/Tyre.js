import { React } from 'react';

const tyreComponents = [
	'frontTyre',
	'backTyre',
	'innerFrontTyre',
	'innerBackTyre',

];

const Tyre = () => tyreComponents.map((tyre, key) =>
	<div key={ key } className={ `${ tyre }` }/>);

export default Tyre;
