import { React } from 'react';
import BusBody from './BusBody';
import Tyre from './Tyre';
import Door from './Door';
import Windows from './Windows';
import Roof from './Roof';
import Glasses from './Glasses';

const Bus = (context) => <div>
	<BusBody { ...context }/>
	<Tyre/>
	<Door/>
	<Glasses/>
	<Windows/>
	<Roof/>
</div>;

export default Bus;
