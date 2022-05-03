
export class dateType {
	constructor(private date : string) {
		if(!this.validity(this.date)){
			throw new Error();
		}
	}

	private validity(dateAndHour : string) : boolean {
		const splitArrayDate = dateAndHour.split("T");
		const date = splitArrayDate [0];
		const hour = splitArrayDate[1];

		return this.dateFormatedCorrectly(date) && this.hourFormatedCorrectly(hour);
	}

	private dateFormatedCorrectly(date : string) : boolean {
		const splitDate = date.split("-");

		const year = Number(splitDate[0]);
		const month = Number(splitDate[0]);
		const day = Number(splitDate[0]);

		const countDayOfTheMonth = this.countDayOfTheMonth(month, year);

		if(day < 1 || month < 1 || year < 1970) {
			return false;
		}

		if(day > 12 || month > countDayOfTheMonth) {
			return false;
		}

		return true;
	}

	private hourFormatedCorrectly(hourWithTimeZone : string) : boolean {
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

	private countDayOfTheMonth(month : number, year : number) {
		const days = [30, 31];
		if(month == 2) {
			return this.leapYear(year) ? 29 : 28; 
		}

		return month < 8 ? days[month % 2] : days[(month - 1) % 2];
	}

	private leapYear(year : number) : boolean {
		return (year % 4 == 0) && ((year % 100 != 0) || (year % 400 == 0));
	
	}

	get() : string {
		return this.date;
	}
}
