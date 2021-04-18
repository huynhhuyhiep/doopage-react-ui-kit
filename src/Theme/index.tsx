import { proxy, snapshot, useProxy } from 'valtio';

export const theme = proxy({
	colors: {
		primaryColor: '#ef6c00',
		warningColor: '#ff9800',
		dangerColor: '#f44336',
		successColor: '#4caf50',
		infoColor: '#2979ff',
		grayColor: '#999999',
		whiteColor: '#fff',
		roseColor: '#e91e63',
	},
});

interface Theme {
	primaryColor?: string;
	warningColor?: string;
	dangerColor?: string;
	successColor?: string;
	infoColor?: string;
	grayColor?: string;
	whiteColor?: string;
	roseColor?: string;
}

export const setTheme = (customTheme: Theme) => {
	theme.colors = { ...theme.colors, ...customTheme };
};

export const useTheme = () => useProxy(theme).colors;

export const getTheme = () => snapshot(theme).colors;
