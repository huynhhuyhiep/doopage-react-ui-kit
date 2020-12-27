import React, { FC, useEffect } from 'react';
import {
	OptionsObject,
	SnackbarKey,
	SnackbarMessage,
	SnackbarProvider,
	SnackbarProviderProps,
	useSnackbar,
} from 'notistack';
import { proxy } from 'valtio';
import CloseIcon from '@material-ui/icons/Close';
import useStyles from './styles';
import Button from '../Button';

export interface SnackbarControlType {
	show: (message: SnackbarMessage, options?: OptionsObject) => SnackbarKey;
	close: (key?: SnackbarKey) => void;
}

const initObject: SnackbarControlType = {
	show: () => {
		console.error('You need add snackbar to root, before use this function');
		return '';
	},
	close: () => {
		console.error('You need add snackbar to root, before use this function');
	},
};

let snackbarControl = proxy(initObject);

const Control: FC = () => {
	const { enqueueSnackbar, closeSnackbar } = useSnackbar();

	useEffect(() => {
		snackbarControl.show = enqueueSnackbar;
		snackbarControl.close = closeSnackbar;
		return () => {
			snackbarControl = initObject;
		};
	}, []);

	return null;
};

export const showSnackbarVariant = (
	variant:
		| 'default'
		| 'error'
		| 'success'
		| 'warning'
		| 'info'
		| 'primary'
		| undefined
) => (message: SnackbarMessage, options?: OptionsObject) => {
	let autoHideDuration;
	if (typeof message === 'string') {
		autoHideDuration = Math.min(Math.max(message?.length * 50, 2000), 10000);
	}
	return snackbarControl.show(message, {
		// @ts-ignore
		variant,
		autoHideDuration,
		...options,
	});
};

export const showSnackbar = showSnackbarVariant('default');
export const closeSnackbar = (key: SnackbarKey) => snackbarControl.close(key);
export const showSuccessSnackbar = showSnackbarVariant('success');
export const showErrorSnackbar = showSnackbarVariant('error');
export const showWarningSnackbar = showSnackbarVariant('warning');
export const showInfoSnackbar = showSnackbarVariant('info');
export const showPrimarySnackbar = showSnackbarVariant('primary');

const Index: FC<SnackbarProviderProps> = (props) => {
	const classes = useStyles(props);
	return (
		<SnackbarProvider
			classes={{
				variantSuccess: classes.success,
				variantError: classes.danger,
				variantWarning: classes.warning,
				variantInfo: classes.info,
			}}
			maxSnack={5}
			action={(key) => (
				<Button
					onClick={() => closeSnackbar(key)}
					justIcon
					simple
					color='transparent'
				>
					<CloseIcon />
				</Button>
			)}
			anchorOrigin={{
				vertical: 'top',
				horizontal: 'right',
			}}
			{...props}
		>
			<Control />
		</SnackbarProvider>
	);
};

export const SnackbarProps = (_props: SnackbarProviderProps) => null;

export default Index;
