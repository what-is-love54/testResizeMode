/** @format */

import React from 'react';
import {View, Text, Button} from 'react-native';
// -----------------------------------------------------------------------------
import {useNavigate} from '~/hooks';

export const SecondLibScreen = () => {
	const {goBack} = useNavigate();

	return (
		<View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
			<Text>SecondLibScreen</Text>
			<Button
				title="Go Back"
				onPress={() => goBack()}
			/>
		</View>
	);
};
