/** @format */

import React from 'react';
import {Text} from 'react-native';
// -----------------------------------------------------------------------------
import {color} from '~/constants';
import {TTypography} from '~/types';

export const Typography = (props: TTypography) => {
	const {
		size = 14,
		lineHeight,
		weight = 'regular',
		colorText = color.g_black,
		alignHorizontal,
		...restProps
	} = props;

	return (
		<Text
			{...restProps}
			style={{
				fontSize: size,
				lineHeight,
				color: colorText,
				textAlign: alignHorizontal,
				fontWeight: weight,
			}}
		/>
	);
};
