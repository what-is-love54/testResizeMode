/** @format */

import React from 'react';
import {StatusBar} from 'react-native';
import {observer} from 'mobx-react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// -----------------------------------------------------------------------------
import {useStores} from '~/hooks';
import {color, Routes} from '~/constants';
import {TNavigate} from '~/types';
// -----------------------------------------------------------------------------
import {TabNavi} from './tabNavi';

const Controller = createNativeStackNavigator<TNavigate>();

export const NaviController = observer(() => {
	const {
		deviceStore: {
			isHydratedPhoneStorage,
			isMainApplicationLoading,
			statusBarTheme,
		},
	} = useStores();

	if (isMainApplicationLoading || !isHydratedPhoneStorage) {
		return null;
	}

	return (
		<>
			<StatusBar
				translucent
				barStyle={statusBarTheme ? statusBarTheme : 'dark-content'}
				backgroundColor={color.g_transparent}
			/>
			<Controller.Navigator
				screenOptions={{headerShown: false}}
				initialRouteName={Routes.APP_SCREEN}
			>
				<Controller.Screen
					options={{gestureEnabled: false}}
					name={Routes.APP_SCREEN}
					component={TabNavi}
				/>
			</Controller.Navigator>
		</>
	);
});
