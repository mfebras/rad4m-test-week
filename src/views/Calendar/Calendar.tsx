import { h } from 'preact';
import { useState } from 'preact/hooks';
import moment from 'moment';
import { Header, TabContentMonth, TabContentWeek } from '../../components/Calendar';
import icChevronLeft from '../../assets/icons/chevron-left.png'
import icChevronRight from '../../assets/icons/chevron-right.png'
import './Calendar.scss';

export const Calendar = () => {
	const [activeTab, setActiveTab] = useState('month');
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
						<button
							class={`highlight ${activeTab === 'month' ? 'bg-primary text-white' : 'bg-white'}`}
							onClick={() => setActiveTab('month')}
						>
							Month
						</button>
						<button
							class={`highlight ${activeTab === 'week' ? 'bg-primary text-white' : 'bg-white'}`}
							onClick={() => setActiveTab('week')}
						>
							Week
						</button>
						<button
							class={`highlight ${activeTab === 'day' ? 'bg-primary text-white' : 'bg-white'}`}
							onClick={() => setActiveTab('day')}
						>
							Day
						</button>
					</div>
				</div>

				<div class="tab-content">
					<TabContentMonth active={(activeTab === 'month' ? true : false)} />
					<TabContentWeek active={(activeTab === 'week' ? true : false)} />
				</div>
			</div>
		</div>
	);
}
