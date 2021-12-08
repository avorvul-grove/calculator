const calculator = require('../calculator/operations')

test("Calculator should return addition of two numbers ", function () {
    expect(calculator(1, "+", 2)).toBe(3)
})

test("Calculator should return substraction of two numbers ", function () {
    expect(calculator(2, "-", 1)).toBe(1)
})

test("Calculator should return multiply of two numbers ", function () {
    expect(calculator(1, "*", 2)).toBe(2)
})

test("Calculator should return division of two numbers ", function () {
    expect(calculator(1, "/", 2)).toBe(0.5)
})
