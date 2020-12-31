import ReactDom from 'react-dom';
import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { DateRangeInput } from '../index';

afterEach(cleanup);

it('renders without crashing', () => {
	const div: HTMLDivElement = document.createElement('div');
	ReactDom.render(
		<DateRangeInput
			label={'menu'}
		/>,
		div
	);
	ReactDom.unmountComponentAtNode(div);
});
