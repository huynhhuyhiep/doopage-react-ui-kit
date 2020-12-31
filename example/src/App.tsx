import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Space } from '@doopage/react-ui-kit';
import Avatar from './Avatar';

export const doopageLogo =
	'https://res-2.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco/argpgshyxeztagczhzqe';

const App: React.FC = () => {
	return (
		<div className='App'>
			<header className='App-header'>
				<img src={logo} className='App-logo' alt='logo' />
				<Button>mmm</Button>
				<Space spaceWidth={-8}>
					<Avatar src={'/error_src.img'} alt={'Logo'} border />
				</Space>
			</header>
		</div>
	);
};

export default App;
