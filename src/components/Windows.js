import { range } from '@laufire/utils/collection';
import { React } from 'react';
import Window from './Window';

const windowCount = 4;
const multiplier = 380;
const windows = range(1, windowCount).map((number) => ({
	left: number * multiplier,
	size: 110,
	top: 80,
	width: 190,
}));

const Windows = () =>
	windows.map((window, index) =>
		<Window key={ index } { ...window }/>);

export default Windows;
