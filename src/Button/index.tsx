import React, { FC, memo } from 'react';
import MuiButton, {
	ButtonProps as MuiButtonProps,
} from '@material-ui/core/Button';
import { CircularProgress, Tooltip, Zoom } from '@material-ui/core';
import classNames from 'classnames';
import useStyles from './styles';

type BaseProps = Omit<MuiButtonProps, 'color' | 'variant' | 'size' | 'simple'>;

export interface ButtonProps extends BaseProps {
	loading?: boolean;
	hide?: boolean;
	color?:
		| 'info'
		| 'success'
		| 'danger'
		| 'warning'
		| 'primary'
		| 'white'
		| 'gray'
		| 'transparent';
	helperText?: string;
	round?: boolean;
	smooth?: boolean;
	/**
	 * @default normal
	 */
	size?: 'tiny' | 'small' | 'normal' | 'large';
	fullWidth?: boolean;
	upcaseText?: boolean;
	justIcon?: boolean;
	simple?: boolean;
	styles?: any;
	outline?: boolean;
	/**
	 * @default 'Đang xử lý...'
	 */
	loadingText?: string;
	/**
	 * Tooltip placement, @default 'bottom'
	 */
	placement?:
		| 'bottom-end'
		| 'bottom-start'
		| 'bottom'
		| 'left-end'
		| 'left-start'
		| 'left'
		| 'right-end'
		| 'right-start'
		| 'right'
		| 'top-end'
		| 'top-start'
		| 'top';
}

const Index: FC<ButtonProps> = (props) => {
	const classes = useStyles();
	const {
		loading = false,
		disabled = false,
		children,
		color = 'primary',
		helperText,
		hide,
		size = 'normal',
		round = false,
		fullWidth = false,
		upcaseText = false,
		simple = false,
		justIcon = false,
		outline = false,
		loadingText = 'Đang xử lý...',
		className,
		placement = 'bottom',
		smooth,
		...rest
	} = props;

	const customClass = classNames(className, {
		[classes.button]: true,
		[classes[size]]: size,
		[classes[color]]: color,
		[classes.round]: round,
		[classes.fullWidth]: fullWidth,
		[classes.upcaseText]: upcaseText,
		[classes.disabled]: disabled,
		[classes.simple]: simple,
		[classes.outline]: outline,
		[classes.smooth]: smooth,
		[classes.justIcon]: justIcon,
	});

	if (hide) return null;

	const renderChildren = () => {
		if (!loading) return children;

		if (justIcon) {
			return (
				<div style={{ marginTop: -2, color: '#fff' }} className='flex-center'>
					<CircularProgress color='inherit' size={30} />
				</div>
			);
		}
		return loadingText;
	};

	const button = (
		<MuiButton {...rest} disabled={loading || disabled} className={customClass}>
			{renderChildren()}
		</MuiButton>
	);

	if (helperText)
		return (
			<Tooltip
				TransitionComponent={Zoom}
				title={helperText}
				placement={placement}
			>
				{button}
			</Tooltip>
		);

	return button;
};

export default memo(Index);
