import { React } from 'react';
import Circle from './Circle';

const TyreInteriors = (context) =>
	context.dimensions.innerTyre.map((tyre, index) =>
		<Circle
			key={ index }
			{ ...{ ...tyre,
				style: 'rim', border: `${ tyre.border }px dashed black` } }
		/>);

export default TyreInteriors;
