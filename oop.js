class Validator {
    static validate(value) {
        if (value.length === 0)
            return false

        return true
    }
}

class Calculation {
    static calculate(firstNumber, secondNumber, operator) {
        switch (operator) {
            case "+":
                return parseInt(firstNumber) + parseInt(secondNumber)
            case "-":
                return parseInt(firstNumber) - parseInt(secondNumber)
            case "*":
                return parseInt(firstNumber) * parseInt(secondNumber)
            case "/":
                return parseInt(firstNumber) / parseInt(secondNumber)
        }
    }

}

class InputForm {
    constructor() {
        this.form = document.getElementById("number-input-form")
        this.firstNumber = document.getElementById("first-number")
        this.secondNumber = document.getElementById("second-number")
        this.operator = document.getElementById("operator")

        this.form.addEventListener("submit", this.handleSubmit.bind(this))
    }

    handleSubmit(event) {
        event.preventDefault()

        const firstNumberValue = this.firstNumber.value
        const seocndNumberValue = this.secondNumber.value
        const operatorValue = this.operator.value

        if (!Validator.validate(firstNumberValue) ||
            !Validator.validate(seocndNumberValue) ||
            !Validator.validate(operatorValue)) {
            alert("Invalid input")
            return
        }

        const result = Calculation.calculate(firstNumberValue, seocndNumberValue, operatorValue)
        console.log(result)
    }
}

new InputForm()