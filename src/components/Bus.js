import { React } from 'react';
import BusBody from './BusBody';
import Tyre from './BusTyres';
import Doors from './Doors';
import Windows from './Windows';
import Roof from './Roof';
import Glasses from './Glasses';

const Bus = () => <div>
	<BusBody/>
	<Tyre/>
	<Doors/>
	<Glasses/>
	<Windows/>
	<Roof/>
</div>;

export default Bus;
