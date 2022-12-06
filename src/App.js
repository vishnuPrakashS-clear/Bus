import { React } from 'react';
import './App.scss';
import Bus from './components/Bus';
import Dimensions from './services/Dimensions';

const App = (context) => {
	const { config: { size }} = context;

	return <div className="App" role="App">
		<Bus { ...{ ...context, dimensions: Dimensions(size) } }/>
	</div>;
};

export default App;
