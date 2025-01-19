/** @format */

import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// -----------------------------------------------------------------------------
import {TNavigate} from '~/types';
import {color as colors, Routes} from '~/constants';
import {CustomResizeScreen, FirstLibScreen, SecondLibScreen} from '~/screens';
import {RouteProp} from '@react-navigation/core';

const ContainerController = createNativeStackNavigator<TNavigate>();
const TabController = createBottomTabNavigator<TNavigate>();

export const TabNavi: React.FC<any> = () => {
	return (
		<TabController.Navigator
			screenOptions={({route}: {route: RouteProp<TNavigate>}) => ({
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
					tabBarLabel: '',
				}}
			/>
			<TabController.Screen
				name={Routes.FIRST_LIB_RESIZE_SCREEN}
				component={FirstLibScreen}
				options={{
					tabBarLabel: '',
				}}
			/>
			<TabController.Screen
				name={Routes.SECOND_LIB_RESIZE_SCREEN}
				component={SecondLibScreen}
				options={{
					tabBarLabel: '',
				}}
			/>
		</TabController.Navigator>
	);
};
