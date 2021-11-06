import { h } from 'preact';
import { Router, Route } from 'preact-router';
import { ModalProvider } from '../contexts/ModalContext';
import { Calendar } from '../views/Calendar/Calendar';

export const App = () => (
	<div id="app">
		<ModalProvider>
			<Router>
				<Route path="/" component={Calendar} />
			</Router>
		</ModalProvider>
	</div>
)
