import React, { FC, memo } from 'react';
import AutoComplete, { AutocompleteProps } from '../AutoComplete';

const ChipInput: FC<AutocompleteProps> = (props) => (
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
