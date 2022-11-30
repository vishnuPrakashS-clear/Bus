import { range } from '@laufire/utils/collection';
import { React } from 'react';
import Window from './Window';

const windowCount = 3;
const multiplier = 230;
const adder = 740;

const windows = range(0, windowCount).map((number) => ({
	left: (number * multiplier) + adder,
	size: 130,
	top: 90,
}));

const Windows = () =>
	windows.map((window, index) =>
		<Window key={ index } { ...window }/>);

export default Windows;
