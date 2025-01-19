/** @format */

import {useContext} from 'react';
// -----------------------------------------------------------------------------
import {StoresController} from '~/stores';

export const useStores = () => {
	const context = useContext(StoresController);

	if (context === null) {
		__DEV__ && console.error('===-->> ERROR ROOT STORES <<--===');
	}

	return context;
};
