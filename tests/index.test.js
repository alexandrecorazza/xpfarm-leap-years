const { leapYear } = require("../src/index");

test("should return 'Invalid input' if the input is out of the range 1600 <= year <= 4000'", () => {
    expect(leapYear(5000)).toBe("Invalid input");
});

test("should return 'Leap year!' if the input is divisible by 4 or 400", () => {
    expect(leapYear(2004)).toBe("Leap year!");
});

test("should return 'Not leap year!' if the input is divisible by 100", () => {
    expect(leapYear(3000)).toBe("Not leap year!");
});

test("should return 'Not leap year!' if the input is not divisible by 100, neither is not divisible by 4 or 400", () => {
    expect(leapYear(2023)).toBe("Not leap year!");
});