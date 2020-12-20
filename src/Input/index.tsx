import React, { FC, memo, ReactNode } from 'react';
import TextField, { TextFieldProps } from '@material-ui/core/TextField';
import { CircularProgress, InputAdornment } from '@material-ui/core';
import useStyles from './styles';

type BaseProps = Omit<TextFieldProps, 'color' | 'error'>;

export interface Props extends BaseProps {
	loading?: boolean;
	show?: boolean;
	helperText?: string;
	endIcon?: ReactNode;
	startIcon?: ReactNode;
	error?: string;
}

const Index: FC<Props> = (props) => {
	const classes = useStyles(props);
	const {
		loading = false,
		show = true,
		size = 'small',
		error,
		label,
		InputLabelProps,
		InputProps,
		variant = 'standard',
		endIcon,
		startIcon,
		...rest
	} = props;

	if (!show) return null;

	const renderLoading = () => {
		if (!loading) return null;
		return (
			<InputAdornment position='end'>
				<CircularProgress color='inherit' size={20} />
			</InputAdornment>
		);
	};

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
				startAdornment: startIcon,
				endAdornment: renderLoading() || endIcon,
				...InputProps,
			}}
			helperText={error}
			error={!!error}
			{...rest}
		/>
	);
};

export default memo(Index);
