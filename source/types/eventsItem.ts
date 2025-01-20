/** @format */

import {ImageRequireSource} from 'react-native';

export type TEventsItem = {
	homeTeamIcon: ImageRequireSource;
	homeTeamName: string;
	date: number;
	fullTime: string;
	dayName: string;
	awayTeamIcon: ImageRequireSource;
	awayTeamName: string;
	orientation: string;
};
