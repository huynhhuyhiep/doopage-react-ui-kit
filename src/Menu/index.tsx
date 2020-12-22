import React, { FC, memo, useRef } from 'react';
import { PopupProps } from '../Popup';
import { MenuItem, Popup } from '../index';
import { Props as MenuItemProps } from '../MenuItem/index';

type BaseProps = Omit<MenuItemProps, 'onClick'>;

export interface Option extends BaseProps {
	closeOnClick?: boolean;
	onClick: (item: Option, e: any) => void;
}

export interface Props extends PopupProps {
	options: Array<Option>;
}

const Menu: FC<Props> = (props) => {
	const { options, ...restProps } = props;
	const popupRef = useRef();
	return (
		<Popup {...restProps} ref={popupRef}>
			{options.map((item) => {
				const { name, id, onClick, closeOnClick = true, ...rest } = item;
				return (
					<MenuItem
						key={id || name}
						name={name}
						onClick={(e) => {
							onClick?.(item, e);
							// @ts-ignore
							if (closeOnClick) popupRef.current?.close();
						}}
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
