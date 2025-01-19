/** @format */

import React from 'react';
import {Text, Button} from 'react-native';
// -----------------------------------------------------------------------------
import {useNavigate} from '~/hooks';
import {Insets} from '~/components';

export const FirstLibScreen = () => {
	const {goBack} = useNavigate();

	return (
		<Insets>
			<Text>FirstLibScreen</Text>
			<Button
				title="Go Back"
				onPress={() => goBack()}
			/>
		</Insets>
	);
};
