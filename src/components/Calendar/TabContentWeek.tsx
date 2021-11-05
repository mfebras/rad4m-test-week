import { h } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import moment from 'moment';
import style from './TabContent.scss';

export const TabContentWeek = (props) => {
	const [week, setWeek] = useState([]);
	const [hours, setHours] = useState<string>([]);

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
				day: date.format('DD') +' '+ date.format('ddd')
			});
		}
		setWeek(week);

		for (let i = 0; i < 24; i++) {
			hours.push(convertHour(i));
		}
		setHours(hours);

	}, [])

	const convertHour = (hour: number) => {
		return moment(hour, ['HH']).format('hh:mm A');
	}

	const isWeekend = (date) => {
		let dayOfWeek = date.day();
		return (dayOfWeek === 6) || (dayOfWeek  === 0); // 6 = Saturday, 0 = Sunday
	}

	if (!props.active) {
		return null;
	}

	return (
		<div class={style.weekContent}>
			<div class={`${style.calendarTitle} flex flex-row`}>
				<div class={`${style.title} text-center`}></div>

				{week.map((item, index) => (
					<div class={`${style.title} text-center`}>{item.day}</div>
				))}
			</div>

			<div class="flex-wrap justify-between">
				{hours.map((hour, index) => (
					<>
						<div class={`${style.calendarItem} flex items-center justify-center`}>
							{hour}
						</div>

						{week.map((item, index) => (
							<div class={`${style.calendarItem} ${(isWeekend(item.date) ? style.weekend : '')}`}>
								<div class={`${style.bar} ${style.barStart} ${style.barEnd} ${style.wTwoSide} flex items-center text-white`}>Webdesign</div>
							</div>
						))}
					</>
				))}
			</div>
		</div>
	);
}
