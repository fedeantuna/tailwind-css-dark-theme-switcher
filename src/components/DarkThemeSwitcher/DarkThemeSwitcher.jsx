import useThemes from './useThemes';

const DarkThemeSwitcher = () => {
	const [themes, theme, switchTheme] = useThemes();

	return (
		<button
			className='inline-block px-2 py-1 border rounded mt-0 text-gray-100 border-gray-100 hover:text-red-500 hover:border-transparent hover:bg-gray-100 dark:hover:bg-gray-100 dark:hover:text-gray-700'
			onClick={() => switchTheme()}>
			{theme === themes.SYSTEM && (
				<svg
					className='fill-current w-7 h-7'
					viewBox='0 0 24 24'
					xmlns='http://www.w3.org/2000/svg'>
					<title>Change to Dark Theme</title>
					<path d='M11.1 12.08c-2.33-4.51-.5-8.48.53-10.07C6.27 2.2 1.98 6.59 1.98 12c0 .14.02.28.02.42.62-.27 1.29-.42 2-.42 1.66 0 3.18.83 4.1 2.15 1.67.48 2.9 2.02 2.9 3.85 0 1.52-.87 2.83-2.12 3.51.98.32 2.03.5 3.11.5 3.5 0 6.58-1.8 8.37-4.52-2.36.23-6.98-.97-9.26-5.41z' />
					<path d='M7 16h-.18C6.4 14.84 5.3 14 4 14c-1.66 0-3 1.34-3 3s1.34 3 3 3h3c1.1 0 2-.9 2-2s-.9-2-2-2z' />
				</svg>
			)}
			{theme === themes.DARK && (
				<svg
					className='fill-current w-7 h-7'
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 0 24 24'>
					<title>Change to Light Theme</title>
					<path d='M6.76 4.84l-1.8-1.79-1.41 1.41 1.79 1.79 1.42-1.41zM4 10.5H1v2h3v-2zm9-9.95h-2V3.5h2V.55zm7.45 3.91l-1.41-1.41-1.79 1.79 1.41 1.41 1.79-1.79zm-3.21 13.7l1.79 1.8 1.41-1.41-1.8-1.79-1.4 1.4zM20 10.5v2h3v-2h-3zm-8-5c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6zm-1 16.95h2V19.5h-2v2.95zm-7.45-3.91l1.41 1.41 1.79-1.8-1.41-1.41-1.79 1.8z' />
				</svg>
			)}
			{theme === themes.LIGHT && (
				<svg
					className='fill-current w-7 h-7'
					viewBox='0 0 24 24'
					xmlns='http://www.w3.org/2000/svg'>
					<title>Change to System's Theme</title>
					<path d='M20 8.69V4h-4.69L12 .69 8.69 4H4v4.69L.69 12 4 15.31V20h4.69L12 23.31 15.31 20H20v-4.69L23.31 12 20 8.69zM12 18c-.89 0-1.74-.2-2.5-.55C11.56 16.5 13 14.42 13 12s-1.44-4.5-3.5-5.45C10.26 6.2 11.11 6 12 6c3.31 0 6 2.69 6 6s-2.69 6-6 6z' />
				</svg>
			)}
		</button>
	);
};

export default DarkThemeSwitcher;
