import React, { FC, memo } from 'react';
import {
	Chip as MuiChip,
	ChipProps as MuiChipProps,
	Tooltip,
	Zoom,
} from '@material-ui/core';
import classNames from 'classnames';
import useStyles from './styles';

type BaseProps = Omit<MuiChipProps, 'color' | 'variant'>;

export interface ChipProps extends BaseProps {
	hide?: boolean;
	color?:
		| 'info'
		| 'success'
		| 'danger'
		| 'warning'
		| 'primary'
		| 'gray'
		| string;
	helperText?: string;
	label?: string;
	outlined?: boolean;
	rounded?: boolean;
	square?: boolean;
}

export const isCustomColor = (
	color:
		| 'info'
		| 'success'
		| 'danger'
		| 'warning'
		| 'primary'
		| 'gray'
		| string
		| undefined
): boolean => {
	if (!color) return false;
	return !['info', 'success', 'danger', 'warning', 'primary', 'gray'].includes(
		color
	);
};

const Chip: FC<ChipProps> = (props) => {
	const classes = useStyles(props);
	const {
		helperText,
		hide,
		label,
		color = 'gray',
		children,
		className,
		size = 'small',
		outlined,
		rounded = true,
		square,
		...rest
	} = props;

	if (hide) return null;

	const customClass = classNames(className, classes.root, {
		[classes[isCustomColor(color) ? 'customColor' : color]]: true,
		[classes.outlined]: outlined,
		[classes.square]: square,
	});

	let chipCom = (
		<MuiChip
			variant={outlined ? 'outlined' : 'default'}
			{...rest}
			label={label || children}
			className={customClass}
			size={size}
		/>
	);

	if (helperText)
		chipCom = (
			<Tooltip
				TransitionComponent={Zoom}
				title={helperText}
				placement={'bottom'}
			>
				{chipCom}
			</Tooltip>
		);

	return chipCom;
};

export default memo(Chip);
