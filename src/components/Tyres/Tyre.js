import { React } from 'react';
import TyreExterior from './TyreExterior';
import TyreInteriors from './TyreInterior';

const Tyre = ({ config }) => <div>
	<TyreExterior { ...config }/>
	<TyreInteriors { ...config }/>
</div>;

export default Tyre;
