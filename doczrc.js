export default {
	lang: 'en',
	description: `Base component for DooPage project.`,
	groups: {
		'': [],
		Components: [
			'Layout',
			'Inputs',
			'Data Display',
			'Surfaces',
			'Feedback',
			'Navigation',
		],
	},
	title: `DooPage - React UI Kit`,
	dest: './docs',
	menu: ['Getting Started', 'Theme'],
	src: './src',
	typescript: true,
	base: '/doopage-react-ui-kit/', // base path of deployed docz
	themeConfig: {
		search: true,
		mainContainer: {
			fullscreen: false,
			align: 'center',
		},
		header: {
			icons: 'minimal',
			fixed: true,
		},
		footer: {
			navigation: true,
		},
		logo: {
			src:
				'https://gblobscdn.gitbook.com/spaces%2F-L_lMBbRU2HXBnCnDHJ-%2Favatar-1611827712143.png?alt=media', // use this line if you want one logo for both color modes
			width: 40,
		},
		menu: {
			search: false,
			headings: {
				rightSide: true,
				scrollspy: true,
				depth: 3,
			},
		},
	},
};
