import { NextUIProvider } from '@nextui-org/react'
import { createTheme, getDocumentTheme } from "@nextui-org/react"
import { useEffect, useState } from 'react';
import Toggle from './component/Toggle.tsx'
import Cards from './component/Cards.tsx';
import './css/App.css'

const lightTheme = createTheme({
	type: 'light',
	theme: {
		colors: {},
	}
})

const darkTheme = createTheme({
	type: 'dark',
	theme: {
		colors: {},
	}
})


export default function App() {
	const [isDark, setIsDark] = useState(false);

	useEffect(() => {
		let theme = window.localStorage.getItem('data-theme');
		setIsDark(theme === 'dark');

		const observer = new MutationObserver(() => {
			let newTheme = getDocumentTheme(document?.documentElement);
			setIsDark(newTheme === 'dark');
		});

		observer.observe(document?.documentElement, {
			attributes: true,
			attributeFilter: ['data-theme', 'style']
		});

		return () => observer.disconnect();
	}, []);

	return (
		<NextUIProvider theme={isDark ? darkTheme : lightTheme}>
			<Toggle />
			<Cards />
		</NextUIProvider>
	)
}
