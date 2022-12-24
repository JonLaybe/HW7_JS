class DateTime {
    constructor(hours, minutes, secondes) {
        this.hours = hours;
        this.minut = minutes;
        this.sec = secondes;
    }
    _normalizationTime() {
        if (this.sec > 59){
            this.sec -= 60;
            this.minut++;
            this._normalizationTime();
        }
        if (this.sec < 0) {
            this.sec = 59;
            this.minut--;
            this._normalizationTime();
        }
        if (this.minut > 59) {
            this.minut -= 60;
            this.hours++;
            this._normalizationTime();
        }
        if (this.minut < 0) {
            this.minut = 59;
            this.hours--;
            this._normalizationTime();
        }
        if (this.hours > 23) {
            this.hours = 0;
        }
        if (this.hours < 0) {
            this.hours = 23;
        }
        return;
    }
    changeSecondsTime(value_sec) {
        this.sec += value_sec;
        this._normalizationTime();
    }
    changeMinutesTime(value_min) {
        this.minut += value_min;
        this._normalizationTime();
    }
    changeHourTime(value_hour){
        this.hours += value_hour;
        this._normalizationTime();
    }
    showDateTime() {
        let result_time = "";

        result_time += this.hours < 10 ? `0${this.hours}:` : `${this.hours}:`;
        result_time += this.minut < 10 ? `0${this.minut}:` : `${this.minut}:`;
        result_time += this.sec < 10 ? `0${this.sec}` : `${this.sec}`;

        console.log(result_time);
    }
}

let time = new DateTime(20, 16, 50);
time.showDateTime();
time.changeSecondsTime(-60);
time.showDateTime();
time.changeMinutesTime(120);
time.showDateTime();
time.changeHourTime(-20);
time.showDateTime();