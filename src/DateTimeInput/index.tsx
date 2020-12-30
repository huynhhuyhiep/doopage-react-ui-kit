import React, { ChangeEvent, FC, memo } from 'react';
import Datetime, { DatetimepickerProps } from 'react-datetime';
import Input, { InputProps } from '../Input';
import useStyles from './styles';

type BaseProps = Omit<DatetimepickerProps, 'inputProps' | 'onChange'>;

export interface Props extends BaseProps {
	onChange?: (value?: string) => void;
	inputProps?: InputProps;
	loading?: boolean;
	show?: boolean;
	helperText?: string;
	error?: string;
	label?: string;
	placeholder?: string;
	native?: boolean;
}

const DateTimeInput: FC<Props> = (props) => {
	const {
		placeholder,
		label,
		error,
		helperText,
		show = true,
		loading,
		native,
		onChange,
		value,
		inputProps,
		dateFormat = 'YYYY-MM-DD',
		...rest
	} = props;
	const classes = useStyles();
	if (!show) return null;

	const handleNativeChange = (e: ChangeEvent) => {
		// @ts-ignore
		onChange?.(e.target.value);
	};

	const handlePickerChange = (value: any) => {
		onChange?.(value.format(dateFormat));
	};

	if (native)
		return (
			<Input
				fullWidth
				InputLabelProps={{
					shrink: true,
				}}
				type='date'
				{...{
					placeholder,
					label,
					error,
					helperText,
					loading,
					onChange: handleNativeChange,
					value,
				}}
				{...inputProps}
			/>
		);

	return (
		<div className={classes.root}>
			<Datetime
				value={value}
				onChange={handlePickerChange}
				closeOnSelect
				timeFormat={false}
				dateFormat={dateFormat}
				renderMonth={(props, month) => <td {...props}>{month + 1}</td>}
				renderInput={(props) => (
					<Input
						fullWidth
						{...{
							placeholder: placeholder || dateFormat,
							label,
							error,
							helperText,
							loading,
						}}
						{...props}
					/>
				)}
				{...rest}
			/>
		</div>
	);
};

export default memo(DateTimeInput);