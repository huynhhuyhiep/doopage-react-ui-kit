import React, {
	FC,
	forwardRef,
	memo,
	ReactNode,
	SyntheticEvent,
	useImperativeHandle,
	useMemo,
	useState,
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
import classNames from 'classnames';
import useStyles from './styles';
import Button, { ButtonProps } from '../Button';

type BaseProps = Omit<PopoverProps, 'open' | 'contextMenu'>;

export interface PopupProps extends BaseProps {
	hide?: boolean;
	buttonProps?: ButtonProps;
	button?: ReactNode;
	label?: ReactNode;
	hover?: boolean;
	fullWidth?: boolean;
	popupState?: PopupState;
	getContextMenu?: (
		value: (e: SyntheticEvent) => { top: number; left: number }
	) => void;
}

const Popup: FC<PopupProps> = forwardRef((props, ref) => {
	const {
		hide,
		children,
		buttonProps,
		label,
		hover,
		popupState,
		button,
		getContextMenu,
		className,
		fullWidth,
		...rest
	} = props;
	const classes = useStyles();
	const popupId = useMemo(() => new Date().getTime().toString(), []);
	const popupValue = usePopupState({
		popupId,
		variant: 'popover',
		...popupState,
	});
	const [menuPosition, setMenuPosition] = useState({ top: 0, left: 0 });

	useImperativeHandle(ref, () => popupValue, [popupValue]);

	if (hide) return null;

	const openMenu = (event: SyntheticEvent) => {
		event.preventDefault();
		// @ts-ignore
		const left = event?.clientX + 10;
		// @ts-ignore
		const top = event?.clientY + 10;

		popupValue.setOpen(true, event);

		setMenuPosition({ top, left });
		return { top, left };
	};

	if (getContextMenu)
		return (
			<>
				{getContextMenu(openMenu)}
				<Popover
					{...bindPopover(popupValue)}
					anchorReference='anchorPosition'
					anchorPosition={menuPosition}
					{...rest}
				>
					{children}
				</Popover>
			</>
		);

	if (!hover)
		return (
			<>
				{button ? (
					<div
						className={classNames(classes.trigger, className)}
						style={{ width: fullWidth ? '100%' : 'unset' }}
						{...bindTrigger(popupValue)}
					>
						{button}
					</div>
				) : (
					// @ts-ignore
					<Button
						{...buttonProps}
						{...bindTrigger(popupValue)}
						fullWidth={fullWidth}
					>
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
				<div
					className={classNames(classes.trigger, className)}
					{...bindHover(popupValue)}
				>
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
