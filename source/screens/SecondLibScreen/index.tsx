/** @format */

import React, {useCallback, useEffect} from 'react';
import {StyleSheet, FlatList} from 'react-native';
import {observer} from 'mobx-react';
import {moderateScale} from 'react-native-size-matters';
import {
	widthPercentageToDP as wp,
	heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
// -----------------------------------------------------------------------------
import {useOrientation, useStores} from '~/hooks';
import {Insets, VerticalSeparatorView} from '~/components';
import {TTeam} from '~/types';
import {dateFormatHelper} from '~/utils';
import {deviceOrientation} from '~/constants';
// -----------------------------------------------------------------------------
import {EventsViewItem} from './components';

export const SecondLibScreen = observer(() => {
	const {deviceStore} = useStores();
	const orientation = useOrientation();

	const {pastEvent} = deviceStore;

	const handleRenderResultEvent = useCallback(
		({item}: {item: TTeam}) => {
			const {minutes, date, time, dayName, timeHint} = dateFormatHelper(
				`${item.playTime}`,
			);

			return (
				<EventsViewItem
					orientation={orientation}
					homeTeamIcon={item.homeTeamIcon}
					homeTeamName={item.homeTeamName}
					awayTeamIcon={item.awayTeamIcon}
					awayTeamName={item.awayTeamName}
					date={date}
					fullTime={`${time}:${minutes} ${timeHint}`}
					dayName={dayName}
				/>
			);
		},
		[orientation],
	);

	// eslint-disable-next-line max-len
	const handleKeyExtractor = useCallback((item: TTeam) => String(item.id), []);

	useEffect(() => {
		deviceStore.getPastEvent();
	}, [deviceStore]);

	return (
		<Insets
			isBotInset={false}
			isTopInset={false}
		>
			<VerticalSeparatorView />

			<FlatList
				key={orientation}
				data={pastEvent}
				numColumns={orientation === deviceOrientation.landscape ? 2 : 1}
				renderItem={handleRenderResultEvent}
				keyExtractor={handleKeyExtractor}
				contentContainerStyle={styles.container}
			/>
		</Insets>
	);
});

const styles = StyleSheet.create({
	container: {
		paddingHorizontal: wp(6),
	},
});
