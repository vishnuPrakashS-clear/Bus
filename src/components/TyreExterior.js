import { range } from '@laufire/utils/collection';
import { React } from 'react';
import Circle from './Circle';

const tyreCount = 2;
const multiplier = 771;
const margin = 289;

const outerTyres = range(0, tyreCount).map((number) => ({
	left: (number * multiplier) + margin,
	top: 437,
}));

const TyreExterior = () =>
	outerTyres.map((outerTyre, index) =>
		<Circle
			key={ index }
			{ ...{ ...outerTyre,
				style: 'tyre' } }
		/>);

export default TyreExterior;
