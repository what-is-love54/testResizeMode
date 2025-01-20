/** @format */

import {ImageRequireSource} from 'react-native';

export type TTeam = {
	id: number;
	homeTeamName: string;
	awayTeamName: string;
	homeTeamIcon: ImageRequireSource;
	awayTeamIcon: ImageRequireSource;
	playTime: Date;
};
