import React, { FC, memo } from 'react';
import AutoComplete, { AutoCompleteProps } from '../AutoComplete';

const ChipInput: FC<AutoCompleteProps> = (props) => (
	<AutoComplete
		allowCreate
		multiple
		showCreateText={false}
		createOnBlur
		clearOnBlur
		{...props}
	/>
);

export default memo(ChipInput);
