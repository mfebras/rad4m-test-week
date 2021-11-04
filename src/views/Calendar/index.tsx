import { h } from 'preact';
import { Header } from '../../components/Calendar/Header';
import icChevronLeft from '../../assets/icons/chevron-left.png'
import icChevronRight from '../../assets/icons/chevron-right.png'
import './style.scss';

export const Calendar = () => {
	return (
		<div class="calendar">
			<Header />

			<div class="sub-header flex flex-row items-center">
				<div class="highlight bg-primary text-white">Today</div>

				<div class="current-date">
					<button class="btn-chevron">
						<img src={icChevronLeft} alt="<" />
					</button>
					<b>February 2021</b>
					<button class="btn-chevron">
						<img src={icChevronRight} alt=">" />
					</button>
				</div>

				<div class="tab-menu">
					<a class="highlight bg-primary text-white" href="#">Month</a>
					<a class="highlight" href="#">Week</a>
					<a class="highlight" href="#">Day</a>
				</div>
			</div>
		</div>
	);
}
