import { range } from '@laufire/utils/collection';
import { React } from 'react';
import Tyres from './Tyres';

const tyreCount = 2;
const multiplier = 700;
const margin = 360;

const tyres = range(0, tyreCount).map((number) => ({
	left: (number * multiplier) + margin,
	size: 120,
	top: 580,
}));

const BusTyres = () =>
	tyres.map((tyre, index) =>
		<Tyres key={ index } { ...tyre }/>);

export default BusTyres;
