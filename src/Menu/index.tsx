import React, { FC, memo, useRef } from 'react';
import Popup, { PopupProps } from '../Popup';
import MenuItem, { MenuItemProps } from '../MenuItem';

type BaseProps = Omit<MenuItemProps, 'onClick'>;

export interface MenuOption extends BaseProps {
	closeOnClick?: boolean;
	onClick: (item: MenuOption, e: any) => void;
}

export interface MenuProps extends PopupProps {
	options: Array<MenuOption>;
	/**
	 * Apply divider for all item
	 */
	divider?: boolean;
}

const Menu: FC<MenuProps> = (props) => {
	const { options, divider, ...restProps } = props;
	const popupRef = useRef();
	return (
		<Popup {...restProps} ref={popupRef}>
			{options.map((item, index) => {
				const {
					name,
					id,
					onClick,
					closeOnClick = true,
					divider: dividerItem,
					...rest
				} = item;
				const defaultDivider = divider && index !== options.length - 1;
				return (
					<MenuItem
						id={id}
						key={id}
						name={name}
						onClick={(e) => {
							onClick?.(item, e);
							// @ts-ignore
							if (closeOnClick) popupRef.current?.close();
						}}
						divider={defaultDivider || dividerItem}
						{...rest}
					/>
				);
			})}
		</Popup>
	);
};

export default memo(Menu);

// @ts-ignore
export const MenuOption = (props: Option) => null;
