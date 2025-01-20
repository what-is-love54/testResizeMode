/** @format */

import React from 'react';
import {StyleSheet, View} from 'react-native';
// -----------------------------------------------------------------------------
import {TSeparator} from '~/types';

export const VerticalSeparatorView: React.FC<TSeparator> = ({
	pad = 8,
	addStyle,
	isMargin = false,
}) => (
	<View
		style={[
			style.separator,
			isMargin ? {marginVertical: pad} : {paddingVertical: pad},
			addStyle,
		]}
	/>
);

export const HorizontalSeparatorView: React.FC<TSeparator> = ({
	pad = 8,
	addStyle,
	isMargin = false,
}) => (
	<View
		style={[
			isMargin ? {marginHorizontal: pad} : {paddingHorizontal: pad},
			addStyle,
		]}
	/>
);

const style = StyleSheet.create({
	separator: {
		width: '100%',
	},
});
