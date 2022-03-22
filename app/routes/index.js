import HomePage from 'containers/HomePage/Loadable';
import UserPage from 'containers/UserPage/Loadable';

const routesConfig = [
	{
		id: 1, path: '/',
		component:HomePage,
		exact: true,
	}, {
		id: 2, path: '/user',
		component:UserPage,
		exact:false
	}];

export default routesConfig;	