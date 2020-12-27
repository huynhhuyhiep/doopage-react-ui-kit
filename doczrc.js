export default {
	base: '/doopage-react-ui-kit/', // base path of deployed docz
	dest: './docs',
	typescript: true,
	lang: 'en',
	files: '**/*.mdx',
	ignore: ['./*.md'],
	title: `DooPage - React UI Kit`,
	description: `Base component for DooPage project.`,
	menu: [
		'Getting Started',
		'Theme',
		// { name: 'UI', menu: [] },
	],
	groups: {
		'': [],
		Components: ['Layout', 'Inputs', 'Data Display', 'Feedback', 'Navigation'],
	},
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
				'https://my.doopage.com/static/media/doopage_logo_color.43617878.png', // use this line if you want one logo for both color modes
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
	docgenConfig: {
		searchPatterns: [
			'../**/*.{ts,tsx,js,jsx,mjs}',
			'../theme/src/gatsby-theme-docz/custom-components/**/*.{ts,tsx,js,jsx,mjs}',
			'!**/node_modules',
			'!../**/node_modules',
			'!**/doczrc.js',
			'!../**/doczrc.js',
		],
	},
	filterComponents: (files) =>
		files.filter((filepath) => /[w-]*.(js|jsx|ts|tsx)$/.test(filepath)),
};
