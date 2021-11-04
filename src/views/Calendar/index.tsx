import { h } from 'preact';
import { Header } from '../../components/Header';
import './style.scss';

export const Calendar = () => {
	return (
		<div class="calendar">
			<Header />

			<h1>Calendar</h1>
			<p>This is the Calendar component.</p>
		</div>
	);
}
