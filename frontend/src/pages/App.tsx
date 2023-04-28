import { NextUIProvider } from '@nextui-org/react'
import { getDocumentTheme } from "@nextui-org/react"
import { useEffect, useState } from 'react';
import { lightTheme, darkTheme } from "../conf/theme.ts";
import Toggle from '../component/Toggle.tsx'
import Cards from '../component/Cards.tsx';
import '../css/App.css'
import Background from '../component/Background.tsx';



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
			<Background />
			<Toggle />
			<Cards />
		</NextUIProvider>
	)
}
