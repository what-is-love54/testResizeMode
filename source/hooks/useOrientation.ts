/** @format */

import {useCallback, useEffect, useState} from 'react';
import {Dimensions} from 'react-native';
// import {DeviceType, deviceType} from 'expo-device';
// -----------------------------------------------------------------------------
import {deviceHeight, deviceOrientation, deviceWidth} from '~/constants';

export const useOrientation = () => {
	const [orientation, setOrientation] = useState('');

	const [dimensions, setDimensions] = useState({
		deviceWidth,
		deviceHeight,
	});

	const determineAndSetOrientation = useCallback(() => {
		if (dimensions.deviceWidth < dimensions.deviceHeight) {
			setOrientation(deviceOrientation.portrait);
		} else {
			setOrientation(deviceOrientation.landscape);
		}
	}, [dimensions]);

	useEffect(() => {
		// eslint-disable-next-line max-len
		const subscription = Dimensions.addEventListener('change', ({window}) => {
			// eslint-disable-next-line max-len
			setDimensions({deviceWidth: window.width, deviceHeight: window.height});
		});

		return () => subscription?.remove();
	}, []);

	useEffect(() => {
		determineAndSetOrientation();
	}, [determineAndSetOrientation]);

	return orientation;
};
