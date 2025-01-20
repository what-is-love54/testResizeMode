/** @format */

import React, {memo} from 'react';
import {Image, StyleSheet, View} from 'react-native';
// -----------------------------------------------------------------------------
import {color, deviceOrientation} from '~/constants';
import {TEventsItem} from '~/types';
import {calcFontSize, calcHeight, calcSize, calcWidth, nths} from '~/utils';
import {Typography, VerticalSeparatorView} from '~/components';

export const EventsViewItem: React.FC<TEventsItem> = memo(
	({
		homeTeamIcon,
		homeTeamName,
		date,
		fullTime,
		dayName,
		awayTeamIcon,
		awayTeamName,
		orientation,
	}) => {
		const imageWidth =
			orientation === deviceOrientation.portrait
				? calcWidth(40)
				: calcWidth(20);

		const imageHeight =
			orientation === deviceOrientation.portrait
				? calcHeight(40)
				: calcHeight(20);

		return (
			<View style={upcoming_style.upcomingItemContainer}>
				<View style={upcoming_style.upcomingTeamsLeftContainer}>
					<Image
						style={[
							upcoming_style.horizontalImageTeam,
							{width: imageWidth, height: imageHeight},
						]}
						source={homeTeamIcon}
						resizeMode={'contain'}
					/>

					<Typography
						size={calcFontSize(14)}
						weight={'regular'}
						alignHorizontal={'center'}
						colorText={color.g_black}
					>
						{homeTeamName}
					</Typography>
				</View>

				<View style={upcoming_style.upcomingTeamsCenterContainer}>
					<Typography
						size={calcFontSize(14)}
						weight={'regular'}
						alignHorizontal={'center'}
					>
						{nths(date)}
					</Typography>

					<VerticalSeparatorView pad={2} />

					<Typography
						size={calcFontSize(18)}
						weight={'500'}
						alignHorizontal={'center'}
					>
						{fullTime}
					</Typography>

					<VerticalSeparatorView pad={2} />

					<Typography
						size={calcFontSize(14)}
						weight={'regular'}
						alignHorizontal={'center'}
					>
						{dayName}
					</Typography>
				</View>

				<View style={upcoming_style.upcomingTeamsRightContainer}>
					<Image
						style={[
							upcoming_style.horizontalImageTeam,
							{width: imageWidth, height: imageHeight},
						]}
						source={awayTeamIcon}
						resizeMode={'contain'}
					/>

					<Typography
						size={calcFontSize(14)}
						weight={'regular'}
						alignHorizontal={'center'}
					>
						{awayTeamName}
					</Typography>
				</View>
			</View>
		);
	},
);

const upcoming_style = StyleSheet.create({
	upcomingItemContainer: {
		flex: 1,
		borderRadius: calcSize(6),
		borderWidth: calcSize(1),
		borderColor: color.g_black,
		backgroundColor: color.g_white,
		marginBottom: calcSize(16),
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		padding: calcSize(8),
	},
	upcomingTeamsRightContainer: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'flex-end',
	},
	upcomingTeamsLeftContainer: {
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'flex-start',
	},
	upcomingTeamsCenterContainer: {
		flex: 2,
	},
	horizontalImageTeam: {
		marginRight: calcSize(4),
	},
});
