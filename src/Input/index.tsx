import React, { FC, memo, ReactNode } from 'react';
import TextField, { TextFieldProps } from '@material-ui/core/TextField';
import { CircularProgress } from '@material-ui/core';
import useStyles from './styles';

type BaseProps = Omit<TextFieldProps, 'color' | 'error'>;

export interface InputProps extends BaseProps {
	loading?: boolean;
	hide?: boolean;
	helperText?: string;
	endIcon?: ReactNode;
	startIcon?: ReactNode;
	error?: string;
}

const Input: FC<InputProps> = (props) => {
	const classes = useStyles(props);
	const {
		loading = false,
		hide,
		size = 'small',
		error,
		label,
		InputLabelProps,
		variant = 'standard',
		endIcon,
		startIcon,
		InputProps: inputProps,
		...rest
	} = props;

	if (hide) return null;

	return (
		<TextField
			classes={classes}
			size={size}
			variant={variant}
			label={label}
			InputLabelProps={{
				...InputLabelProps,
			}}
			InputProps={{
				...inputProps,
				startAdornment: startIcon || inputProps?.startAdornment,
				endAdornment: (
					<>
						{loading ? (
							<CircularProgress color='inherit' size={20} />
						) : (
							endIcon || inputProps?.endAdornment || null
						)}
					</>
				),
			}}
			helperText={error}
			error={!!error}
			{...rest}
		/>
	);
};

export default memo(Input);
