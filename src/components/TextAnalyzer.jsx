export const wordCounter = (text) => {
  if (text === "") {
    return 0;
  }
  return text.trim().split(/\s+/).length;
};

export const characterCounter = (text) => {
  return text.length > 0 ? text.length : 0;
};

export const filteredCharacterCounter = (text) => {
  return text.split("").filter((character) => {
    return /^[a-zA-Z0-9]$/.test(character);
  }).length;
};

export const numberCounter = (text) => {
  return text.split("").filter((character) => /\d/.test(character)).length;
};

export const getSum = (text) => {
  const stringNumbers = text.split("").filter((character) => {
    return /\d/.test(character);
  });
  let numbers = stringNumbers.map((stringNumber) => {
    return parseInt(stringNumber);
  });
  let sum = numbers.reduce((acc, curr) => acc + curr, 0);
  return sum;
};
