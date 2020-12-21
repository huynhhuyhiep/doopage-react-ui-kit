import React, { FC, memo, ReactNode, useMemo } from 'react';
import Popover from '@material-ui/core/Popover';
import {
	bindHover,
	bindPopover,
	bindTrigger,
	PopupState,
	usePopupState,
} from 'material-ui-popup-state/hooks';

import { Box } from '@material-ui/core';
import HoverPopover from 'material-ui-popup-state/HoverPopover';
import { PopupProps } from '../Popup';
import Button, { Props as ButtonProps } from '../Button';
import { Popup } from '../index';

export type Option = {
	id: string;
	name: string;
	description?: string;
	icon?: ReactNode;
};

export interface Props extends PopupProps {
	options: Array<Option> | string[] | number[];
}

const Menu: FC<Props> = (props) => {
	const { options, ...rest } = props;

	return <Popup {...rest}></Popup>;
};

export default memo(Menu);

// @ts-ignore
export const MenuOption = (props: Option) => null;
