var AIS = AIS || {};

AIS.currentArray1 = [5, 9, 6, - 2, 10, 7, 8, 22];

console.log(AIS.currentArray1.sort(function (arrayValue1, arrayValue2) {
    return arrayValue1 - arrayValue2;
}));

console.log(AIS.currentArray1.filter(function (arrayValue, index) {
    return index < 5;
}));

console.log(AIS.currentArray1.filter(function (arrayValue, index) {
    return index > AIS.currentArray1.length - 6;
}));

console.log(AIS.currentArray1.filter(function (arrayValue) {
    return arrayValue % 2 === 0;
}).reduce(function (evenElementsSum, arrayValue) {
    return evenElementsSum + arrayValue;
}));

AIS.currentArray2 = [];

for (i = 0; i < 100; i++) {
    AIS.currentArray2[i] = i + 1;
}

console.log(AIS.currentArray2);

console.log(AIS.currentArray2.filter(function (arrayValue) {
    return arrayValue % 2 === 0;
}).map(function (arrayValue) {
    return Math.pow(arrayValue, 2);
}));