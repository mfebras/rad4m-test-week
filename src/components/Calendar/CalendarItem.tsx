import { h } from 'preact';
import { useState, useEffect, useContext } from 'preact/hooks';
import { ModalContext } from '../../contexts/ModalContext';
import moment from 'moment';
import { convertHour } from '../../utils/Helper';
import { isWeekend } from '../../utils/Helper';
import style from './TabContent.scss';

export const CalendarItem = ({ type, date, isViewMore=false, ...props }) => {
    const { setModal } = useContext(ModalContext);

	const agendaBarStyle = (agenda) => {
		let barStyle = '';
		let startDate = agenda.startDate;
		let finishDate = agenda.finishDate;

		if (date.isSame(startDate) && date.isSame(finishDate)) {
			barStyle = `${style.barStart} ${style.barEnd} ${style.wTwoSide}`;
		} else if (date.isSame(startDate) && date.isBefore(finishDate)) {
			barStyle = `${style.barStart} ${style.wOneSide}`;
		} else if (date.isAfter(startDate) && date.isSame(finishDate)) {
			barStyle = `${style.barEnd} ${style.wOneSide}`;
		}

		return barStyle;
	}

	const agendaBar = (agenda, position) => {
		let barPosition = `bar${position}`;

		return 	<div
					class={`
						flex items-center text-white 
						${style.bar} ${style[barPosition]} ${agendaBarStyle(agenda)}
					`}
					style={{ background: agenda.color }}
					onClick={() => setModal({
						isShow: true,
						type: 'edit'
					})}
				>
					{agenda.title}
				</div>
	}

	let content = <div>
			{props.agenda1 &&
				agendaBar(props.agenda1, 1)
			}
			{props.agenda2 &&
				agendaBar(props.agenda2, 2)
			}
			{props.agenda3 &&
				agendaBar(props.agenda3, 3)
			}

			{isViewMore &&
				<div class={style['view-more']}>More...</div>
			}
		</div>;

	return (
		<div class={`${style.calendarItem} ${(isWeekend(date) ? style.weekend : '')} ${!props.agenda1 ? style.hover : ''} flex flex-col justify-between`}>
			{!props.agenda1 &&
				<div
					class={style.empty}
					onClick={() => setModal({
						isShow: true,
						type: 'create'
					})}
				></div>
			}

			{content}

			{type == 'month' &&
				<div class={style.date}>
					{date.date()}
				</div>
			}
		</div>
	);
}