import MuiAvatar, { AvatarProps } from '@material-ui/core/Avatar';
import React, { FC, memo, ReactNode, useMemo, useState } from 'react';
import { Badge, BadgeProps, Tooltip, TooltipProps } from '@material-ui/core';
import classNames from 'classnames';
import useStyles from './styles';
import { listColor } from '../utils/constants';

export type UserProps = {
	name: string;
	avatar?: string;
	image?: string;
	img?: string;
	fb_id?: string;
};

type BaseProps = Omit<AvatarProps, 'variant'>;

export interface Props extends BaseProps {
	/**
	 * default is circular
	 */
	variant?: 'circular' | 'rounded' | 'square';
	show?: boolean;
	user?: UserProps;
	helperText?: string;
	tooltipProps?: TooltipProps;
	/**
	 * Tooltip placement.
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
	size: 'tiny' | 'small' | 'normal' | 'large' | number;
	icon: ReactNode;
	shadow?: boolean;
	/**
	 * true or border style
	 */
	border?: boolean | string;
	color?: string;
	badge?: ReactNode;
	badgeProps?: BadgeProps;
	borderStyle?: CSSStyleSheet;
}

const getColor = (str = '') => listColor[str.charCodeAt(0) % listColor.length];

const getLetter = (str = '') => str?.[0]?.toUpperCase();

const Avatar: FC<Props> = (props) => {
	const {
		show = true,
		imgProps,
		user,
		src,
		alt,
		helperText,
		tooltipProps,
		placement = 'right',
		size = 'normal',
		className,
		icon,
		children,
		shadow = true,
		onClick,
		color,
		style,
		badge,
		border,
		borderStyle,
		badgeProps,
		...rest
	} = props;

	const { name, avatar, image, img, fb_id } = user || {};
	const imageSrc = useMemo(
		() =>
			fb_id
				? `https://graph.facebook.com/${fb_id}/picture?type=large`
				: src || avatar || image || img,
		[src, avatar, image, img, fb_id]
	);

	const genColor = useMemo(() => getColor(alt || name), [alt, name]);
	const [backgroundColor, setBackgroundColor] = useState(() => {
		if (color) return color;
		if (!imageSrc) return genColor;
		return undefined;
	});

	const classes = useStyles(props);

	const customClass = classNames(className, classes.root, {
		[classes[size]]: !!size,
		[classes.shadow]: shadow,
		[classes.cursor]: onClick,
		[classes.border]: border || borderStyle,
	});

	if (!show) return null;

	const handleLoadError = () => {
		if (color) return;
		setBackgroundColor(genColor);
	};

	let avatarCom = (
		<MuiAvatar
			{...rest}
			style={{ backgroundColor, ...style }}
			className={customClass}
			src={imageSrc}
			alt={alt || name}
			onClick={onClick}
			imgProps={{
				loading: 'lazy',
				onError: handleLoadError,
				...imgProps,
			}}
		>
			{getLetter(alt) || getLetter(name) || icon || children}
		</MuiAvatar>
	);

	if (name || helperText)
		avatarCom = (
			<Tooltip
				title={name || helperText || 'title'}
				placement={placement}
				{...tooltipProps}
			>
				{avatarCom}
			</Tooltip>
		);

	if (badge || badgeProps)
		avatarCom = (
			<div>
				<Badge
					overlap='circle'
					anchorOrigin={{
						vertical: 'bottom',
						horizontal: 'right',
					}}
					{...badgeProps}
					badgeContent={badge}
				>
					{avatarCom}
				</Badge>
			</div>
		);

	return avatarCom;
};

export default memo(Avatar);

// @ts-ignore
export const UserProps = (props: UserProps) => null;
