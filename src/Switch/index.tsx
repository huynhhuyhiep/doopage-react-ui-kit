import React, { FC, memo } from 'react';
import { SwitchProps } from '@material-ui/core/Switch';
import {
	FormControlLabel,
	FormControlLabelProps,
	Switch,
	Tooltip,
	Zoom,
} from '@material-ui/core';
import classNames from 'classnames';
import useStyles from './styles';

type BaseProps = Omit<SwitchProps, 'color'>;

export interface Props extends BaseProps {
	show?: boolean;
	color?: 'info' | 'success' | 'danger' | 'warning' | 'primary';
	helperText?: string;
	label?: string;
	styles?: any;
	formProps?: FormControlLabelProps;
	labelPlacement?: 'end' | 'start' | 'top' | 'bottom';
}

const Index: FC<Props> = (props) => {
	const classes = useStyles(props);
	const {
		helperText,
		show = true,
		label,
		formProps,
		color = 'primary',
		children,
		className,
		labelPlacement,
		...rest
	} = props;

	if (!show) return null;

	const customClass = classNames(className, {
		[classes[color]]: color,
	});

	let switchCom = <Switch {...rest} className={customClass} />;
	if (label || children || formProps)
		switchCom = (
			<FormControlLabel
				control={switchCom}
				label={label || children}
				labelPlacement={labelPlacement}
				{...formProps}
			/>
		);

	if (helperText)
		switchCom = (
			<Tooltip
				TransitionComponent={Zoom}
				title={helperText}
				placement={'bottom'}
			>
				{switchCom}
			</Tooltip>
		);

	return switchCom;
};

export default memo(Index);