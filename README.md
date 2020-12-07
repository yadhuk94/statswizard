# statswizard

```javascript
const sw = require("statswizard");
```

## Average

```javascript
const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const avg = sw.average(data);
console.log(avg); // avg => 5.5
```

## Standard Deviation

```javascript
const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const stdDev = sw.standardDeviation(data);
console.log(stdDev); // stdDev => 2.8722813232690143
```

## Maximun

```javascript
const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const max = sw.maximum(data);
console.log(max); // max => 10
```

## Minimum

```javascript
const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const min = sw.minimum(data);
console.log(min); // max => 1
```

## Sum

```javascript
const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sum = sw.sum(data);
console.log(sum); // sum => 55
```

## Round To Nearest Multiple

```javascript
const round1 = sw.roundToNearestMultiple(234, 5);
const round2 = sw.roundToNearestMultiple(234, 3);
const round3 = sw.roundToNearestMultiple(234.232, 0.003);
console.log(round1, round2, round3); // round1 => 235, round2 => 234, round3 => 234.231
```

## Harmonic Mean

Only list with positive numbers allowed.

```javascript
const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const harmonicMean = sw.harmonicMean(data);
console.log(harmonicMean); // harmonicMean => 3.414171521474055
```

## Geometric Mean

List must have all elements of the same sign.

```javascript
const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const geometricMean = sw.geometricMean(data);
console.log(geometricMean); // geometricMean => 4.528728688116765
```
