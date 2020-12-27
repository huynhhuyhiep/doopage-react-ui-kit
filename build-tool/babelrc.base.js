/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable indent */
/* eslint-disable no-template-curly-in-string */
module.exports = ({ pure, withModules, isUMD = false }) => ({
	presets: [
		'@babel/preset-typescript',
		'@babel/preset-react',
		...(pure
			? []
			: [
					[
						'@babel/preset-env',
						{
							modules: withModules,
							loose: true,
							targets: {
								browsers: ['ie 10', 'ios 7'],
							},
						},
					],
			  ]),
	],
	plugins: [
		[
			'transform-imports',
			{
				lodash: {
					transform: 'lodash/${member}',
					preventFullImport: true,
				},
				'@material-ui/core': {
					transform: '@material-ui/core/${member}',
					preventFullImport: true,
				},
				'@material-ui/icons': {
					transform: '@material-ui/icons/${member}',
					preventFullImport: true,
				},
				'@material-ui/lab': {
					transform: '@material-ui/lab/${member}',
					preventFullImport: true,
				},
			},
		],
		[
			'transform-remove-console',
			{
				exclude: ['error', 'warn'],
			},
		],
		['@babel/plugin-transform-runtime'],
		[
			'transform-react-remove-prop-types',
			{
				mode: 'unsafe-wrap',
				ignoreFilenames: ['node_modules'],
			},
		],
		['@babel/plugin-proposal-object-rest-spread', { loose: true }],
		['@babel/proposal-class-properties', { loose: true }],
		'minify-dead-code-elimination',

		...(isUMD
			? []
			: [
					[
						'babel-plugin-transform-require-ignore',
						{
							extensions: ['.less', '.scss', '.css'],
						},
					],
			  ]),
	],
	exclude: '**/*.{spec,test}.{js,jsx,tsx,ts}',
});
