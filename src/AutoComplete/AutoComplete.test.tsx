import ReactDom from 'react-dom';
import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { AutoComplete } from '../index';

afterEach(cleanup);

it('renders without crashing', () => {
	const div: HTMLDivElement = document.createElement('div');
	// @ts-ignore
	ReactDom.render(
		// @ts-ignore
		<AutoComplete
			options={[
				{ id: '1', name: 'The Shawshank Redemption' },
				{ id: '2', name: 'The Godfather' },
			]}
		/>,
		div
	);
	ReactDom.unmountComponentAtNode(div);
});
