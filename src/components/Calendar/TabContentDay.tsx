import { h } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import moment from 'moment';
import { convertHour } from '../../utils/Helper';
import style from './TabContent.scss';

export const TabContentDay = (props) => {
	const [hours, setHours] = useState<string[]>([]);
	const title = props.day
		? moment(props.day).format('DD') +' '+ moment(props.day).format('ddd')
		: moment().format('DD') +' '+ moment().format('ddd');

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
		<div class={style.dayContent}>
			<div class={`${style.calendarTitle} flex flex-row justify-center`}>
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
						<div class={`${style.calendarItem}`}>
							<div class={`${style.bar} ${style.barStart} ${style.barEnd} ${style.wTwoSide} flex items-center text-white`}>Webdesign</div>
						</div>
					</>
				))}
			</div>
		</div>
	);
}
