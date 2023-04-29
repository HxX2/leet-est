import { NextUIProvider, getDocumentTheme , Grid, Text } from '@nextui-org/react'
import { useEffect, useState } from 'react';
import { lightTheme, darkTheme } from "../conf/theme.ts";
import { useNavigate } from 'react-router';
import Toggle from '../component/Toggle.tsx'
import Cards from '../component/Cards.tsx';
import Background from '../component/Background.tsx';
import axios from 'axios';
import '../css/App.css'


export default function App() {
	const [isDark, setIsDark] = useState(window.matchMedia('(prefers-color-scheme: dark)').matches);

	useEffect(() => {
		let theme = window.matchMedia('(prefers-color-scheme: dark)').matches;
		console.log(theme);
		setIsDark(theme);

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

	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const navigate = useNavigate();

	useEffect(() => {
		axios.get('/api/auth/check', {})
			.then((res) => {
				if (res.data === true)
					setIsLoggedIn(true);
				else
					navigate('/login', { replace: true });
			})
			.catch(error => {
				setIsLoggedIn(true);
				console.log(error);
				navigate('/login', { replace: true });
			});
	}, []);

	const [userData, setUserData] = useState<any>(null);

	useEffect(() => {
		axios.get('/api/profile')
			.then(response => {
				setUserData(response.data);
			})
			.catch(error => {
				console.log(error);
			});
	}, []);

	return (
		<NextUIProvider theme={isDark ? darkTheme : lightTheme}>
			<Background />
			<Grid.Container justify="space-between" alignItems="center" gap={2} css={{ pt: "$10" }}>
				<Grid>
						<Text h4> Hello, {isLoggedIn && userData ? userData.user.displayName : "not logged in"} ! </Text>
				</Grid>
				<Grid>
						<Toggle />
				</Grid>
			</Grid.Container>
			<Cards />
		</NextUIProvider>
	)
}
