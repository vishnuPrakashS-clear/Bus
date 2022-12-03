import { React } from 'react';
import LuggageDoor from './LuggageDoor';
import LuggageDoorFrame from './LuggageDoorFrame';

const Compartment = ({ config }) => <div>
	<LuggageDoor { ...config }/>
	<LuggageDoorFrame { ...config }/>
</div>;

export default Compartment;
