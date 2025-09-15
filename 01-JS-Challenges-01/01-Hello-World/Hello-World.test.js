const helloWorld = require("./01-Hello-World");

test("Hello-World" , ()=>{
    expect(helloWorld()).toBe("Hello World");
})

