import { h } from 'preact';
import moment from 'moment';
import icChevronLeft from '../../assets/icons/chevron-left.png'
import icChevronRight from '../../assets/icons/chevron-right.png'
import style from './TabContentMonth.scss';

export const TabContentMonth = () => {
	moment.updateLocale('en', {
		week: {
			dow: 1,
		},
	})

	const startWeek = moment().startOf('month').week();
	const endWeek = moment().endOf('month').week();

	let calendar = []
	for(let week = startWeek; week < endWeek; week++){
		calendar.push({
			week: week,
			days: Array(7).fill(0).map((n, i) => moment().week(week).startOf('week').clone().add(n + i, 'day'))
		});
	}

	const isWeekend = (day) => {
		let dayOfWeek = day.day();
		return (dayOfWeek === 6) || (dayOfWeek  === 0); // 6 = Saturday, 0 = Sunday
	}

	return (
		<div>
			<div class={`${style.calendarTitle} flex flex-row`}>
				<div class={`${style.title} text-center`}>Mon</div>
				<div class={`${style.title} text-center`}>Tue</div>
				<div class={`${style.title} text-center`}>Wed</div>
				<div class={`${style.title} text-center`}>Thu</div>
				<div class={`${style.title} text-center`}>Fri</div>
				<div class={`${style.title} text-center`}>Sat</div>
				<div class={`${style.title} text-center`}>Sun</div>
			</div>

			<div class="flex-wrap justify-between">
				{calendar.map((week, index) => (
					week.days.map((day, i) => (
						<div class={`${style.monthDate} ${(isWeekend(day) ? style.weekend : '')} flex flex-col justify-between`}>
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
