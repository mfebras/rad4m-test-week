import { h } from 'preact';
import { Router, Route } from 'preact-router';
import { Calendar } from '../views/Calendar/Calendar';

export const App = () => (
	<div id="app">
		<Router>
			<Route path="/" component={Calendar} />
		</Router>
	</div>
)
