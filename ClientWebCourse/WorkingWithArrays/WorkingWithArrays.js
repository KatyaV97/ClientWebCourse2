var AIS = AIS || {};

AIS.currentArray1 = [5, 9, 6, - 2, 10, 7, 8, 22];

//1. Сортировка по убыванию
console.log(AIS.currentArray1.sort(function (arrayValue1, arrayValue2) {
    return arrayValue2 - arrayValue1;
}));

//2.1. Получение первых пяти элементов
console.log(AIS.currentArray1.slice(0, 5));

//2.2. Получение последних пяти элементов
console.log(AIS.currentArray1.slice(AIS.currentArray1.length - 5));

//3. Получение суммы всех четных чисел массива
console.log(AIS.currentArray1.filter(function (arrayValue) {
    return arrayValue % 2 === 0;
}).reduce(function (evenElementsSum, arrayValue) {
    return evenElementsSum + arrayValue;
}));

AIS.currentArray2 = [];

for (i = 1; i <= 100; i++) {
    AIS.currentArray2.push(i);
}

console.log(AIS.currentArray2);

//4. Получение списка квадратов всех четных чисел массива
console.log(AIS.currentArray2.filter(function (arrayValue) {
    return arrayValue % 2 === 0;
}).map(function (arrayValue) {
    return Math.pow(arrayValue, 2);
}));