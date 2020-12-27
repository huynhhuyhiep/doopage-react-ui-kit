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
	show?: boolean;
	color?: 'info' | 'success' | 'danger' | 'warning' | 'primary';
	helperText?: string;
	label?: string;
	outlined?: boolean;
	rounded?: boolean;
}

const Chip: FC<ChipProps> = (props) => {
	const classes = useStyles(props);
	const {
		helperText,
		show = true,
		label,
		color = 'gray',
		children,
		className,
		size = 'small',
		outlined,
		rounded = true,
		...rest
	} = props;

	if (!show) return null;

	const customClass = classNames(className, classes.root, {
		[classes[color]]: color,
		[classes.outlined]: outlined,
		[classes.square]: !rounded,
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
