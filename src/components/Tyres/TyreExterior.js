import { React } from 'react';
import Circle from './Circle';

const TyreExterior = (context) =>
	context.dimensions.outerTyre.map((outerTyre, index) =>
		<Circle
			key={ index }
			{ ...{ ...outerTyre,
				style: 'tyre', border: `${ outerTyre.border }px solid black` } }
		/>);

export default TyreExterior;
