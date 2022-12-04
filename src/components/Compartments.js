import { React } from 'react';
import LuggageDoor from './LuggageDoor';
import LuggageDoorHandle from './LuggageDoorHandle';

const Compartment = ({ config }) => <div>
	<LuggageDoor { ...config }/>
	<LuggageDoorHandle { ...config }/>
</div>;

export default Compartment;
