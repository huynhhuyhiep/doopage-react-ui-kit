import React, { FC, memo } from 'react';
import {
	CheckboxProps as MuiCheckboxProps,
	FormControlLabel,
	FormControlLabelProps,
	Tooltip,
	Zoom,
} from '@material-ui/core';
import classNames from 'classnames';
import MuiCheckbox from '@material-ui/core/Checkbox';
import { Check } from '@material-ui/icons';
import useStyles from './styles';
import { ColorType } from '../utils/constants';

type BaseProps = Omit<MuiCheckboxProps, 'color' | 'size'>;

export interface CheckboxProps extends BaseProps {
	hide?: boolean;
	color?: ColorType;
	helperText?: string;
	label?: string;
	styles?: any;
	formProps?: FormControlLabelProps;
	labelPlacement?: 'end' | 'start' | 'top' | 'bottom';
}

const DnDList: FC<CheckboxProps> = (props) => {
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
		<MuiCheckbox
			disabled={disabled}
			checkedIcon={<Check className={classes.checkedIcon} />}
			icon={<Check className={classes.uncheckedIcon} />}
			{...rest}
			className={customClass}
		/>
	);

	if (label || children || formProps)
		checkbox = (
			<FormControlLabel
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

export default memo(DnDList);
