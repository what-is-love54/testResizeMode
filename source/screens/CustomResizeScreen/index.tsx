/** @format */

import React from 'react';
import {View, Text, Button} from 'react-native';
// -----------------------------------------------------------------------------
import {useNavigate} from '~/hooks';

export const CustomResizeScreen = () => {
	const {navigate} = useNavigate();

	return (
		<View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
			<Text>CustomResizeScreen</Text>
			<Button
				title="Go to Details"
				onPress={() => navigate('Details')}
			/>
		</View>
	);
};
