import React, { FC, memo } from 'react';
import Autocomplete, { AutocompleteProps } from '../AutoComplete';

const ChipInput: FC<AutocompleteProps> = (props) => (
	<Autocomplete
		allowCreate
		multiple
		showCreateText={false}
		createOnBlur
		clearOnBlur
		{...props}
	/>
);

export default memo(ChipInput);
