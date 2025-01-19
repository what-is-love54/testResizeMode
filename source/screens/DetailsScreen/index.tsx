/** @format */

import React from 'react';
import {View, Text, Button} from 'react-native';
// -----------------------------------------------------------------------------
import {useNavigate} from '~/hooks';

export const DetailsScreen = () => {
	const {goBack} = useNavigate();

	return (
		<View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
			<Text>Details Screen</Text>
			<Button
				title="Go Back"
				onPress={() => goBack()}
			/>
		</View>
	);
};
