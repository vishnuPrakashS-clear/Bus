import { range } from '@laufire/utils/collection';
import { React } from 'react';
import TyreStyle from './TyreStyle';

const tyreCount = 2;
const multiplier = 700;
const margin = 380;

const tyreInteriors = range(0, tyreCount).map((number) => ({
	left: (number * multiplier) + margin,
	size: 78,
	top: 599,
}));

const TyreInteriors = () =>
	tyreInteriors.map((TyreInterior, index) =>
		<TyreStyle
			key={ index }
			{ ...{ ...TyreInterior,
				style: 'rim' } }
		/>);

export default TyreInteriors;
