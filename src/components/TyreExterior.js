import { range } from '@laufire/utils/collection';
import { React } from 'react';
import Circle from './Circle';

const tyreCount = 2;
const multiplier = 700;
const margin = 360;

const outerTyres = range(0, tyreCount).map((number) => ({
	left: (number * multiplier) + margin,
}));

const TyreExterior = () =>
	outerTyres.map((outerTyre, index) =>
		<Circle
			key={ index }
			{ ...{ ...outerTyre,
				style: 'tyre' } }
		/>);

export default TyreExterior;
