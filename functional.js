function getUserInputValue(elementId) {
    return document.getElementById(elementId).value
}

function validate(value) {
    if (value.length === 0)
        return false

    return true
}

function calculate(firstNumber, secondNumber, operator) {
    if (!validate(firstNumber) ||
        !validate(secondNumber) ||
        !validate(operator)) {
        throw Error("Invalid inputtt.")
    }

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

function handleSubmit(event) {
    event.preventDefault()

    const firstNumber = getUserInputValue("first-number")
    const secondNumber = getUserInputValue("second-number")
    const operator = getUserInputValue("operator")

    try {
        const result = calculate(firstNumber, secondNumber, operator)
        console.log(result)
    } catch (error) {
        alert(error.message)
    }

}

function connectForm(formId) {
    const form = document.getElementById(formId)
    form.addEventListener("submit", handleSubmit)
}

connectForm("number-input-form")