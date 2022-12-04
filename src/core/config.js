import { range } from '@laufire/utils/collection';
import { rndValue } from '@laufire/utils/random';

const extTyreCount = 2;
const extMultiplier = 771;
const extMargin = 289;

const intTyreCount = 2;
const intMultiplier = 771;
const intMargin = 309;

const colors = ['firebrick', 'CrimsonRed', 'yellow'];
const config = {

	dimension: {

		busBody: {
			top: 70,
			left: 100,
			height: 480,
			width: 1350,
			busBodyColor: rndValue(colors),
		},

		luggageDoor: {
			top: 332,
			left: 740,
			height: 120,
			width: 240,
		},

		luggageDoorHandle: {
			top: 430,
			left: 840,
			height: 4,
			width: 38,
		},

		roof: {
			top: -27,
			left: 100,
			width: 1200,
			height: 20,
		},

		frontGlass: {
			top: 0,
			left: 0,
			height: 208,
			width: 97,
		},

		mainDoor: {
			top: 135,
			left: 500,
			height: 329,
			width: 183,
		},

		tyreExteriors: range(0, extTyreCount).map((number) => ({
			left: (number * extMultiplier) + extMargin,
			top: 437,
			height: 100,
			width: 100,
		})),

		tyreInteriors: range(0, intTyreCount).map((number) => ({
			left: (number * intMultiplier) + intMargin,
			top: 456,
			height: 78,
			width: 78,
		})),
	},
};

export default config;
