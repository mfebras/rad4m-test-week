import { h } from 'preact';
import icChevronLeft from '../../assets/icons/chevron-left.png'
import icChevronRight from '../../assets/icons/chevron-right.png'
import style from './TabContentMonth.scss';

export const TabContentMonth = () => {
	return (
		<div class="tab-content">
			<div class={`${style.calendarTitle} flex flex-row`}>
				<div class={`${style.title} text-center`}>Mon</div>
				<div class={`${style.title} text-center`}>Tue</div>
				<div class={`${style.title} text-center`}>Wed</div>
				<div class={`${style.title} text-center`}>Thu</div>
				<div class={`${style.title} text-center`}>Fri</div>
				<div class={`${style.title} text-center`}>Sat</div>
				<div class={`${style.title} text-center`}>Sun</div>
			</div>
		</div>
	);
}
