import { h } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import moment from 'moment';
import { CalendarItem } from './CalendarItem';
import { convertHour } from '../../utils/Helper';
import style from './TabContent.scss';

export const TabContentDay = (props) => {
	const [hours, setHours] = useState<string[]>([]);
	const date = props.date ? moment(props.date) : moment();
	const title = date.format('DD') +' '+ date.format('ddd');

	useEffect(() => {
		let hours = [];
		for (let i = 0; i < 24; i++) {
			hours.push(convertHour(i));
		}
		setHours(hours);
	}, [])

	if (!props.active) {
		return null;
	}

	return (
		<div class={style['day-content']}>
			<div class={`${style['calendar-title']} flex flex-row justify-center`}>
				<span class={`${style.today} bg-primary`}>
					{title}
				</span>
			</div>

			<div class="flex-wrap justify-between">
				{hours.map((hour, index) => (
					<>
						<div class={`${style.hour} flex items-center justify-center`}>
							{hour}
						</div>
						<CalendarItem type='day' date={date} />
					</>
				))}
			</div>
		</div>
	);
}
