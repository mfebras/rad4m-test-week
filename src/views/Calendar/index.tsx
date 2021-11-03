import { h } from 'preact';
import { Header } from '../../components/Header';
import style from './style.scss';

export const Calendar = () => (
	<div class={style.calendar}>
		<Header />

		<h1>Calendar</h1>
		<p>This is the Calendar component.</p>
	</div>
);
