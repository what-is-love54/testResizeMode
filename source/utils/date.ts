/** @format */

const monthDateShortEN = [
	'Jan',
	'Feb',
	'Mar',
	'Apr',
	'May',
	'Jun',
	'Jul',
	'Aug',
	'Sep',
	'Oct',
	'Nov',
	'Dec',
];

const monthDateLongEN = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December',
];

export const dateFormatHelper = (
	data: string,
	isShortMonth = true as boolean,
): {
	time: number;
	minutes: number;
	timeHint: string;
	date: number;
	month: string;
	year: number;
	dayName: string;
	monthNumber: number;
} => {
	const dateTime = new Date(data);

	const locales = 'en-EN';

	const dateLocalizeINTL = new Intl.DateTimeFormat(locales, {
		weekday: 'long',
	}).format(dateTime);

	const time = dateTime.getHours();

	const minutes = dateTime.getMinutes();
	const timeHint = time >= 12 ? 'PM' : 'AM';
	const date = dateTime.getDate();
	const year = dateTime.getFullYear();

	const month = isShortMonth
		? monthDateShortEN[dateTime.getMonth()]
		: monthDateLongEN[dateTime.getMonth()];

	const monthNumber = dateTime.getMonth() + 1;
	const dayName = dateLocalizeINTL
		.toString()
		.split(' ')[0]
		.substring(0, 3)
		.toUpperCase();

	return {time, minutes, timeHint, date, month, year, dayName, monthNumber};
};

export const nths = (day: number) => {
	if (day > 3 && day < 21) {
		return day + 'th';
	}
	switch (day % 10) {
		case 1:
			return day + 'st';
		case 2:
			return day + 'nd';
		case 3:
			return day + 'rd';
		default:
			return day + 'th';
	}
};
