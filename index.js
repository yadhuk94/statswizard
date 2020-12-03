const average = (data) => {
  const avg = sum(data) / data.length;

  return avg;
};

const maximum = (data) => Math.max(...data);

const minimum = (data) => Math.min(...data);

const sum = (data) =>
  data.reduce((sum, value) => {
    if (isNaN(value)) return sum + 0;
    else return sum + value;
  }, 0);

const standardDeviation = (values) => {
  const avg = average(values);

  const squareDiffs = values.map((value) => (value * 1 - avg) ** 2);

  const avgSquareDiff = average(squareDiffs);

  const stdDev = Math.sqrt(avgSquareDiff);

  return stdDev;
};

const roundToNearestMultiple = (number, roundNum) => {
  const digits =
    Math.floor(roundNum) === roundNum
      ? 0
      : roundNum.toString().split(".")[1].length || 0;
  const rem = (number % roundNum).toFixed(digits) * 1;
  console.log(rem, digits);
  if (rem >= roundNum / 2) return number + (roundNum - rem);
  else return (number - rem).toFixed(digits) * 1;
};

module.exports = {
  average,
  standardDeviation,
  maximum,
  minimum,
  sum,
  roundToNearestMultiple,
};
