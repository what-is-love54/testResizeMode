/** @format */

import React from 'react';
import {Text, Button} from 'react-native';
// -----------------------------------------------------------------------------
import {useNavigate} from '~/hooks';
import {Insets} from '~/components';

export const CustomResizeScreen = () => {
	const {navigate} = useNavigate();

	return (
		<Insets>
			<Text>CustomResizeScreen</Text>
			<Button
				title="Go to Details"
				onPress={() => navigate('Details')}
			/>
		</Insets>
	);
};
