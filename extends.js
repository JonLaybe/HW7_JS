class Car {
    constructor(manufacturer, model, yearIssue, meanSpeed) {
        this.manufacturer = manufacturer; //производитель
        this.model = model; //модель
        this.yearIssue = yearIssue; //год выпуска
        this.meanSpeed = meanSpeed; //средняя скорость
    }
    showInfo() {
        console.log(`Производитель: ${this.manufacturer}\nМодель: ${this.model}\nГод выпуска: ${this.yearIssue}\nСредняя скорость: ${this.meanSpeed}`);
    }
    calculateTime(s) {
        let t = s/this.meanSpeed;
        if (t >= 4)
            t += Math.trunc(t/4);
        return t;
    }
}

let car = new Car("BMW", "X5", 2015, 100);
car.showInfo();
console.log(car.calculateTime(635));