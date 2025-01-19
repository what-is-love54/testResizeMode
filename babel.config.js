module.exports = function (api) {
	api.cache(true);
	return {
		presets: ['babel-preset-expo'],
		plugins: [
			[
				'@babel/plugin-proposal-decorators',
				{
					legacy: true,
				},
			],
			[
				require.resolve('babel-plugin-module-resolver'),
				{
					cwd: 'babelrc',
					extensions: ['.ts', '.tsx', '.js', '.ios.js', '.android.js'],
					alias: {
						'~': './mainSrc',
					},
				},
			],
			'react-native-reanimated/plugin',
		],
	};
};
