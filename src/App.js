import { React } from 'react';
import './App.scss';
import Bus from './components/Bus';
import Tyre from './components/Tyre';
import InnerTyre from './components/InnerTyre';
import Door from './components/Door';
import Window from './components/Window';
import Roof from './components/Roof';

const App = () =>
	<div className="App" role="App">
		<Bus/>
		<Tyre/>
		<InnerTyre/>
		<Door/>
		<Window/>
		<Roof/>
	</div>;

export default App;
