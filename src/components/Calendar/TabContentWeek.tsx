import { h } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import moment from 'moment';
import { CalendarItem } from './CalendarItem';
import { convertHour, isWeekend } from '../../utils/Helper';
import style from './TabContent.scss';

export const TabContentWeek = (props) => {
	const [week, setWeek] = useState([]);
	const [hours, setHours] = useState<string[]>([]);

	// Start week from Monday
	moment.updateLocale('en', {
		week: {
			dow: 1,
		},
	})

	useEffect(() => {
		const startDate = moment().startOf('week');
		const endDate = moment().endOf('week');
		let week = [];
		let hours = [];

		for (let date = moment(startDate); date.isBefore(endDate); date.add(1, 'days')) {
			week.push({
				date: moment(date),
				day: date.format('DD') +' '+ date.format('ddd'),
				isToday: moment(date).isSame(moment(), 'day')
			});
		}
		setWeek(week);

		for (let i = 0; i < 24; i++) {
			hours.push(convertHour(i));
		}
		setHours(hours);

	}, [])

	if (!props.active) {
		return null;
	}

	return (
		<div class={style.weekContent}>
			<div class={`${style.calendarTitle} flex flex-row`}>
				<div class={`${style.title} text-center`}></div>

				{week.map((item, index) => (
					<div class={`${style.title} text-center`}>
						<span class={item.isToday ? style.today + ' bg-primary' : ''}>{item.day}</span>
					</div>
				))}
			</div>

			<div class="flex-wrap justify-between">
				{hours.map((hour, index) => (
					<>
						<div class={`${style.calendarItem} flex items-center justify-center`}>
							{hour}
						</div>

						{week.map((item, index) => (
							<CalendarItem type='week' date={item.date} />
						))}
					</>
				))}
			</div>
		</div>
	);
}
