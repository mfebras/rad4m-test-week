import { h } from 'preact';
import { useState, useContext } from 'preact/hooks';
import moment from 'moment';
import { ModalContext } from '../../contexts/ModalContext';
import {
	AgendaFormCreate, Header,
	TabContentMonth, TabContentWeek, TabContentDay
} from '../../components/Calendar';
import { Modal } from '../../components/Modal/Modal';
import icChevronLeft from '../../assets/icons/chevron-left.png'
import icChevronRight from '../../assets/icons/chevron-right.png'
import './Calendar.scss';

export const Calendar = () => {
	const [activeTab, setActiveTab] = useState('month');
	const [activeDate, setActiveDate] = useState(moment().format('MMMM') +' '+ moment().format('YYYY'));
    const { modal, setModal } = useContext(ModalContext);

	const onChangeTab = (tab: string) => {
		let date = null;
		if (tab == 'month') {
			date = moment().format('MMMM') +' '+ moment().format('YYYY');
		} else if (tab == 'week') {
			let startWeekDate = moment().startOf('week');
			let endWeekDate = moment().endOf('week');
			date = startWeekDate.format('MMM') +' '+ startWeekDate.format('Do') +' - '+
				endWeekDate.format('MMM') +' '+ endWeekDate.format('Do');
		} else {
			date = moment().format('Do') +' '+ moment().format('MMM');
		}

		setActiveDate(date);
		setActiveTab(tab);
	}

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
							class={`highlight ${activeTab === 'month' ? 'bg-primary text-white' : 'bg-transparent'}`}
							onClick={() => onChangeTab('month')}
						>
							Month
						</button>
						<button
							class={`highlight ${activeTab === 'week' ? 'bg-primary text-white' : 'bg-transparent'}`}
							onClick={() => onChangeTab('week')}
						>
							Week
						</button>
						<button
							class={`highlight ${activeTab === 'day' ? 'bg-primary text-white' : 'bg-transparent'}`}
							onClick={() => onChangeTab('day')}
						>
							Day
						</button>
					</div>
				</div>

				<div class="tab-content">
					<TabContentMonth active={(activeTab === 'month' ? true : false)} />
					<TabContentWeek active={(activeTab === 'week' ? true : false)} />
					<TabContentDay active={(activeTab === 'day' ? true : false)} />
				</div>
			</div>

			<Modal show={modal.isShow}>
				<AgendaFormCreate />
			</Modal>
		</div>
	);
}
