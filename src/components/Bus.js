import { React } from 'react';
import BusBody from './BusBody';
import Tyre from './Tyre';
import Doors from './Doors';
import Windows from './Windows';
import Roof from './Roof';
import Luggage from './Luggage';

const Bus = () => <div>
	<BusBody/>
	<Tyre/>
	<Doors/>
	<Windows/>
	<Roof/>
	<Luggage/>
</div>;

export default Bus;
