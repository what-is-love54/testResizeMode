/** @format */

import {useEffect} from 'react';
// -----------------------------------------------------------------------------
import {useStores} from './useStore';

export const useInit = () => {
	const {deviceStore} = useStores();

	useEffect(() => {
		const initializing = async () => {
			try {
				__DEV__ && console.info('=-> App Starting');
				await deviceStore.setMainApplicationLoading(true);
			} catch (err) {
				__DEV__ && console.error('=-> App Error', err);
				await deviceStore.setMainApplicationLoading(false);
			}
		};

		initializing().finally(async () => {
			__DEV__ && console.info('=-> App Started');
			await deviceStore.setMainApplicationLoading(false);
		});
	}, [deviceStore]);
};
