export type ColorType =
	| 'info'
	| 'success'
	| 'danger'
	| 'warning'
	| 'primary'
	| 'white';

export type Override<T1, T2> = Omit<T1, keyof T2> & T2;

export type SizeType = 'tiny' | 'small' | 'normal' | 'large';
