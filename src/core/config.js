import { rndValue } from '@laufire/utils/random';

const colors = ['firebrick', 'CrimsonRed', 'yellow'];
const config = {
	busBodyColor: rndValue(colors),
	dimension: {
		busBody: {
			top: 70,
			left: 100,
			height: 480,
			width: 1350,
		},
		luggageDoor: {
			top: 332,
			left: 740,
			height: 120,
			width: 240,
		},
		luggageDoorFrame: {
			top: 354,
			left: 753,
			height: 95,
			width: 226,
		},
	},
};

export default config;
