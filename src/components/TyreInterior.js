import { range } from '@laufire/utils/collection';
import { React } from 'react';
import Circle from './Circle';

const tyreCount = 2;
const multiplier = 771;
const margin = 309;

const tyreInteriors = range(0, tyreCount).map((number) => ({
	left: (number * multiplier) + margin,
	top: 456,
}));

const TyreInteriors = () =>
	tyreInteriors.map((TyreInterior, index) =>
		<Circle
			key={ index }
			{ ...{ ...TyreInterior,
				style: 'rim' } }
		/>);

export default TyreInteriors;
