/** @format */

import React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationIndependentTree} from '@react-navigation/native';
import {NavigationContainer} from '@react-navigation/native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {
	initialWindowMetrics,
	SafeAreaProvider,
} from 'react-native-safe-area-context';
import {enableScreens} from 'react-native-screens';
// -----------------------------------------------------------------------------
import {deviceStore, StoresController} from '~/stores';
import {navigationRef} from '~/utils';
import {NaviController} from '~/navigation';
import {color} from '~/constants';

enableScreens();

const Application = () => {
	return (
		<StoresController.Provider value={{deviceStore}}>
			<GestureHandlerRootView style={root_style.container}>
				<SafeAreaProvider initialMetrics={initialWindowMetrics}>
					<NavigationIndependentTree>
						<NavigationContainer ref={navigationRef}>
							<NaviController />
						</NavigationContainer>
					</NavigationIndependentTree>
				</SafeAreaProvider>
			</GestureHandlerRootView>
		</StoresController.Provider>
	);
};

export default Application;

const root_style = StyleSheet.create({
	container: {
		flex: 1,
	},
});
