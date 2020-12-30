import React, {
	FC,
	forwardRef,
	memo,
	useImperativeHandle,
	useMemo,
} from 'react';
import Popover from '@material-ui/core/Popover';
import {
	bindHover,
	bindPopover,
	bindTrigger,
	usePopupState,
} from 'material-ui-popup-state/hooks';
import HoverPopover from 'material-ui-popup-state/HoverPopover';
import useStyles from './styles';
import Button from '../Button';
import { PopupProps } from '../Popup';

const DateRangeInput: FC<PopupProps> = forwardRef((props, ref) => {
	const {
		show = true,
		children,
		buttonProps,
		label,
		hover,
		popupState,
		button,
		...rest
	} = props;
	const classes = useStyles();
	const popupId = useMemo(() => new Date().getTime().toString(), []);
	const popupValue = usePopupState({
		popupId,
		variant: 'popover',
		...popupState,
	});

	useImperativeHandle(ref, () => popupValue, [popupValue]);

	if (!show) return null;
	if (!hover)
		return (
			<>
				{button ? (
					<div className={classes.trigger} {...bindTrigger(popupValue)}>
						{button}
					</div>
				) : (
					// @ts-ignore
					<Button {...buttonProps} {...bindTrigger(popupValue)}>
						{label}
					</Button>
				)}
				<Popover
					{...bindPopover(popupValue)}
					anchorOrigin={{
						vertical: 'bottom',
						horizontal: 'center',
					}}
					transformOrigin={{
						vertical: 'top',
						horizontal: 'center',
					}}
					{...rest}
				>
					{children}
				</Popover>
			</>
		);

	return (
		<>
			{button ? (
				<div className={classes.trigger} {...bindHover(popupValue)}>
					{button}
				</div>
			) : (
				// @ts-ignore
				<Button {...buttonProps} {...bindHover(popupValue)}>
					{label}
				</Button>
			)}
			<HoverPopover
				{...bindPopover(popupValue)}
				anchorOrigin={{
					vertical: 'bottom',
					horizontal: 'center',
				}}
				transformOrigin={{
					vertical: 'top',
					horizontal: 'center',
				}}
				{...rest}
				disableRestoreFocus
			>
				{children}
			</HoverPopover>
		</>
	);
});

export default memo(DateRangeInput);
