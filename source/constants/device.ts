/** @format */

import {Dimensions} from 'react-native';

export const deviceWidth = Dimensions.get('window').width;
export const deviceHeight = Dimensions.get('window').height;

export const deviceOrientation = {
	landscape: 'LANDSCAPE',
	portrait: 'PORTRAIT',
};
