import React, { FC, memo } from 'react';
import MuiButton, { ButtonProps } from '@material-ui/core/Button';
import { Tooltip, Zoom } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import classNames from 'classnames';
import ButtonStyles from './ButtonStyles';

// @ts-ignore
const useStyles = makeStyles(ButtonStyles);

type CustomButtonProps = Omit<ButtonProps, 'color' | 'variant' | 'size'>;

export interface Props extends CustomButtonProps {
	loading: boolean;
	show: boolean;
	color:
		| 'info'
		| 'success'
		| 'danger'
		| 'warning'
		| 'primary'
		| 'white'
		| 'gray';
	tooltip?: string;
	round?: boolean;
	size: 'tiny' | 'small' | 'normal' | 'large';
	fullWidth: boolean;
	upcaseText: boolean;
	justIcon: boolean;
	simple: boolean;
	styles?: any;
	outline: boolean;
}

const Button: FC<Props> = (props) => {
	const classes = useStyles();
	const {
		loading,
		disabled,
		children,
		color,
		tooltip,
		show,
		size,
		round,
		fullWidth,
		upcaseText,
		simple,
		justIcon,
		outline,
		...rest
	} = props;

	const btnClasses = classNames({
		[classes.button]: true,
		[classes[size]]: size,
		[classes[color]]: color,
		[classes.round]: round,
		[classes.fullWidth]: fullWidth,
		[classes.upcaseText]: upcaseText,
		[classes.disabled]: disabled,
		[classes.simple]: simple,
		[classes.outline]: outline,
		[classes.justIcon]: justIcon,
	});

	if (!show) return null;

	const button = (
		<MuiButton {...rest} disabled={loading || disabled} className={btnClasses}>
			{children}
		</MuiButton>
	);

	if (tooltip)
		return (
			<Tooltip TransitionComponent={Zoom} title={tooltip} placement={'bottom'}>
				{button}
			</Tooltip>
		);

	return button;
};

Button.defaultProps = {
	show: true,
	loading: false,
	color: 'primary',
	fullWidth: false,
	upcaseText: false,
	justIcon: false,
	simple: false,
	outline: false,
};

export default memo(Button);
