/* eslint-disable no-magic-numbers */
import { range } from '@laufire/utils/collection';
import { rndValue } from '@laufire/utils/random';

const extTyreCount = 2;
const extMultiplier = 771;
const extMargin = 289;

const intTyreCount = 2;
const intMultiplier = 771;
const intMargin = 304;

const doorCount = 2;
const doorMultiplier = 85;
const doorMargin = 510;

const windowCount = 3;
const windowMultiplier = 198;
const windowMargin = 740;

const colors = ['firebrick', 'teal', 'navy'];

const getBusBody = ({ size, x, y, direction, animation }) => ({
	top: (70 * size) + y,
	left: (100 * size) + x,
	height: 480 * size,
	width: 1350 * size,
	busBodyColor: rndValue(colors),
	transform: direction,
	animation: animation,
	borderRadius: {
		topLeft: 100 * size,
		topRight: 50 * size,
		bottomLeft: 50 * size,
		bottomRight: 50 * size,
	},
});

const getRoof = ({ size }) => ({
	top: -27 * size,
	left: 100 * size,
	width: 1200 * size,
	height: 20 * size,
	borderRadius: {
		topLeft: 50 * size,
		topRight: 50 * size,
		bottomLeft: 0,
		bottomRight: 0,
	},
	border: 5 * size,
});

const getFrontGlass = ({ size }) => ({
	top: 0,
	left: 0,
	height: 208 * size,
	width: 97 * size,
	borderRadius: {
		topLeft: 100 * size,
		topRight: 50 * size,
		bottomLeft: 0,
		bottomRight: 0,
	},
});

const getMainDoor = ({ size }) => ({
	top: 135 * size,
	left: 500 * size,
	height: 329 * size,
	width: 183 * size,
	borderRadius: 10 * size,
});

const getTyreExteriors = ({ size }) => range(0, extTyreCount).map((number) => ({
	left: ((number * extMultiplier) + extMargin) * size,
	top: 437 * size,
	height: 100 * size,
	width: 100 * size,
	borderRadius: 500 * size,
	border: 10 * size,
}));

const getTyreInteriors = ({ size }) => range(0, intTyreCount).map((number) => ({
	left: ((number * intMultiplier) + intMargin) * size,
	top: 453 * size,
	height: 78 * size,
	width: 78 * size,
	borderRadius: 500 * size,
	border: 5 * size,
}));

const getLuggageDoorHandle = ({ size }) => ({
	top: 430 * size,
	left: 840 * size,
	height: 4 * size,
	width: 38 * size,
	border: 5 * size,
});

const getLuggageDoor = ({ size }) => ({
	top: 332 * size,
	left: 740 * size,
	height: 120 * size,
	width: 240 * size,
	borderRadius: 10 * size,
	border: 10 * size,
});

const getWindows = ({ size }) =>
	range(0, windowCount).map((number) => ({
		left: ((number * windowMultiplier) + windowMargin) * size,
		width: 130 * size,
		height: 130 * size,
		top: 30 * size,
	}));

const getInnerDoor = ({ size }) =>
	range(0, doorCount).map((number) => ({
		left: ((number * doorMultiplier) + doorMargin) * size,
		top: 154 * size,
		height: 298 * size,
		width: 78 * size,
		borderRadius: 10 * size,
	}));

const getBusDimensions = (data) => ({
	busBody: getBusBody(data),
	roof: getRoof(data),
	frontGlass: getFrontGlass(data),
	outerTyre: getTyreExteriors(data),
	innerTyre: getTyreInteriors(data),
	luggageDoorHandle: getLuggageDoorHandle(data),
	luggageDoor: getLuggageDoor(data),
	windows: getWindows(data),
	innerDoor: getInnerDoor(data),
	outerDoor: getMainDoor(data),

});

export default getBusDimensions;
