import moment from 'moment';

/* Convert number to hour in AM/PM */
export const convertHour = (hour: number) => {
	return moment(hour, ['HH']).format('hh:mm A');
}

/* Define if a date is weekend or not */
export const isWeekend = (date) => {
	let dayOfWeek = date.day();
	return (dayOfWeek === 6) || (dayOfWeek  === 0);   // 6 = Saturday, 0 = Sunday
}
