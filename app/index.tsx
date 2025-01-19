/** @format */

import React from 'react';
import {NavigationIndependentTree} from '@react-navigation/native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
// -----------------------------------------------------------------------------
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';

const Stack = createNativeStackNavigator();

const App = () => {
	return (
		<NavigationIndependentTree>
			<NavigationContainer>
				<Stack.Navigator initialRouteName="Home">
					<Stack.Screen
						name="Home"
						component={HomeScreen}
					/>
					<Stack.Screen
						name="Details"
						component={DetailsScreen}
					/>
				</Stack.Navigator>
			</NavigationContainer>
		</NavigationIndependentTree>
	);
};

export default App;
