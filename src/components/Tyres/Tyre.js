import { React } from 'react';
import TyreExterior from './TyreExterior';
import TyreInteriors from './TyreInterior';

const Tyre = (context) => <div>
	<TyreExterior { ...context }/>
	<TyreInteriors { ...context }/>
</div>;

export default Tyre;
