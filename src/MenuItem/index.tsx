import React, { FC, memo, ReactNode } from 'react';
import MuiMenuItem, {
	MenuItemProps as MuiMenuItemProps,
} from '@material-ui/core/MenuItem';
import { ListItemIcon, ListItemText } from '@material-ui/core';
import useStyles from './styles';
import { Avatar } from '../index';

export interface MenuItemProps extends MuiMenuItemProps {
	hide?: boolean;
	description?: string;
	name?: string;
	icon?: ReactNode;
	endIcon?: ReactNode;
	justContent?: boolean;
	id?: string;
	color?: string;
	avatar?: string;
	/**
	 * Special props, need for allowCreate feature of auto complete com
	 * */
	inputValue?: string;
}

const MenuItem: FC<MenuItemProps> = (props) => {
	const classes = useStyles(props);
	const {
		hide,
		endIcon,
		icon,
		description,
		name,
		id,
		justContent,
		avatar,
		...rest
	} = props;

	if (hide) return null;

	if (justContent) {
		return (
			// @ts-ignore
			<div
				key={id}
				style={{ display: 'flex', alignItems: 'center' }}
				{...rest}
				className={classes.root}
			>
				{!!icon && <ListItemIcon>{icon}</ListItemIcon>}
				{!!avatar && (
					<ListItemIcon>
						<Avatar src={avatar} size={'small'} />
					</ListItemIcon>
				)}
				<ListItemText primary={name} secondary={description} />
				{endIcon && <ListItemIcon>{endIcon}</ListItemIcon>}
			</div>
		);
	}

	return (
		// @ts-ignore
		<MuiMenuItem key={id} classes={classes} {...rest}>
			{!!icon && <ListItemIcon>{icon}</ListItemIcon>}
			{!!avatar && (
				<ListItemIcon>
					<Avatar src={avatar} size={'small'} />
				</ListItemIcon>
			)}
			<ListItemText primary={name} secondary={description} />
			{!!endIcon && <ListItemIcon>{endIcon}</ListItemIcon>}
		</MuiMenuItem>
	);
};

export default memo(MenuItem);
