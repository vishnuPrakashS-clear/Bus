import { React } from 'react';
import Circle from './Circle';

const TyreInteriors = ({ dimension }) =>
	dimension.tyreInteriors.map((TyreInterior, index) =>
		<Circle
			key={ index }
			{ ...{ ...TyreInterior,
				style: 'rim' } }
		/>);

export default TyreInteriors;
