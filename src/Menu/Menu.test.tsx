import ReactDom from 'react-dom';
import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { Menu } from '../index';

afterEach(cleanup);

it('renders without crashing', () => {
	const div: HTMLDivElement = document.createElement('div');
	ReactDom.render(
		<Menu
			label={'menu'}
			options={[
				{
					id: '1',
					name: 'option1',
					onClick: () => {
						console.log('on click');
					},
				},
			]}
		/>,
		div
	);
	ReactDom.unmountComponentAtNode(div);
});
