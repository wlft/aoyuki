import { i18n } from "../locales/translation";
import I18nKeys from "../locales/keys";

const months = [
	I18nKeys.date_month_january,
	I18nKeys.date_month_february,
	I18nKeys.date_month_march,
	I18nKeys.date_month_april,
	I18nKeys.date_month_may,
	I18nKeys.date_month_june,
	I18nKeys.date_month_july,
	I18nKeys.date_month_august,
	I18nKeys.date_month_september,
	I18nKeys.date_month_october,
	I18nKeys.date_month_november,
	I18nKeys.date_month_december,
];

/**
 * Formats a Date object to a string based on the specified locales and options.
 *
 * @param date - The Date object to format.
 * @param locales - A string representing the locales to use; defaults to 'en'.
 * @param options - An Intl.DateTimeFormatOptions object defining formatting behavior; defaults to an object with year, month, and day.
 * @returns A formatted date string with slashes replaced by ' - '.
 */
export function formatDate(
	date: Date,
	locales: string = "en",
	options: Intl.DateTimeFormatOptions = {
		month: "2-digit",
		year: "numeric",
		day: "2-digit",
	},
) {
	return date.toLocaleDateString(locales, options).replaceAll("/", " - ");
}

export function formatDateFull(date: Date): string {
	const day = date.getDate();
	const month = date.getMonth();
	const year = date.getFullYear();

	// const dayf = day < 10 ? '0' + day : day
	// const monthf = month < 10 ? '0' + month : month

	const datef = `${day} ${i18n(months[month])} ${year}`;

	return datef;
}
