import { React } from 'react';
import LuggageDoor from './LuggageDoor';
import LuggageDoorHandle from './LuggageDoorHandle';

const Compartment = (context) => <div>
	<LuggageDoor { ...context }/>
	<LuggageDoorHandle { ...context }/>
</div>;

export default Compartment;
