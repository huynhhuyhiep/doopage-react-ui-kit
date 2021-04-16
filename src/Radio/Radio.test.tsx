import ReactDom from 'react-dom';
import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { Radio } from '../index';

afterEach(cleanup);

it('renders without crashing', () => {
	const div: HTMLDivElement = document.createElement('div');
	// @ts-ignore
	ReactDom.render(<Radio color='success'>Button</Radio>, div);
	// @ts-ignore
	ReactDom.render(<Radio>Button</Radio>, div);
	ReactDom.unmountComponentAtNode(div);
});
