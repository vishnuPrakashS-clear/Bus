import { range } from '@laufire/utils/collection';
import { React } from 'react';
import Circle from './Circle';

const tyreCount = 2;
const multiplier = 700;
const margin = 380;

const tyreInteriors = range(0, tyreCount).map((number) => ({
	left: (number * multiplier) + margin,

}));

const TyreInteriors = () =>
	tyreInteriors.map((TyreInterior, index) =>
		<Circle
			key={ index }
			{ ...{ ...TyreInterior,
				style: 'rim' } }
		/>);

export default TyreInteriors;
