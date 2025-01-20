/** @format */

import React, {memo} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {scale, verticalScale, moderateScale} from 'react-native-size-matters';
// -----------------------------------------------------------------------------
import {color, deviceOrientation} from '~/constants';
import {TEventsItem} from '~/types';
import {nths} from '~/utils';
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
			orientation === deviceOrientation.portrait ? scale(40) : scale(20);

		const imageHeight =
			orientation === deviceOrientation.portrait
				? verticalScale(40)
				: verticalScale(20);

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
						size={moderateScale(14, 0.4)}
						weight={'regular'}
						alignHorizontal={'center'}
						colorText={color.g_black}
					>
						{homeTeamName}
					</Typography>
				</View>

				<View style={upcoming_style.upcomingTeamsCenterContainer}>
					<Typography
						size={moderateScale(14, 0.4)}
						weight={'regular'}
						alignHorizontal={'center'}
					>
						{nths(date)}
					</Typography>

					<VerticalSeparatorView pad={2} />

					<Typography
						size={moderateScale(18, 0.4)}
						weight={'500'}
						alignHorizontal={'center'}
					>
						{fullTime}
					</Typography>

					<VerticalSeparatorView pad={2} />

					<Typography
						size={moderateScale(14, 0.4)}
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
						size={moderateScale(14, 0.4)}
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
		borderRadius: moderateScale(6),
		borderWidth: moderateScale(1),
		borderColor: color.g_black,
		backgroundColor: color.g_white,
		marginBottom: moderateScale(16),
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		padding: moderateScale(8),
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
		marginRight: moderateScale(4),
	},
});
