import React, { FC, memo, useMemo } from 'react';
import Input, { InputProps } from '../Input';
import MenuItem, { MenuItemProps } from '../MenuItem';

export interface Props extends InputProps {
	options: Array<MenuItemProps> | string[] | number[];
	multiple?: boolean;
}

const Select: FC<Props> = (props) => {
	const {
		show = true,
		options: rawOption,
		multiple,
		SelectProps,
		...rest
	} = props;

	const options: MenuItemProps[] = useMemo(
		() =>
			// @ts-ignore
			rawOption.map((item: MenuItemProps | number | string) => {
				// @ts-ignore
				if (item?.id) return item;
				return { id: item.toString(), name: item.toString() };
			}),
		[rawOption]
	);

	const renderValue = (value: string | string[]) => {
		const arrValue: string[] = Array.isArray(value) ? value : [value];
		const selectedOptions = arrValue.map((id: string) =>
			options.find((item) => item.id === id)
		);
		return selectedOptions.map((item: MenuItemProps) => item.name).join(', ');
	};

	if (!show) return null;

	return (
		<Input
			select
			SelectProps={{
				autoWidth: true,
				multiple,
				renderValue,
				...SelectProps,
			}}
			{...rest}
		>
			{options.map((item) => (
				<MenuItem key={item.id} value={item.id} {...item} />
			))}
		</Input>
	);
};

export default memo(Select);
