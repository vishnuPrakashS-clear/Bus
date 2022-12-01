import { range } from '@laufire/utils/collection';
import { React } from 'react';
import Square from './Square';

const windowCount = 3;
const multiplier = 230;
const adder = 740;

const windows = range(0, windowCount).map((number) => ({
	left: (number * multiplier) + adder,
	size: 130,
	top: 164,
}));

const Windows = () =>
	windows.map((window, index) =>
		<Square key={ index } { ...window }/>);

export default Windows;
