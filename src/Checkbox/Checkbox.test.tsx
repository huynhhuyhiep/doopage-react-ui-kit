import ReactDom from 'react-dom';
import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import Button from './index';

afterEach(cleanup);

it('renders without crashing', () => {
	const div: HTMLDivElement = document.createElement('div');
	// @ts-ignore
	ReactDom.render(<Button color='success'>Button</Button>, div);
	// @ts-ignore
	ReactDom.render(<Button simple>Button</Button>, div);
	ReactDom.unmountComponentAtNode(div);
});
