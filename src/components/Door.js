import { React } from 'react';
import InnerDoors from './InnerDoors';
import MainDoor from './MainDoor';

const Door = ({ config }) => <div>
	<MainDoor { ...config }/>
	<InnerDoors/>
</div>;

export default Door;
