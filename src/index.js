module.exports = function toReadable (number) {
  let readableNumber = "";
  let unitsInWord = {
    0: "zero",
    1: "one",
    2: "two",
    3: "three",
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine"
  };
  let firstDozen = {
    10: "ten",
    11: "eleven",
    12: "twelve",
    13: "thirteen",
    14: "fourteen",
    15: "fifteen",
    16: "sixteen",
    17: "seventeen",
    18: "eighteen",
    19: "nineteen"
  };
  let dozensInWord = {
    2: "twenty",
    3: "thirty",
    4: "forty",
    5: "fifty",
    6: "sixty",
    7: "seventy",
    8: "eighty",
    9: "ninety"
  };

  numberLength = number.toString().length;
  numberString = number.toString();

  if (numberLength === 1) {
    readableNumber = unitsInWord[numberString];
  }

  if (numberLength === 2) {
    if (numberString[0] == 1) {
      readableNumber = firstDozen[numberString];
    }
    if (numberString[0] > 1) {
      if (numberString[1] == 0) {
        readableNumber = dozensInWord[+numberString[0]];
      }
      if (numberString[1] > 0) {
        readableNumber = dozensInWord[+numberString[0]] + " " + unitsInWord[+numberString[1]];
      }
    }
  }

  if (numberLength === 3) {
    if (numberString[1] == 0) {
      if (numberString[2] == 0) {
        readableNumber = unitsInWord[+numberString[0]] + " hundred";
      }
      if (numberString[2] > 0) {
        readableNumber = unitsInWord[+numberString[0]] + " hundred " + unitsInWord[+numberString[2]];
      }
    }
    if (numberString[1] == 1) {
      readableNumber = unitsInWord[+numberString[0]] + " hundred " + firstDozen[number - +numberString[0] * 100];
    }
    if (numberString[1] > 1) {
      if (numberString[2] == 0) {
        readableNumber = unitsInWord[+numberString[0]] + " hundred " + dozensInWord[+numberString[1]];
      }
      if (numberString[2] > 0) {
        readableNumber = unitsInWord[+numberString[0]] + " hundred " + dozensInWord[+numberString[1]] + " " + unitsInWord[+numberString[2]];
      }
    }
  }

  return readableNumber;
}
