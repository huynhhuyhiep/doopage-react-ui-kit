import React, { FC, memo, useEffect, useRef, useState } from 'react';
import {
	DateRange,
	DateRangePicker,
	DateRangePickerProps as DRPProps,
} from 'react-date-range';
import { format } from 'date-fns';
import vi from 'date-fns/locale/vi';
import Popup, { PopupProps } from '../Popup';
import Input, { InputProps } from '../Input';
import './style.css'; // main css file
import Button from '../Button';
import { theme } from '../Theme';

type BaseProps = Omit<DRPProps, 'onChange'>;

export interface DateRangeInputProps extends BaseProps {
	value?: [number, number];
	onChange?: (arr: [number, number]) => void;
	inputProps?: InputProps;
	loading?: boolean;
	helperText?: string;
	error?: string;
	label?: string;
	placeholder?: string;
	native?: boolean;
	popupProps?: PopupProps;
	dateFormat?: string;
	hideDefinedRange?: boolean;
}

const DateRangeInput: FC<DateRangeInputProps> = (props) => {
	const {
		onChange,
		value,
		loading,
		helperText,
		error,
		label,
		placeholder,
		inputProps,
		popupProps,
		dateFormat = 'yyyy-MM-dd',
		hideDefinedRange,
		...restProps
	} = props;
	const popupRef = useRef();
	const Picker = hideDefinedRange ? DateRange : DateRangePicker;
	const [inputValue, setInputValue] = useState<string>('');

	const [state, setState] = useState({
		startDate: new Date(),
		endDate: new Date(),
		key: 'selection',
	});

	const getDateFormat = (date: Date | number) => format(date, dateFormat);

	useEffect(() => {
		const [startDate, endDate] = value || [];
		if (startDate && endDate)
			setState({
				startDate: new Date(startDate),
				endDate: new Date(endDate),
				key: 'selection',
			});
	}, [value]);

	useEffect(() => {
		const { startDate, endDate } = state;
		setInputValue(`${getDateFormat(startDate)} - ${getDateFormat(endDate)}`);
	}, [state]);

	const handleSubmit = () => {
		const { startDate, endDate } = state;
		if (startDate && endDate) {
			onChange?.([startDate.getTime(), endDate.getTime()]);
		}

		closePicker();
	};

	const closePicker = () => {
		// @ts-ignore
		popupRef.current?.close();
	};

	return (
		<Popup
			{...popupProps}
			button={
				<Input
					style={{ minWidth: 200 }}
					value={inputValue}
					{...{
						loading,
						helperText,
						error,
						label,
						placeholder,
					}}
					{...inputProps}
				/>
			}
			ref={popupRef}
		>
			<>
				<Picker
					locale={vi}
					onChange={(item) => {
						// @ts-ignore
						setState(item?.selection);
					}}
					showSelectionPreview
					moveRangeOnFirstSelection={false}
					months={2}
					direction='horizontal'
					ranges={[state]}
					rangeColors={[theme.colors.primaryColor]}
					{...restProps}
				/>
				<div className='submitButton'>
					<Button color='danger' simple onClick={closePicker}>
						Close
					</Button>
					<Button color='success' onClick={handleSubmit}>
						Submit
					</Button>
				</div>
			</>
		</Popup>
	);
};

export default memo(DateRangeInput);
