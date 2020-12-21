import React, { FC, memo, ReactNode, useMemo } from 'react';
import Popover, { PopoverProps } from '@material-ui/core/Popover';
import {
	bindHover,
	bindPopover,
	bindTrigger,
	PopupState,
	usePopupState,
} from 'material-ui-popup-state/hooks';

import { Box } from '@material-ui/core';
import HoverPopover from 'material-ui-popup-state/HoverPopover';
import Button, { Props as ButtonProps } from '../Button';

export interface PopupProps extends PopoverProps {
	show?: boolean;
	buttonProps: ButtonProps;
	label: ReactNode;
	hover?: boolean;
	popupState?: PopupState;
}

const Popup: FC<PopupProps> = (props) => {
	const {
		show = true,
		children,
		buttonProps,
		label,
		hover,
		popupState,
		...rest
	} = props;
	const popupId = useMemo(() => new Date().getTime().toString(), []);
	const popupValue = usePopupState({
		popupId,
		variant: 'popover',
		...popupState,
	});

    const content = useMemo(() => {
        if (React.c)
    }, [children])

	if (!show) return null;
	if (!hover)
		return (
			<>
				<Button {...buttonProps} {...bindTrigger(popupValue)}>
					{label}
				</Button>
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
					<Box p={2}>{children}</Box>
				</Popover>
			</>
		);

	return (
		<>
			<Button {...buttonProps} {...bindHover(popupValue)}>
				{label}
			</Button>
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
				<Box p={2}>{children}</Box>
			</HoverPopover>
		</>
	);
};

export default memo(Popup);
