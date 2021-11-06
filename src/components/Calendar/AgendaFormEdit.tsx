import { h } from 'preact';
import { useState, useEffect, useContext } from 'preact/hooks';
import { ModalContext } from '../../contexts/ModalContext';
import { Select } from '../Form';
import icClose from '../../assets/icons/close.png'
import icCalendarPurple from '../../assets/icons/calendar-purple.png'
import icClockPurple from '../../assets/icons/clock-purple.png'
import { agenda, groups, statuses, people } from '../../data/DummyData';
import style from './Form.scss';

interface DataProps {
	title: string,
	group: selectOptionType,
	status: selectOptionType,
	startDate: string,
	finishDate: string,
	person: selectOptionType,
	time: string,
	description: string
}

export const AgendaFormEdit = () => {
	const [data, setData] = useState<DataProps>({
		...agenda,
		group: agenda.group
            ? groups.filter(item => item.value === agenda.group)[0] 	// get selected option
            : null,
		status: agenda.status
            ? statuses.filter(item => item.value === agenda.status)[0]
            : null,
		person: agenda.person
            ? people.filter(item => item.value === agenda.person)[0]
            : null,
	});
    const { setModal } = useContext(ModalContext);
	const [isDisableSubmit, setIsDisableSubmit] = useState(true);

    useEffect(() => {
    	canSubmit();
    }, [data])

    const onSubmit = (e: HTMLFormElement) => {
        e.preventDefault();
        if (data.title && data.group && data.status &&
        	data.startDate && data.finishDate && data.person &&
        	data.time
        ) {
		    let params = data;

		    // get value of selected option
		    params.group = params.group.value;
		    params.status = params.status.value;
		    params.person = params.person.value;

		    // TODO: send params
		    alert('Submit Form');
			closeModal();
        } else {
		    alert('Please fill the required fields');
        }
    }

    const canSubmit = () => {
    	let disable = true;

    	// Check if data change
    	for (let key in data) {
    		if (key == 'group' || key == 'status' || key == 'person') {
    			if (agenda[key] != data[key].value) {
    				disable = false;
    				break;
    			}
    		} else if (agenda[key] != data[key]) {
    			disable = false;
    			break;
    		}
    	}

   		setIsDisableSubmit(disable);
    }

    const closeModal = () => {
    	setModal({
			isShow: false,
			type: ''
		});
    }

	const handleChange = (key: string, val: string) => {
        setData(data => ({
            ...data,
            [key]: val,
        }));
    }

	return (
		<div>
	        <form onSubmit={onSubmit}>
				<input
					class={style.title}
					type="text"
					placeholder="Task Title..."
					value={data.title}
					onChange={(e) => handleChange('title', (e.target as HTMLInputElement).value)}
				/>

				<div class={`flex flex-row ${style.row}`} style={{ marginTop: '24px' }}>
					<label htmlFor="group" class={style.label}>Group</label>
					<div class={style.col}>
						<Select
							placeholder="Select group..."
							options={groups}
							value={data.group}
							onChange={(e) => handleChange('group', e)}
						/>
					</div>
				</div>

				<div class={`flex flex-row ${style.row}`}>
					<label htmlFor="status" class={style.label}>Status</label>
					<div class={style.col}>
						<Select
							placeholder="Select status..."
							options={statuses}
							value={data.status}
							onChange={(e) => handleChange('status', e)}
						/>
					</div>
				</div>

				<div class={`flex flex-row ${style.row}`}>
					<label htmlFor="start-date" class={style.label}>Start Date</label>
					<div class={style.col}>
						<div class={`${style['input-icon']} flex flex-row items-center`}>
							<img src={icCalendarPurple} alt="" />
							<input
								class={style.input}
								type="text"
								placeholder="Enter start date"
								value={data.startDate}
								onChange={(e) => handleChange('startDate', (e.target as HTMLInputElement).value)}
							/>
						</div>
					</div>
				</div>

				<div class={`flex flex-row ${style.row}`}>
					<label htmlFor="finish-date" class={style.label}>Finish Date</label>
					<div class={style.col}>
						<div class={`${style['input-icon']} flex flex-row items-center`}>
							<img src={icCalendarPurple} alt="" />
							<input
								class={style.input}
								type="text"
								placeholder="Enter finish date"
								value={data.finishDate}
								onChange={(e) => handleChange('finishDate', (e.target as HTMLInputElement).value)}
							/>
						</div>
					</div>
				</div>

				<div class={`flex flex-row ${style.row}`}>
					<label htmlFor="person" class={style.label}>Person</label>
					<div class={style.col}>
						<Select
							placeholder="Select person..."
							options={people}
							value={data.person}
							onChange={(e) => handleChange('person', e)}
						/>
					</div>
				</div>

				<div class={`flex flex-row ${style.row}`}>
					<label htmlFor="time" class={style.label}>Time</label>
					<div class={style.col}>
						<div class={`${style['input-icon']} flex flex-row items-center`}>
							<img src={icClockPurple} alt="" />
							<input
								class={style.input}
								type="text"
								placeholder="Enter time"
								value={data.time}
								onChange={(e) => handleChange('time', (e.target as HTMLInputElement).value)}
							/>
						</div>
					</div>
				</div>

				<div class={`flex flex-row ${style.row}`}>
					<label htmlFor="description" class={style.label}>Description</label>
					<div class={style.col}>
						<textarea
							id="description"
							class={style.input}
							rows={8}
							placeholder="Description..."
							value={data.description}
							onChange={(e) => handleChange('description', (e.target as HTMLInputElement).value)}
						></textarea>
					</div>
				</div>

				<div class={`flex flex-row ${style.action}`}>
					<button
						class="btn-round text-primary"
						onClick={() => closeModal()}
					>
						Cancel
					</button>
					<button
						class={`btn-round text-white ${isDisableSubmit ? 'btn-disable' : 'bg-primary'}`}
						type="submit"
						disable={isDisableSubmit}
					>
						Save
					</button>
				</div>

			</form>
		</div>
	);
}
