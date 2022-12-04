import { React } from 'react';
import MainDoor from './MainDoor';
import InnerDoors from './InnerDoors';

const Door = (context) => <div>
	<MainDoor { ...context }/>
	<InnerDoors { ...context }/>
</div>;

export default Door;
