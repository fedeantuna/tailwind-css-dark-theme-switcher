import { useEffect, useState, useMemo } from 'react';

const useThemes = () => {
	const themes = useMemo(
		() => ({
			SYSTEM: 'system',
			DARK: 'dark',
			LIGHT: 'light',
		}),
		[]
	);

	const [theme, setTheme] = useState(themes.SYSTEM);

	useEffect(() => {
		'theme' in localStorage && setTheme(localStorage.theme);
	}, []);

	useEffect(() => {
		switch (theme) {
			case themes.SYSTEM:
				'theme' in localStorage && localStorage.removeItem('theme');
				window.matchMedia('(prefers-color-scheme: dark)').matches &&
					document.documentElement.classList.add('dark');
				break;
			case themes.DARK:
				document.documentElement.classList.add('dark');
				localStorage.theme = 'dark';
				break;
			case themes.LIGHT:
				document.documentElement.classList.remove('dark');
				localStorage.theme = 'light';
				break;
			default:
				break;
		}
	}, [theme, themes]);

	const switchTheme = () => {
		switch (theme) {
			case themes.SYSTEM:
				setTheme(themes.DARK);
				break;
			case themes.DARK:
				setTheme(themes.LIGHT);
				break;
			case themes.LIGHT:
				setTheme(themes.SYSTEM);
				break;
			default:
				break;
		}
	};

	return [themes, theme, switchTheme];
};

export default useThemes;
