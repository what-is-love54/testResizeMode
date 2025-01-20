/** @format */

import {StatusBarStyle} from 'react-native';
import {makePersistable} from 'mobx-persist-store';
import {action, makeAutoObservable} from 'mobx';
import AsyncStorage from '@react-native-async-storage/async-storage';
// -----------------------------------------------------------------------------
import {teamsLogoID} from '~/utils';
import {TTeam} from '~/types';
// -----------------------------------------------------------------------------
import {teamData} from './constants';

export default class DeviceStore {
	isMainApplicationLoading: boolean = false;
	isHydratedPhoneStorage: boolean = false;
	statusBarTheme: StatusBarStyle | undefined = undefined;
	isLoadingPastEvents = false;

	pastEvent: Array<TTeam> = [];

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

	loadPastEvents(loading: boolean) {
		this.isLoadingPastEvents = loading;
	}

	async setMainApplicationLoading(loading: boolean) {
		this.isMainApplicationLoading = loading;
	}

	setPastEvent(data: Array<TTeam>) {
		this.pastEvent = data.map((item: TTeam) => ({
			id: item.id,
			homeTeamName: 'SVM',
			awayTeamName: 'FMO',
			homeTeamIcon: teamsLogoID[1],
			awayTeamIcon: teamsLogoID[2],
			playTime: new Date(),
		}));
	}

	async getPastEvent() {
		try {
			this.loadPastEvents(true);

			this.setPastEvent(teamData);
		} catch (err) {
			__DEV__ && console.error('ERROR FETCH TEAMS EVENT', err);
			this.loadPastEvents(false);
		} finally {
			this.loadPastEvents(false);
		}
	}
}
