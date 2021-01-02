import React, {
	ChangeEvent,
	FC,
	memo,
	useEffect,
	useMemo,
	useState,
} from 'react';
import MuiAutocomplete, {
	AutocompleteProps as MuiAutocompleteProps,
	createFilterOptions,
} from '@material-ui/lab/Autocomplete';
import { debounce } from '@material-ui/core/utils';
import Input, { InputProps } from '../Input';
import MenuItem, { MenuItemProps } from '../MenuItem';
import Chip, { ChipProps } from '../Chip';

type BaseProps = Omit<
	MuiAutocompleteProps<any, any, any, any>,
	'onChange' | 'options'
>;

export interface AutocompleteProps extends BaseProps {
	hide?: boolean;
	loading?: boolean;
	inputProps?: InputProps;
	options?: Array<MenuItemProps>;
	label?: string;
	placeholder?: string;
	error?: string;
	helperText?: string;
	variant?: 'standard' | 'filled' | 'outlined';
	chipColor?: 'info' | 'success' | 'danger' | 'warning' | 'primary';
	onChange?: (id: string, value: any) => void;
	getData?: (value: string) => void;
	setCreateText?: (inputValue: string) => string;
	allowCreate?: boolean;
	chipProps?: ChipProps;
	allowDuplicates?: boolean;
	showCreateText?: boolean;
}

const filter = createFilterOptions<MenuItemProps>();

const Autocomplete: FC<AutocompleteProps> = (props) => {
	const {
		hide,
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
		options = [],
		value,
		defaultValue,
		getData,
		allowCreate,
		allowDuplicates,
		showCreateText = true,
		setCreateText,
		chipProps,
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

		let ids = !multiple
			? newValue?.inputValue ?? newValue?.id ?? newValue
			: newValue.map((item: any) => item?.inputValue ?? item?.id ?? item);

		if (multiple && !allowDuplicates) {
			// @ts-ignore
			ids = [...new Set<string>(ids)];
		}

		onChange?.(ids, newValue);
	};

	const getValue = (valueIds: string | string[]) => {
		if (!Array.isArray(valueIds)) {
			if (typeof valueIds === 'object') return valueIds;
			return options.find((item) => item.id === valueIds) || valueIds;
		}

		return valueIds.map((id) => {
			if (typeof id === 'object') return id;
			return options.find((item) => item.id === id) || id;
		});
	};

	const objValue = useMemo(() => getValue(value), [value]);
	const defaultObjValue = useMemo(() => getValue(defaultValue), [defaultValue]);

	if (hide) return null;

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
			getOptionLabel={(option) => {
				// Value selected with enter, right from the input
				if (typeof option === 'string') return option;
				// Add "xxx" option created dynamically
				if (option.inputValue) return option.inputValue;
				// Regular option
				return option.name;
			}}
			onInputChange={handleInputChange}
			onChange={handleChange}
			renderOption={(item) => {
				const { id, data, inputValue, ...rest } = item;
				return (
					<MenuItem key={id} value={inputValue || id} {...rest} justContent />
				);
			}}
			{...rest}
			freeSolo={allowCreate}
			filterOptions={(options, params) => {
				const filtered = filter(options, params);
				const inputValue = params?.inputValue?.trim();
				if (!!inputValue.length && allowCreate && showCreateText) {
					filtered.push({
						id: new Date().getTime().toString(),
						inputValue,
						name: setCreateText?.(inputValue) || `Thêm "${inputValue}"`,
					});
				}

				return filtered;
			}}
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
							key={id || `${index}-${option}`}
							rounded={false}
							outlined
							avatar={icon}
							label={name || option}
							{...chipProps}
						/>
					);
				})
			}
		/>
	);
};

export default memo(Autocomplete);
