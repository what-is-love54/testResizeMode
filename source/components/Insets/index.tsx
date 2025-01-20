/** @format */

import React, {memo} from 'react';
import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
// -----------------------------------------------------------------------------
import {color} from '~/constants';

type TProps = {
	children: React.ReactNode;
	styles?: StyleProp<ViewStyle>;
	isTopInset?: boolean;
	isBotInset?: boolean;
	isTopNotch?: boolean;
	title?: string;
};

export const Insets: React.FC<TProps> = memo(
	({children, styles, isTopInset = true, isBotInset = true}: TProps) => {
		const {top, bottom} = useSafeAreaInsets();

		return (
			<View
				style={[
					insets_style.container,
					{
						paddingTop: isTopInset ? top : undefined,
						paddingBottom: isBotInset ? bottom : undefined,
					},
					styles,
				]}
			>
				{children}
			</View>
		);
	},
);

const insets_style = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: color.g_white,
	},
});
