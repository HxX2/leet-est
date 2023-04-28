import { createBrowserRouter } from 'react-router-dom';
import App from '../pages/App.tsx'
import ErrorPage from '../pages/Error.tsx';


export const router = createBrowserRouter([
	{
	  path: "/",
	  element: <App />,
	  errorElement: <ErrorPage />
	},

  ]);