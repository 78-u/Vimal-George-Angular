const arrMax = (numbers) => {
  let maxNumber = -Infinity;
  numbers.forEach((number) => {
    if (number > maxNumber) {
      maxNumber = number;
    }
  });
  return maxNumber;
};

const numbers = [15, 27, 36, 10, 8];
const largestNumber = arrMax(numbers);
console.log("Largest number:", largestNumber);