import { decomposeColor } from '@material-ui/core/styles';
import { theme } from '../Theme';

export type ColorType =
	| 'info'
	| 'success'
	| 'danger'
	| 'warning'
	| 'primary'
	| 'white';

export type Override<T1, T2> = Omit<T1, keyof T2> & T2;

export type SizeType = 'tiny' | 'small' | 'normal' | 'large';

export const getColor = (color: ColorType = 'primary') =>
	theme.colors[`${color}Color`];

export const getRGBColor = (color: string) =>
	decomposeColor(color).values.toString();

export const getOpacityColor = (color: string) => (opacity: number) => {
	const rgb = getRGBColor(color);
	return `rgba(${rgb}, ${opacity})`;
};

export const getShadow = (color: string) => {
	const opacityColor = getOpacityColor(color);

	return `
	0 2px 2px 0 ${opacityColor(0.14)}, 
	0 3px 1px -2px ${opacityColor(0.2)}, 
	0 1px 5px 0 ${opacityColor(0.12)}
	`;
};

export const getHoverShadow = (color: string) => {
	const opacityColor = getOpacityColor(color);

	return `
	0 14px 26px -12px ${opacityColor(0.42)}, 
	0 4px 23px 0px ${opacityColor(0.12)}, 
	0 8px 10px -5px ${opacityColor(0.2)}`;
};

export const doopageLogo =
	'https://res-2.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco/argpgshyxeztagczhzqe';

export const listColor = [
	'#EF4444',
	'#F59E0B',
	'#10B981',
	'#84CC16',
	'#22C55E',
	'#06B6D4',
	'#0EA5E9',
	'#3B82F6',
	'#6366F1',
	'#8B5CF6',
	'#EC4899',
	'#F43F5E',
];
