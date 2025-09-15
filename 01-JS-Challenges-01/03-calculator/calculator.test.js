const calculator = require("./calculator");


test("calculator to perform calculations" , ()=>{
    expect(calculator(1 , 2 , "+")).toBe(3)
})

test("calculator to perform calculations" , ()=>{
    expect(calculator(1 , 2 , "-")).toBe(-1)
})

test("calculator to perform calculations" , ()=>{
    expect(calculator(1 , 2 , "*")).toBe(2)
})

test("calculator to perform calculations" , ()=>{
    expect(calculator(1 , 2 , "/")).toBe(0.5)
})

test("calculator to perform calculations" , ()=>{
    expect(calculator(1 , 2 , "**")).toBe("Invalid Operator")
})