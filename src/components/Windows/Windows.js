import { React } from 'react';
import Square from './Square';

const Windows = (context) =>
	context.dimensions.windows.map((window, index) =>
		<Square key={ index } { ...{ ...context, data: window } }/>);

export default Windows;
