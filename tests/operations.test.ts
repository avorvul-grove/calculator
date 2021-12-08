const {calculator}= require ('/calculator')

test ( "Calculator should be return addition of two numbers "), function(){
expect (calculator (1, "+", 2)).toBe (3)
}
test ( "Calculator should be return substraction of two numbers "), function(){
    expect (calculator (2, "-", 1)).toBe (1)
}
test ( "Calculator should be return multiply of two numbers "), function(){
    expect (calculator (1, "*", 2)).toBe (2)
}
test ( "Calculator should be return division of two numbers "), function(){
    expect (calculator (1, "/", 2)).toBe (0.5)
    }