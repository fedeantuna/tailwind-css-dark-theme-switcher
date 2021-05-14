import logo from './logo.svg';
import './App.css';
import DarkThemeSwitcher from './components/DarkThemeSwitcher/DarkThemeSwitcher';

function App() {
	return (
		<div className='App'>
			<header className='App-header'>
				<img src={logo} className='App-logo' alt='logo' />
				<p>
					Edit <code>src/App.js</code> and save to reload.
				</p>
				<a
					className='text-gray-600 dark:text-white'
					href='https://reactjs.org'
					target='_blank'
					rel='noopener noreferrer'>
					Learn React
				</a>
				<DarkThemeSwitcher />
			</header>
		</div>
	);
}

export default App;
