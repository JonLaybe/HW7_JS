class Fraction {
    constructor(numerator, denominator){
        this.numerator = numerator; //числитель
        this.denominator = denominator; //знаменатель
    }
}
class WorkFraction {
    constructor(){
    }
    _testFunction(fraction_a, fraction_b, func_return){
        if (fraction_a.denominator === fraction_b.denominator) {
            return func_return();
        }else{
            let temp = fraction_a.denominator;
            fraction_a.numerator *= fraction_b.denominator;
            fraction_a.denominator *= fraction_b.denominator;
            fraction_b.numerator *= temp;
            fraction_b.denominator *= temp;

            return func_return();
        }
    }
    summFraction(fraction_a, fraction_b) { //сумма
        return this._testFunction(fraction_a, fraction_b, () => {
            return new Fraction(fraction_a.numerator + fraction_b.numerator, fraction_a.denominator);
        });
    }
    subtractionFraction(fraction_a, fraction_b) { //вычитание
        return this._testFunction(fraction_a, fraction_b, () => {
            return new Fraction(fraction_a.numerator - fraction_b.numerator, fraction_a.denominator);
        });
    }
    multiplicationFraction(fraction_a, fraction_b) { //умножение
        return new Fraction(fraction_a.numerator * fraction_b.numerator, fraction_a.denominator * fraction_b.denominator);
    }
    divisionFraction(fraction_a, fraction_b) { //деление
        const temp = fraction_b.numerator;
        fraction_b.numerator = fraction_b.denominator;
        fraction_b.denominator = temp;
        return new Fraction(fraction_a.numerator * fraction_b.numerator, fraction_a.denominator * fraction_b.denominator);
    }
    fractionReduction(fraction) {
        function MathNod(a, b){
            if (a !== 0 && b !== 0) {
                if (a > b){
                    a %= b;
                }else{
                    b %= a;
                }

                return MathNod(a, b);
            }else{
                return a+b;
            }
        }
        const temp_divider = MathNod(fraction.numerator, fraction.denominator);

        return new Fraction(fraction.numerator/temp_divider, fraction.denominator/temp_divider);
    }
}
let a = new Fraction(3, 5);
let b = new Fraction(5, 3);

let workFraction = new WorkFraction();
let answer_summ = workFraction.summFraction(a, b);
console.log("summ: ", answer_summ.numerator, answer_summ.denominator);
let answer_subtraction = workFraction.subtractionFraction(a, b);
console.log("subtraction: ", answer_subtraction.numerator, answer_subtraction.denominator);
let answer_multiplication = workFraction.multiplicationFraction(a, b);
console.log("multiplication: ", answer_multiplication.numerator, answer_multiplication.denominator);
let answer_division = workFraction.divisionFraction(a, b);
console.log("division: ", answer_division.numerator, answer_division.denominator);
console.log(workFraction.fractionReduction(answer_division));