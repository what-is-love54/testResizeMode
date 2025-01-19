import {createContext} from 'react';
// -----------------------------------------------------------------------------
import {TStore} from '~/types';
// -----------------------------------------------------------------------------
import DeviceStore from './device';

export const deviceStore = new DeviceStore();

export const StoresController = createContext<TStore>({
	deviceStore,
});
