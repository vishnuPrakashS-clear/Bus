import { React } from 'react';
import DoorStyle from './DoorStyle';

const InnerDoors = (context) =>
	context.config.dimension.innerDoors.map((innerDoor, index) =>
		<DoorStyle
			key={ index }
			{ ...{ ...context, data: innerDoor } }
		/>);

export default InnerDoors;
