/** @format */

import {StatusBarStyle} from 'react-native';
import {makePersistable} from 'mobx-persist-store';
import {action, makeAutoObservable} from 'mobx';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class DeviceStore {
	isMainApplicationLoading: boolean = false;
	isHydratedPhoneStorage: boolean = false;
	statusBarTheme: StatusBarStyle | undefined = undefined;

	constructor() {
		makeAutoObservable(this);

		makePersistable(this, {
			name: 'DeviceStore',
			properties: [],
			storage: AsyncStorage,
		}).then(
			action(persistStore => {
				this.isHydratedPhoneStorage = persistStore.isHydrated;
			}),
		);
	}

	async setMainApplicationLoading(loading: boolean) {
		this.isMainApplicationLoading = loading;
	}
}
