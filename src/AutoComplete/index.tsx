import React, { FC, memo } from 'react';
import MuiAutocomplete, {
	AutocompleteProps,
} from '@material-ui/lab/Autocomplete';
import Input, { InputProps } from '../Input';
import { MenuItemProps } from '../MenuItem';
import { MenuItem } from '../index';

export interface Props extends AutocompleteProps<any, any, any, any> {
	show?: boolean;
	inputProps?: InputProps;
	options: Array<MenuItemProps>;
}

const Autocomplete: FC<Props> = (props) => {
	const { show = true, inputProps, ...rest } = props;

	if (!show) return null;

	return (
		<MuiAutocomplete
			{...rest}
			getOptionLabel={(option) => option.name}
			renderInput={(params) => <Input {...params} {...inputProps} />}
			renderOption={(item) => (
				<MenuItem
					key={item.id}
					value={item.id}
					{...item}
					justContent
					disableHover
				/>
			)}
		/>
	);
};

export default memo(Autocomplete);
