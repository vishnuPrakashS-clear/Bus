import { React } from 'react';
import Tyre from './Tyre';
import Door from './Door';
import Windows from './Windows';
import Roof from './Roof';
import FrontGlass from './FrontGlass';
import Compartment from './Compartments';

const Bus = () => <div className="busBody">
	<Tyre/>
	<Door/>
	<FrontGlass/>
	<Windows/>
	<Roof/>
	<Compartment/>
</div>;

export default Bus;
