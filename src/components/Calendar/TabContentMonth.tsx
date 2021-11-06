import { h } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import moment from 'moment';
import { isWeekend } from '../../utils/Helper';
import style from './TabContent.scss';

export const TabContentMonth = (props) => {
	const [calendar, setCalendar] = useState([]);
	const dayNames = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

	// Start week from Monday
	moment.updateLocale('en', {
		week: {
			dow: 1,
		},
	})

	useEffect(() => {
		const startWeek = moment().startOf('month').week();
		const endWeek = moment().endOf('month').week();
		let calendar = []

		for(let week = startWeek; week < endWeek; week++){
			calendar.push({
				week: week,
				days: Array(7).fill(0).map((n, i) => moment().week(week).startOf('week').clone().add(n + i, 'day'))
			});
		}
		setCalendar(calendar);
	}, [])

	const isToday = (dayName: string) => {
		return moment().format('ddd') == dayName;
	}

	if (!props.active) {
		return null;
	}

	return (
		<div>
			<div class={`${style.calendarTitle} flex flex-row`}>
				{dayNames.map((dayName, index) => (
					<div class={`${style.title} text-center`}>
						<span class={isToday(dayName) ? style.today + ' bg-primary' : ''}>{dayName}</span>
					</div>
				))}
			</div>

			<div class="flex-wrap justify-between">
				{calendar.map((week, index) => (
					week.days.map((day, i) => (
						<div class={`${style.calendarItem} ${(isWeekend(day) ? style.weekend : '')} flex flex-col justify-between`}>
							<div>
								<div class={`${style.bar} ${style.barStart} ${style.barEnd} ${style.wTwoSide} flex items-center text-white`}>Webdesign</div>
								<div class={`${style.bar} ${style.barStart} ${style.wOneSide} flex items-center text-white`}>Webdesign</div>
								<div class={`${style.bar} ${style.barStart} ${style.wOneSide} flex items-center text-white`}>Webdesign</div>
							</div>
							<div class={style.date}>
								{day.date()}
							</div>
						</div>
					))
				))}
			</div>
		</div>
	);
}
