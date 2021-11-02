import { h } from 'preact';
import { Router, Route } from 'preact-router';

import { Header } from './header';
import { Home } from '../views/home';

export const App = () => (
	<div id="app">
		<Header />
		<Router>
			<Route path="/" component={Home} />
		</Router>
	</div>
)
