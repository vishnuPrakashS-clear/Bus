import { range } from '@laufire/utils/collection';
import { React } from 'react';
import TyreStyle from './TyreStyle';

const tyreCount = 2;
const multiplier = 700;
const margin = 360;

const outerTyres = range(0, tyreCount).map((number) => ({
	left: (number * multiplier) + margin,
	size: 100,
	top: 580,
}));

const TyreExterior = () =>
	outerTyres.map((outerTyre, index) =>
		<TyreStyle
			key={ index }
			{ ...{ ...outerTyre,
				style: 'tyre' } }
		/>);

export default TyreExterior;
