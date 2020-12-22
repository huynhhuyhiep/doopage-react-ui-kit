import React, {
	FC,
	forwardRef,
	memo,
	ReactNode,
	useImperativeHandle,
	useMemo,
} from 'react';
import Popover, { PopoverProps } from '@material-ui/core/Popover';
import {
	bindHover,
	bindPopover,
	bindTrigger,
	PopupState,
	usePopupState,
} from 'material-ui-popup-state/hooks';
import HoverPopover from 'material-ui-popup-state/HoverPopover';
import Button, { Props as ButtonProps } from '../Button';

type BaseProps = Omit<PopoverProps, 'open'>;

export interface PopupProps extends BaseProps {
	show?: boolean;
	buttonProps?: ButtonProps;
	button?: ReactNode;
	label?: ReactNode;
	hover?: boolean;
	popupState?: PopupState;
}

const Popup: FC<PopupProps> = forwardRef((props, ref) => {
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
					<div style={{ width: 'fit-content' }} {...bindHover(popupValue)}>
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
				<div style={{ width: 'fit-content' }} {...bindHover(popupValue)}>
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

export default memo(Popup);
