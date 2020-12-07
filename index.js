const mean = (data) => {
  const avg = sum(data) / data.length;

  return avg;
};

const harmonicMean = (data) => {
  const invSum = data.reduce((invSum, val) => {
    if (isNaN(val) || val <= 0) {
      console.error(
        "One of your numbers is a non positive number. Please make sure all the numbers in the list are positive"
      );
      return undefined;
    }

    return invSum + 1 / val;
  }, 0);

  return isNaN(invSum) ? undefined : data.length / invSum;
};

const geometricMean = (data) => {
  let positive = [];
  let negative = [];
  const prod = data.reduce((prod, val) => {
    if (isNaN(val)) {
      console.error("One of the elements is not a number");
      return undefined;
    }

    if (val < 0) {
      negative.push(val);
      return prod * val * -1;
    }
    if (val > 0) {
      positive.push(val);
    }

    return prod * val;
  }, 1);

  if (positive.length !== 0 && negative.length !== 0) {
    console.error(
      "Geometric mean can only be calculated when all numbers have the same sign."
    );
    return undefined;
  }

  return isNaN(prod)
    ? undefined
    : positive.length === 0 && negative.length !== 0
    ? -1 * prod ** (1 / data.length)
    : prod ** (1 / data.length);
};

const maximum = (data) => Math.max(...data);

const minimum = (data) => Math.min(...data);

const sum = (data) =>
  data.reduce((sum, value) => {
    if (isNaN(value)) return sum + 0;
    else return sum + value;
  }, 0);

const standardDeviation = (values) => {
  const avg = mean(values);

  const squareDiffs = values.map((value) => (value * 1 - avg) ** 2);

  const avgSquareDiff = mean(squareDiffs);

  const stdDev = Math.sqrt(avgSquareDiff);

  return stdDev;
};

const roundToNearestMultiple = (number, roundNum) => {
  const digits =
    Math.floor(roundNum) === roundNum
      ? 0
      : roundNum.toString().split(".")[1].length || 0;
  const rem = (number % roundNum).toFixed(digits) * 1;

  if (rem >= roundNum / 2) return number + (roundNum - rem);
  else return (number - rem).toFixed(digits) * 1;
};

module.exports = {
  mean,
  standardDeviation,
  maximum,
  minimum,
  sum,
  roundToNearestMultiple,
  harmonicMean,
  geometricMean,
};
