import React, { FC, memo, ReactNode, useMemo } from 'react';
import Input, { InputProps } from '../Input';
import { MenuItem } from '../index';

export type Option = {
	id: string;
	name: string;
	description?: string;
	icon?: ReactNode;
};

export interface Props extends InputProps {
	options: Array<Option> | string[] | number[];
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

	const options: Option[] = useMemo(
		() =>
			// @ts-ignore
			rawOption.map((item: Option | number | string) => {
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
		return selectedOptions.map((item: Option) => item.name).join(', ');
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

// @ts-ignore
export const SelectOption = (props: Option) => null;
