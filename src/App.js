import { React } from 'react';
import './App.scss';
import Bus from './components/Bus';
import getBusDimensions from './services/getBusDimensions';

const App = (context) => {
	const { config } = context;

	return <div className="App" role="App">
		{config.buses.map((data, key) =>
			<Bus
				key={ key }
				{ ...{ ...context, dimensions: getBusDimensions(data) } }
			/>)}
	</div>;
};

export default App;
