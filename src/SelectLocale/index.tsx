import React, {
	FC,
	memo,
	ReactNode,
	useEffect,
	useMemo,
	useRef,
	useState,
} from 'react';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import Space from '../Space';
import Select, { SelectProps } from '../Select';
import Button, { ButtonProps } from '../Button';
import { MenuItemProps, MenuOptionProps, Radio } from '../index';
import Menu from '../Menu';
import useStyles from './styles';

export const defaultLocaleOptions = [
	{ id: 'af_ZA', name: 'Afrikaans' },
	{ id: 'ar', name: 'Arabic' },
	{ id: 'bg_BG', name: 'Bulgarian' },
	{ id: 'ca_AD', name: 'Catalan' },
	{ id: 'cs_CZ', name: 'Czech' },
	{ id: 'cy_GB', name: 'Welsh' },
	{ id: 'da_DK', name: 'Danish' },
	{ id: 'de_AT', name: 'German (Austria)' },
	{ id: 'de_CH', name: 'German (Switzerland)' },
	{ id: 'de_DE', name: 'German (Germany)' },
	{ id: 'el_GR', name: 'Greek' },
	{ id: 'en_GB', name: 'English (UK)' },
	{ id: 'en_US', name: 'English (US)' },
	{ id: 'es_CL', name: 'Spanish (Chile)' },
	{ id: 'es_ES', name: 'Spanish (Spain)' },
	{ id: 'es_MX', name: 'Spanish (Mexico)' },
	{ id: 'et_EE', name: 'Estonian' },
	{ id: 'eu', name: 'Basque' },
	{ id: 'fa_IR', name: 'Persian' },
	{ id: 'fi_FI', name: 'Finnish' },
	{ id: 'fr_CA', name: 'French (Canada)' },
	{ id: 'fr_FR', name: 'French (France)' },
	{ id: 'he_IL', name: 'Hebrew' },
	{ id: 'hi_IN', name: 'Hindi' },
	{ id: 'hr_HR', name: 'Croatian' },
	{ id: 'hu_HU', name: 'Hungarian' },
	{ id: 'id_ID', name: 'Indonesian' },
	{ id: 'is_IS', name: 'Icelandic' },
	{ id: 'it_IT', name: 'Italian' },
	{ id: 'ja_JP', name: 'Japanese' },
	{ id: 'km_KH', name: 'Khmer' },
	{ id: 'ko_KR', name: 'Korean' },
	{ id: 'la', name: 'Latin' },
	{ id: 'lt_LT', name: 'Lithuanian' },
	{ id: 'lv_LV', name: 'Latvian' },
	{ id: 'mn_MN', name: 'Mongolian' },
	{ id: 'nb_NO', name: 'Norwegian (Bokmål)' },
	{ id: 'nl_NL', name: 'Dutch' },
	{ id: 'nn_NO', name: 'Norwegian (Nynorsk)' },
	{ id: 'pl_PL', name: 'Polish' },
	{ id: 'pt_BR', name: 'Portuguese (Brazil)' },
	{ id: 'pt_PT', name: 'Portuguese (Portugal)' },
	{ id: 'ro_RO', name: 'Romanian' },
	{ id: 'ru_RU', name: 'Russian' },
	{ id: 'sk_SK', name: 'Slovak' },
	{ id: 'sl_SI', name: 'Slovenian' },
	{ id: 'sr_RS', name: 'Serbian' },
	{ id: 'sv_SE', name: 'Swedish' },
	{ id: 'th_TH', name: 'Thai' },
	{ id: 'tr_TR', name: 'Turkish' },
	{ id: 'uk_UA', name: 'Ukrainian' },
	{ id: 'vi_VN', name: 'Vietnamese' },
	{ id: 'zh_CN', name: 'Chinese (PRC)' },
	{ id: 'zh_TW', name: 'Chinese (Taiwan)' },
];

export interface SelectLocaleProps {
	selectProps?: SelectProps;
	hide?: boolean;
	addIcon?: ReactNode;
	removeIcon?: ReactNode;
	addButtonProps?: ButtonProps;
	removeButtonProps?: ButtonProps;
	defaultOptions?: MenuItemProps[];
	defaultLocale?: string;
	defaultSelectedLocale?: string;
	onSelectedChange?: (value: string | undefined) => void;
	onOptionsChange?: (values: MenuItemProps[]) => void;
	showCheckedDefaultLocale?: boolean;
	onCheckedDefaultLocale?: (value: string | undefined) => string;
	localeOptions?: Array<{ id: string; name: string }>;
}

const SelectLocale: FC<SelectLocaleProps> = (props) => {
	const {
		hide,
		selectProps,
		addIcon,
		removeIcon,
		addButtonProps,
		removeButtonProps,
		showCheckedDefaultLocale,
		onSelectedChange,
		onCheckedDefaultLocale,
		defaultOptions,
		onOptionsChange,
		defaultLocale: initValue = '',
		defaultSelectedLocale,
		localeOptions = defaultLocaleOptions,
	} = props;
	const classes = useStyles(props);
	const [defaultLocale, setDefaultLocale] = useState<string>(initValue);
	const [addItems, setAddItems] = useState<MenuItemProps[]>(
		defaultOptions || []
	);
	const [selected, setSelected] = useState<string | undefined>(
		defaultSelectedLocale ?? defaultOptions?.[0]?.id ?? ''
	);
	const action = useRef<string>();
	const allowRemove = useMemo<boolean>(
		() => addItems?.find((item) => item.id === selected)?.allowRemove !== false,
		[selected]
	);
	const handleSelect = (item: MenuOptionProps) => {
		// @ts-ignore
		action.current = 'add';
		setAddItems((preValue: MenuItemProps[]) => {
			if (!preValue.some((el) => el.id === item.id))
				return [...preValue, { id: item.id, name: item.name } as MenuItemProps];
			return preValue;
		});
	};

	const removeItem = () => {
		action.current = 'remove';
		setAddItems((preValue) => preValue.filter((item) => item.id !== selected));
	};

	useEffect(() => {
		if (action.current === 'add') {
			setSelected(addItems?.[addItems.length - 1]?.id);
			if (addItems.length === 1 && showCheckedDefaultLocale) {
				setDefaultLocale(addItems?.[addItems.length - 1]?.id ?? '');
			}
		}
		if (action.current === 'remove' && addItems.length > 0) {
			setSelected(addItems?.[0]?.id);
		}
	}, [addItems]);

	useEffect(() => {
		if (selected) onSelectedChange?.(selected);
	}, [selected]);

	useEffect(() => {
		if (showCheckedDefaultLocale) onCheckedDefaultLocale?.(defaultLocale);
	}, [defaultLocale]);

	useEffect(() => {
		onOptionsChange?.(addItems);
	}, [addItems]);

	if (hide) return null;

	// @ts-ignore
	return (
		<Space className={classes.container}>
			<Select
				fullWidth
				disabled={!addItems?.length}
				label='Locale'
				options={addItems}
				value={selected}
				placeholder='Add locale before select'
				onChange={(e) => setSelected(e.target.value)}
				{...selectProps}
			/>
			<div className={classes.action}>
				<Menu
					button={
						<Button
							justIcon
							round
							color='info'
							simple
							helperText='Add locale'
							{...addButtonProps}
						>
							{addIcon || <AddIcon />}
						</Button>
					}
					options={localeOptions
						.filter((item) => !addItems.some((el) => el.id === item.id))
						.map(
							(item) => ({ ...item, onClick: handleSelect } as MenuOptionProps)
						)}
				/>
				<Button
					round
					disabled={defaultLocale === selected || !allowRemove}
					justIcon
					color='danger'
					simple
					helperText='Remove locale'
					onClick={removeItem}
					{...removeButtonProps}
				>
					{removeIcon || <DeleteIcon />}
				</Button>
				{showCheckedDefaultLocale && (
					<div className={classes.defaultLocale}>
						<Radio
							key={`${defaultLocale === selected}`}
							label='Default locale'
							checked={defaultLocale === selected && !!selected}
							onClick={() => setDefaultLocale(selected || '')}
						/>
					</div>
				)}
			</div>
		</Space>
	);
};

export default memo(SelectLocale);
