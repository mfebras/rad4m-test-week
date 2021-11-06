import { h } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import moment from 'moment';
import { CalendarItem } from './CalendarItem';
import { agendas } from '../../data/DummyData';
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
		let calendar = generateMonthCalendar();
		calendar = placeAgendaToCalendar(calendar);

		setCalendar(calendar);
	}, [])

	const generateMonthCalendar = () => {
		const startWeek = moment().startOf('month').week();
		const endWeek = moment().endOf('month').week();
		let calendar = []

		for (let week = startWeek; week <= endWeek; week++) {
			for (let i = 0; i < 7; i++) {
				calendar.push({
					date: moment().week(week).startOf('week').clone().add(i, 'day')
				});
			}
		}

		return calendar;
	}

	const placeAgendaToCalendar = (calendar) => {
		for (let i = 0; i < agendas.length; i++) {
			let startDate = moment(agendas[i].startDate).date();
			let finishDate = moment(agendas[i].finishDate).date();

			// define agenda bar position
			for (let k = startDate-1; k < finishDate; k++) {
				let position = 'agenda1';
				let isViewMore = false;

				if (calendar[k]['agenda1'] && !calendar[k]['agenda2']) {
					position = 'agenda2';
				} else if (calendar[k]['agenda2'] && !calendar[k]['agenda3']) {
					position = 'agenda3';
				} else if (calendar[k]['agenda3']) {
					isViewMore = true;
					position = null;
				}

				// if position available (max 3 agenda bars), place the agenda
				if (position) {
					calendar[k][position] = agendas[i];
				}
				calendar[k]['isViewMore'] = isViewMore;
			}
		}

		return calendar;
	}

	const isToday = (dayName: string) => {
		return moment().format('ddd') == dayName;
	}

	if (!props.active) {
		return null;
	}

	return (
		<div>
			<div class={`${style['calendar-title']} flex flex-row`}>
				{dayNames.map((dayName, index) => (
					<div class={`${style.title} text-center`}>
						<span class={isToday(dayName) ? style.today + ' bg-primary' : ''}>{dayName}</span>
					</div>
				))}
			</div>

			<div class="flex-wrap justify-between">
				{calendar.map((item, index) => (
					<CalendarItem
						type='month'
						date={item.date}
						agenda1={item.agenda1}
						agenda2={item.agenda2}
						agenda3={item.agenda3}
						isViewMore={item.isViewMore}
					/>
				))}
			</div>
		</div>
	);
}
