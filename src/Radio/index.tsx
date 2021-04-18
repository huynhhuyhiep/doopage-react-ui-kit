import React, { FC, memo } from 'react';
import {
	FormControlLabel,
	FormControlLabelProps,
	RadioProps as MuiRadioProps,
	Tooltip,
	Zoom,
} from '@material-ui/core';
import classNames from 'classnames';
import MuiRadio from '@material-ui/core/Radio';
import useStyles from './styles';
import { ColorType } from '../utils/constants';

type BaseProps = Omit<MuiRadioProps, 'color' | 'size'>;

export interface RadioProps extends BaseProps {
	hide?: boolean;
	color?: ColorType;
	helperText?: string;
	label?: string;
	styles?: any;
	formProps?: FormControlLabelProps;
	labelPlacement?: 'end' | 'start' | 'top' | 'bottom';
}

const Index: FC<RadioProps> = (props) => {
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
		disabled,
		...rest
	} = props;

	if (hide) return null;

	const customClass = classNames(className, classes.checkbox, {
		[classes[color]]: color,
		[classes.disabled]: disabled,
	});

	let checkbox = (
		<MuiRadio {...rest} className={customClass} disabled={disabled} />
	);

	if (label || children || formProps)
		checkbox = (
			<FormControlLabel
				disabled={disabled}
				control={checkbox}
				label={label || children}
				labelPlacement={labelPlacement}
				{...formProps}
			/>
		);

	if (helperText)
		checkbox = (
			<Tooltip
				TransitionComponent={Zoom}
				title={helperText}
				placement={'bottom'}
			>
				{checkbox}
			</Tooltip>
		);

	return checkbox;
};

export default memo(Index);
