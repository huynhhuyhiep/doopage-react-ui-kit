import { decomposeColor } from '@material-ui/core/styles';

export type ColorType =
	| 'info'
	| 'success'
	| 'danger'
	| 'warning'
	| 'primary'
	| 'white';

export type Override<T1, T2> = Omit<T1, keyof T2> & T2;

export type SizeType = 'tiny' | 'small' | 'normal' | 'large';

export const getShadow = (color: string) => {
	const rgb = decomposeColor(color).values.toString();

	return `0 2px 2px 0 rgba(${rgb}, 0.14), 0 3px 1px -2px rgba(${rgb}, 0.2), 0 1px 5px 0 rgba(${rgb}, 0.12)`;
};

export const getHoverShadow = (color: string) => {
	const rgb = decomposeColor(color).values.toString();

	return `0 14px 26px -12px rgba(${rgb}, 0.42), 0 4px 23px 0px rgba(${rgb}, 0.12), 0 8px 10px -5px rgba(${rgb}, 0.2)`;
};

export const doopageLogo =
	'https://my.doopage.com/static/media/doopage_logo_color.43617878.png';

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
