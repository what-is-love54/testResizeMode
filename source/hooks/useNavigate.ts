/** @format */
/** @format */

import {useCallback} from 'react';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
// -----------------------------------------------------------------------------
import {TNavigate} from '~/types';

export const useNavigate = () => {
	const nav = useNavigation<NativeStackNavigationProp<TNavigate>>();

	const navigate = useCallback(
		(route: TNavigate | any, params?: any) => {
			return nav.navigate(route, params);
		},
		[nav],
	);

	const push = useCallback(
		(route: TNavigate | any, params?: any) => {
			return nav.push(route, params);
		},
		[nav],
	);

	const replace = useCallback(
		(route: TNavigate | any, params?: any) => {
			return nav.replace(route, params);
		},
		[nav],
	);

	const goBack = useCallback(() => {
		return nav.goBack();
	}, [nav]);

	const reset = useCallback(
		(object: any) => {
			return nav.reset(object);
		},
		[nav],
	);

	return {
		navigate,
		push,
		goBack,
		replace,
		reset,
	};
};
