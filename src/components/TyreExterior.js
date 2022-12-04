import { React } from 'react';
import Circle from './Circle';

const TyreExterior = ({ dimension }) =>
	dimension.tyreExteriors.map((outerTyre, index) =>
		<Circle
			key={ index }
			{ ...{ ...outerTyre,
				style: 'tyre' } }
		/>);

export default TyreExterior;
