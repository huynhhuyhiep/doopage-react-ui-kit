import React, { FC, memo } from 'react';
import { Chip, ChipProps, Tooltip, Zoom } from '@material-ui/core';
import classNames from 'classnames';
import useStyles from './styles';

type BaseProps = Omit<ChipProps, 'color' | 'variant'>;

export interface Props extends BaseProps {
	show?: boolean;
	color?: 'info' | 'success' | 'danger' | 'warning' | 'primary';
	helperText?: string;
	label?: string;
	outlined?: boolean;
	square?: boolean;
}

const Index: FC<Props> = (props) => {
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
		square,
		...rest
	} = props;

	if (!show) return null;

	const customClass = classNames(className, classes.root, {
		[classes[color]]: color,
		[classes.outlined]: outlined,
		[classes.square]: square,
	});

	let chipCom = (
		<Chip
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

export default memo(Index);
