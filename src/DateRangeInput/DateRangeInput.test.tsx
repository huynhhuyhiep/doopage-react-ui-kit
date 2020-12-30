import ReactDom from 'react-dom';
import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import Popup from './index';

afterEach(cleanup);

it('renders without crashing', () => {
	const div: HTMLDivElement = document.createElement('div');
	// @ts-ignore
	ReactDom.render(<Popup label='popup'>content</Popup>, div);
	ReactDom.unmountComponentAtNode(div);
});
