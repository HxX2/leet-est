import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom';
import { router } from './conf/routes';
import { NextUIProvider } from '@nextui-org/react';
import { lightTheme, darkTheme } from "./conf/theme.ts";


const isDark = window.localStorage.getItem('data-theme') === 'dark';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
	<NextUIProvider theme={isDark ? darkTheme : lightTheme}>
    	<RouterProvider router={router} />
	</NextUIProvider>
  </React.StrictMode>,
)
