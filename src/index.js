const leapYear = (year) => {
  if (year <= 1600 || year >= 4000) {
    return "Invalid input";
  } else {
    if ((year % 4 == 0 || year % 400 == 0) && year % 100 != 0) {
      return "Leap year!";
    } else {
      return "Not leap year!"
    }
  }
};

leapYear(2000);
  
module.exports = {
  leapYear,
};