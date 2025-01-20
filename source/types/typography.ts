/** @format */

import {TextProps, TextStyle} from 'react-native';

export type TTypography = {
	size?: number;
	lineHeight?: number;
	weight?: TextStyle['fontWeight'];
	colorText?: string;
	alignHorizontal?: TextStyle['textAlign'];
} & Omit<TextProps, 'style'>;
