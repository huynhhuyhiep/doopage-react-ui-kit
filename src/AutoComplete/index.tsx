import React, {
	ChangeEvent,
	FC,
	memo,
	useEffect,
	useMemo,
	useState,
} from 'react';
import MuiAutocomplete, {
	AutocompleteProps,
} from '@material-ui/lab/Autocomplete';
import { debounce } from '@material-ui/core/utils';
import Input, { InputProps } from '../Input';
import MenuItem, { MenuItemProps } from '../MenuItem';
import Chip from '../Chip';

type BaseProps = Omit<AutocompleteProps<any, any, any, any>, 'onChange'>;

export interface Props extends BaseProps {
	show?: boolean;
	loading?: boolean;
	inputProps?: InputProps;
	options: Array<MenuItemProps>;
	label?: string;
	placeholder?: string;
	error?: string;
	helperText?: string;
	variant?: 'standard' | 'filled' | 'outlined';
	chipColor?: 'info' | 'success' | 'danger' | 'warning' | 'primary';
	onChange: (id: string, value: any) => void;
	getData: (value: string) => void;
}

const Autocomplete: FC<Props> = (props) => {
	const {
		show = true,
		inputProps,
		multiple,
		label,
		placeholder,
		loading,
		error,
		helperText,
		variant,
		chipColor,
		onChange,
		options,
		value,
		defaultValue,
		getData,
		...rest
	} = props;

	const [open, setOpen] = useState(false);
	const [, setInputValue] = useState('');

	const getDataDebounce =
		typeof getData === 'function' ? debounce(getData, 500) : undefined;

	const handleInputChange = (_e: ChangeEvent, newInputValue: string) => {
		// @ts-ignore
		setInputValue(newInputValue?.trim() ?? '');
	};

	useEffect(() => {
		if (open && getDataDebounce) getDataDebounce(value);
	}, [open, value]);

	const handleChange = (_event: ChangeEvent, newValue: any) => {
		if (!newValue) return;

		if (!multiple) {
			onChange?.(newValue.id, newValue);
		} else {
			onChange?.(
				newValue.map((item: any) => item.id),
				newValue
			);
		}
	};

	const getValue = (valueIds: string | string[]) => {
		if (!Array.isArray(valueIds)) {
			if (typeof valueIds !== 'object') return valueIds;
			return options.find((item) => item.id === valueIds);
		}

		return valueIds.map((id) => {
			if (typeof id === 'object') return id;
			return options.find((item) => item.id === id);
		});
	};

	const objValue = useMemo(() => getValue(value), [value]);
	const defaultObjValue = useMemo(() => getValue(defaultValue), [defaultValue]);

	if (!show) return null;

	return (
		<MuiAutocomplete
			onOpen={() => setOpen(true)}
			onClose={() => setOpen(false)}
			value={objValue}
			defaultValue={defaultObjValue}
			options={options}
			loading={loading}
			multiple={multiple}
			filterSelectedOptions
			disableCloseOnSelect={multiple}
			noOptionsText='Không tìm thấy'
			loadingText='Đang tải...'
			getOptionLabel={(option) => option.name}
			onInputChange={handleInputChange}
			onChange={handleChange}
			renderOption={(item) => (
				<MenuItem key={item.id} value={item.id} {...item} justContent />
			)}
			{...rest}
			renderInput={(params) => (
				<Input
					{...params}
					loading={loading}
					placeholder={placeholder}
					label={label}
					helperText={helperText}
					error={error}
					variant={variant}
					{...inputProps}
				/>
			)}
			renderTags={(tagValue, getTagProps) =>
				tagValue.map((option, index) => {
					const { name, icon, id } = option;

					return (
						<Chip
							{...getTagProps({ index })}
							color={chipColor}
							key={id || index}
							square
							outlined
							avatar={icon}
							label={name}
						/>
					);
				})
			}
		/>
	);
};

export default memo(Autocomplete);
