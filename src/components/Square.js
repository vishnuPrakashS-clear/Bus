import { React } from 'react';

const defaultTop = 300;
const defaultLeft = 300;

const Square = ({ top = defaultTop, left = defaultLeft }) =>
	<div className="outerBox" style={ { top: `${ top }px`, left: `${ left }px` } }/>;

export default Square;
