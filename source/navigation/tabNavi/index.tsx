/** @format */

import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// -----------------------------------------------------------------------------
import {TNavigate} from '~/types';
import {color as colors, Routes} from '~/constants';
import {CustomResizeScreen, FirstLibScreen, SecondLibScreen} from '~/screens';

const TabController = createBottomTabNavigator<TNavigate>();

export const TabNavi = () => {
	return (
		<TabController.Navigator
			screenOptions={() => ({
				headerShown: false,
				tabBarShowLabel: true,
				tabBarActiveTintColor: colors.g_green,
				tabBarInactiveTintColor: colors.g_red,
			})}
		>
			<TabController.Screen
				name={Routes.CUSTOM_RESIZE_SCREEN}
				component={CustomResizeScreen}
				options={{
					tabBarLabel: 'Custom Resize',
				}}
			/>
			<TabController.Screen
				name={Routes.FIRST_LIB_RESIZE_SCREEN}
				component={FirstLibScreen}
				options={{
					tabBarLabel: 'First Library',
				}}
			/>
			<TabController.Screen
				name={Routes.SECOND_LIB_RESIZE_SCREEN}
				component={SecondLibScreen}
				options={{
					tabBarLabel: 'Second Library',
				}}
			/>
		</TabController.Navigator>
	);
};
