module.exports = {
	preset: 'ts-jest',
	globals: {
		'ts-jest': {
			diagnostics: true,
			tsConfig: '<rootDir>/tsconfig.json',
		},
	},
	testPathIgnorePatterns: [
		'<rootDir>/dist/',
		'<rootDir>/docs/',
		'<rootDir>/example/',
		'<rootDir>/.docz/',
		'<rootDir>/node_modules/',
	],
	testMatch: [
		'**/__tests__/**/*.+(ts|tsx|js)',
		'**/?(*.)+(spec|test).+(ts|tsx|js)',
	],
	transform: {
		'^.+\\.(ts|tsx)$': 'ts-jest',
		'^.+\\.jsx?$': 'babel-jest',
	},
	transformIgnorePatterns: ['node_modules/(?!(@my-modules)/)'],
	moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
	verbose: true,
	moduleNameMapper: {
		'\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
			'<rootDir>/__mocks__/styleMock.js',
		'\\.(css|less|scss)$': '<rootDir>/__mocks__/styleMock.js',
	},
};
