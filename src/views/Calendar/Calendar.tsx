import { h } from 'preact';
import moment from 'moment';
import { Header } from '../../components/Calendar/Header';
import { TabContentMonth } from '../../components/Calendar/TabContentMonth';
import icChevronLeft from '../../assets/icons/chevron-left.png'
import icChevronRight from '../../assets/icons/chevron-right.png'
import './Calendar.scss';

export const Calendar = () => {
	const activeDate = moment().format('MMMM') +' '+ moment().format('YYYY');

	return (
		<div class="calendar">
			<Header />

			<div class="container">
				<div class="sub-header flex flex-row items-center">
					<div class="highlight bg-primary text-white">Today</div>

					<div class="current-date">
						<button class="btn-chevron">
							<img src={icChevronLeft} alt="<" />
						</button>
						<b>{activeDate}</b>
						<button class="btn-chevron">
							<img src={icChevronRight} alt=">" />
						</button>
					</div>

					<div class="tab-menu">
						<button class="highlight bg-primary text-white" href="#">Month</button>
						<button class="highlight bg-white" href="#">Week</button>
						<button class="highlight bg-white" href="#">Day</button>
					</div>
				</div>

				<div class="tab-content">
					<TabContentMonth/>
				</div>
			</div>
		</div>
	);
}
