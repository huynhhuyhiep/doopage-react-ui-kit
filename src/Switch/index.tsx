import React, { FC, memo } from 'react';
import { SwitchProps as MuiSwitchProps } from '@material-ui/core/Switch';
import {
	FormControlLabel,
	FormControlLabelProps,
	Switch,
	Tooltip,
	Zoom,
} from '@material-ui/core';
import classNames from 'classnames';
import useStyles from './styles';

type BaseProps = Omit<MuiSwitchProps, 'color'>;

export interface SwitchProps extends BaseProps {
	hide?: boolean;
	color?: 'info' | 'success' | 'danger' | 'warning' | 'primary';
	helperText?: string;
	label?: string;
	styles?: any;
	formProps?: FormControlLabelProps;
	labelPlacement?: 'end' | 'start' | 'top' | 'bottom';
}

const Index: FC<SwitchProps> = (props) => {
	const classes = useStyles(props);
	const {
		helperText,
		hide,
		label,
		formProps,
		color = 'primary',
		children,
		className,
		labelPlacement,
		...rest
	} = props;

	if (hide) return null;

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
