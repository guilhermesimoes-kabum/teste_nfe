
export abstract class dhEmi {
	static get(date : string) : string {
		if(dhEmi.validity(date)){
			return date;
		}
		throw new Error();
	}

	static validity(dateAndHour : string) : boolean {
		const splitArrayDate = dateAndHour.split("T");
		const date = splitArrayDate [0];
		const hour = splitArrayDate[1];

		return dhEmi.dateFormatedCorrectly(date) && dhEmi.hourFormatedCorrectly(hour);
	}

	static dateFormatedCorrectly(date : string) : boolean {
		const splitDate = date.split("-");

		const year = Number(splitDate[0]);
		const month = Number(splitDate[0]);
		const day = Number(splitDate[0]);

		const countDayOfTheMonth = dhEmi.countDayOfTheMonth(month, year);

		if(day < 1 || month < 1 || year < 1970) {
			return false;
		}

		if(day > 12 || month > countDayOfTheMonth) {
			return false;
		}

		return true;
	}

	static hourFormatedCorrectly(hourWithTimeZone : string) : boolean {
		const hourMinuteSeconds = hourWithTimeZone.split("-")[0];
		const hourMinuteSecondsSplit = hourMinuteSeconds.split(":");

		const hour = Number(hourMinuteSecondsSplit[0]);
		const minute = Number(hourMinuteSecondsSplit[1]);
		const seconds = Number(hourMinuteSecondsSplit[2]);

		if(hour < 0 || minute < 0 || seconds < 0) {
			return false;
		}

		return hour < 24 && minute < 60 && seconds < 60;
	}

	static countDayOfTheMonth(month : number, year : number) {
		const days = [30, 31];
		if(month == 2) {
			return dhEmi.leapYear(year) ? 29 : 28; 
		}

		return month < 8 ? days[month % 2] : days[(month - 1) % 2];
	}

	static leapYear(year : number) : boolean {
		return year != null && ((year % 4 == 0) && ((year % 100 != 0) || (year % 400 == 0)));
	}
}
