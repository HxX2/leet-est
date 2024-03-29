import { Switch, changeTheme, useTheme } from '@nextui-org/react'
import { SunIcon } from '../icons/SunIcon';
import { MoonIcon } from '../icons/MoonIcon';

export default function Toggle() {
	const { isDark } = useTheme();

	const handleChange = () => {
		const nextTheme = isDark ? 'light' : 'dark';
		window.localStorage.setItem('data-theme', nextTheme);
		changeTheme(nextTheme);
	}

	return (
		<Switch
			checked={isDark}
			onChange={handleChange}
			size="xl"
			iconOn={<MoonIcon filled />}
			iconOff={<SunIcon filled />}
		/>
	)
}
