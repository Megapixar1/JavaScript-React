"Маленька задачка";

//const numberOfFilms = +prompt('Сколько фильмов Вы уже смотрели?', '');

//const personalMovieDB = {
//    count: numberOfFilms,
//    movies: {},
//    actors: {},
//    genres: [],
//    privat: false
//};

//const a = prompt('Один из просмотренных фильмов?', ''),
//      b = prompt('На сколько оцените его?', ''),
//      c = prompt('Один из просмотренных фильмов?', ''),
//      d = prompt('На сколько оцените его?', '');
     
//personalMovieDB.movies[a] = b;
//personalMovieDB.movies[c] = d;
//console.log(personalMovieDB);
"Умови";
//if (4 == 9) {
//    console.log('ok');
//} else {
//    console.log('error');
//}

//const num = 50;

//if (num < 49) {
//    console.log('Error');
//} else if (num > 100) {
//    console.log('Много');
//} else {
//    console.log('Ok!');
//}

//(num === 50) ? console.log('Ok!') : console.log('Error');

//const num = 50;
//switch(num) {
//    case 49:
//        console.log('Неверно');
//        break;
//    case 100:
//        console.log('Неверно');
//        break;
//    case 51:
//        console.log('Верно!');
//        break;        
    
//    default:
//        console.log('Ну не сегодня!');
//        break;   
//}

'Логічні оператори';
//const hamburger = 5;
//const fries = 0;

//if (hamburger && fries) {
//    console.log('Я краще зїм кабана!');
//} 


//const hamburger = 3;
//const fries = 3;
//const cola = 0;
//const nuggets = 2;

//if (hamburger === 3 && cola === 2 || fries === 3 && nuggets) {
//    console.log('Все сыты');
//} else {
//    console.log('Мы уходим ');
//}

//console.log(hamburger === 3 && (cola === 2 || fries === 3) && nuggets);
//console.log(1 && 0);
//console.log(1 && 5);


//const hamburger = 3,
//      fries = 0,
//      cola = 0;

//if (cola || hamburger || fries) {
//    console.log('Мы довольны!');
//} else {
//    console.log('Мы уходим ');
//}

//console.log(cola || hamburger  || fries);

//let johnReport, alexReport, samReport, mariaReport = 'done';

//if (johnReport || alexReport || samReport || mariaReport) {
//    console.log('Мария умничка');
//} else {
//    console.log('Рабы на галерах не працюють');
//}

//console.log(johnReport || alexReport || samReport || mariaReport);

//console.log( NaN || 2 || undefined );
 
//console.log( NaN && 2 && undefined );
 
//console.log( 1 && 2 && 3 );
 
//console.log( !1 && 2 || !3 );
 
//console.log( 25 || null && !3 );
 
//console.log( NaN || null || !3 || undefined || 5);
 
//console.log( NaN || null && !3 && undefined || 5);
 
//console.log( 5 === 5 && 3 > 1 || 5);
'Цикли';

//while (num <= 55) {
//    console.log(num);
//    num++;
//}  

//do {
//    console.log(num);
//    num++;
//}
//while (num < 55);
//let num = 50;
//for (let i = 1; i < 10; i++ ) {
//    if (i === 6) {
//        continue;
//    }
//    console.log(i);
//}

'Цикл в циклі і мітки';

//for (let i = 0; i < 3; i++) {
//    console.log(i);
//    for (let j = 0; j < 3; j++) {
//        console.log(j);
//    }
//}

//first: for (let i = 0; i < 3; i++) {
//    console.log(`First level ${i}`);

//    for (let j = 0; j < 3; j++) {
//        console.log(`Second level ${j}`);

//        for (let k = 0; k < 3; k++) {
//            if (k === 2) break first;
//            console.log(`Trird level ${k}`);
//        }
//    }
//}


"Вивести тільки чотні числа";
//let i = 2;
//while (i <= 16) {
//    if (i % 2 === 0) {
//        i++;
//        continue;
//    } else {
//        console.log(i);
//    }
//    i++;
//}

"Скопіювати один массив в інший";
//const arr = [3, 5, 8, 16, 20, 23, 50];
//const result = [];

//for (let i = 0; i < arr.length; i++) {
//    result[i] = arr[i];
//}
//console.log(result);
"Числаа в массиві помножити на 2, а до строк додати -done";
//let data = [ 5, 10, 'Shopping', 20, 'Homework'];

//for (let i = 0; i < data.length; i++) {
//    if (typeof(data[i]) === 'number') {
//        data[i] *= 2;
//    } else if (typeof(data[i]) === 'string') {
//        data[i] = `${data[i]} - done`;
//    }
//}

//console.log(data);

"Скопіювати массив в інший массив";
//let arr = [3, 5, 8, 16, 20, 23, 50];
//let result = [];

//for (let i = 0; i < arr.length; i++) {
//    result[i] = arr[i];
//}

//console.log(result);
"Скопіювати массив в інший массив задом на перед";
//let data = [ 5, 10, 'Shopping', 20, 'Homework' ];
//let result = [];

//for (let i = 1; i <= data.length; i++) {
//    result[i - 1] = data[data.length - i];
//}

//console.log(result);

'Фігура - пів ялинки';
//let result = '';
//const length = 7;

//for (let i = 1; i < length; i++) {

//    for (let j = 0; j < i; i++) {
//        result += '*';
//    }

//    result += '\n';
//}
"Фігура - ялинка";
//let result = '';
//const lines = 5;

//for (let i = 0; i <= lines; i++) {

//    for (let j = 0; j < lines - i; j++) {
//        result += ' ';
//    }
//    for (let j = 0; j < 2 * i + 1; j++) {
//        result += '*';
//    }

//    result += '\n';
//}
//console.log(result);

'Автоматизація і розширення задачі';

//const numberOfFilms = +prompt('Сколько фильмов Вы уже смотрели?', '');

//const personalMovieDB = {
//      count: numberOfFilms,
//      movies: {},
//      actors: {},
//      genres: [],
//      privat: false
//};

//for (let i = 0; i < 2; i++) {
//    const a = prompt('Один из просмотренных фильмов?', ''),
//          b = prompt('На сколько оцените его?', '');

//    if (a != null && b != null && a != '' && b != '' && a.length < 50 ) {
//        personalMovieDB.movies[a] = b;
//        console.log('done');
//    }  else {
//        console.log('Error');s
//        i--;
//    }   
//}

//if (personalMovieDB.count < 10) {
//    console.log('Просмотрено довольно мало фильмов');
//} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//    console.log('Вы класичекий зритель');
//} else if (personalMovieDB.count >= 30) {
//    console.log('Вы киноман');
//} else {
//    console.log('Произошла ошибка');
//}
//console.log(personalMovieDB);
'Робота з массивами';
//let styles = ['Джас', 'Блюз'];
//styles.push('Рок-н-Родд');
//styles[Math.floor((styles.length - 1) / 2)] = 'Классика';
//console.log(styles.shift());
//styles.unshift('Реп','Регги');
//console.log(styles);

//let arr = ["a", "b"];

//arr.push(function() {
//    alert(this);
//});

//arr[2]();

//console.log(arr);
'Цікава задачка';
//function sunInput() {

//    let numbers = [];
   
//    while (true) {

//        let value = prompt("Введите чесло", 0);

//        if (value === "" || value === null || !isFinite(value)) break;

//        numbers.push(+value);
//    }

//    let sum = 0;
//    for (let number of numbers) {
//        sum += number;
//    }

//    return sum;
//}
//sunInput();


'Функції';
//let num = 20;
//function showFirstMessage(text) {
//    console.log(text);
//    console.log(num);

//}

//showFirstMessage('Hello World'); 
//console.log(num);

//function calc(a, b) {
//    return (a + b);
//}

//console.log(calc(4, 3));

//function ret() {
//    let num = 50;
//    return num;
//}

//const anotherNum = ret();
//console.log(anotherNum);

//const logger = function() {
//    console.log('Hello World');
//};
//logger();

//const calc = (a, b) => a + b;

//const usdCurr = 28;
//const eurCurr = 32;

//function convert(amount, curr) {
//    console.log(curr * amount);
//}

//convert(500, usdCurr);
//convert(500, eurCurr);


//const usdCurr = 28;
//const discount = 0.9;

//function convert(amount, curr) {
//    return amount * curr;
//}

//function promotion(result) {
//    console.log(result * discount);
//}
//const res = convert(500, usdCurr)
//promotion(res);


//function test() {

//    for (let i = 0; i < 5; i++) {
//        console.log(i);
//        if (i === 2 ) return
//     }
//     console.log('Done');
//}
//test();

//function doNothing() {};
//console.log(doNothing() === undefined);


//function sayHello(name) {
//    return `Привет, ${name} `;
//}
//console.log(sayHello('Антон'));



//function returnNeighboringNumbers(num) {
//    return [num - 1, num, num + 1];
//}
//console.log(returnNeighboringNumbers(5));

//'Чудова задачка';
//function getMath(num, times) {
//    if (typeof(times) !== 'number' || times <= 0) {
//        return num;
//    }

//    let str = '';

//    for (let i = 1; i <= times; i++) {
//        if (i === times) {
//            str += `${num * i}`;
//        } else {
//            str += `${num * i}---`;
//        }
//    }

//    return str;
//}

'use strict';
'Методи строк';
//const str = "test";
//console.log(str.toLowerCase());

//let fruit = "Some fruit";
//console.log(fruit.indexOf("fruit"));

//const logg = "Hello world";
//console.log(logg.slice(6, 11));
//console.log(logg.substring(6, 11));  
//console.log(logg.substr(6, 5));  

'Методи чисел';

//const num = 12.2;
//console.log(Math.round(num));

//const test = "12.2px";
//console.log(parseInt(test));
//console.log(parseFloat(test));
//'Вдосконалина задача з фунціями';
////let numberOfFilms;

////function start() {
////    numberOfFilms = +prompt('Сколько фильмов Вы уже смотрели?', '');

////    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
////        numberOfFilms = +prompt('Сколько фильмов Вы уже смотрели?', '');
////    }
////}
////start();

////const personalMovieDB = {
////      count: numberOfFilms,
////      movies: {},
////      actors: {},
////      genres: [],
////      privat: false
////};


////function rememberMyFilms() {
////    for (let i = 0; i < 2; i++) {
////        const a = prompt('Один из просмотренных фильмов?', '').trim(),
////              b = prompt('На сколько оцените его?', '');
    
////        if (a != null && b != null && a != '' && b != '' && a.length < 50 ) {
////            personalMovieDB.movies[a] = b;
////            console.log('done');
////        }  else {
////            console.log('Error');
////            i--;
////        }   
////    }
////}
////rememberMyFilms();

////function detectPersonalLevel() {
////    if (personalMovieDB.count < 10) {
////        console.log('Просмотрено довольно мало фильмов');
////    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
////        console.log('Вы класичекий зритель');
////    } else if (personalMovieDB.count >= 30) {
////        console.log('Вы киноман');
////    } else {
////        console.log('Произошла ошибка');
////    }    
////}
////detectPersonalLevel();

////function showMyDB(hidden) {
////    if (!hidden) {
////        console.log(personalMovieDB);
////    }
////}
////showMyDB(personalMovieDB.privat);

////function writeYourGenres() {
////    for (let i = 1; i <= 3; i++) {
////        personalMovieDB.genres[i - 1] = prompt(`Ваш любимий жанр под номером ${i}`);
////    }
    
////}
////console.log(personalMovieDB);
'Задача 7, яка не може пройти перевірку';
//function calculateVolumeAndArea(length) {

//    if (typeof (length) !== 'number' || length < 0 || !Number.isInteger(length)) {
//        return "При вычисление произошла ошибка";
//    }

//    let volume = 0,
//        area = 0;

//    volume = length * length * length;
//    area = 6 * (length * length);
    
//    return `Обьем куба: ${volume}, площадь всей поверхности: ${area}`;
//}
//console.log(calculateVolumeAndArea(5));

//function getCoupeNumber(seatNuber) {
//    if ( typeof(seatNuber) !== 'number' || !Number.isInteger(seatNuber) || seatNuber < 0) {
//        return "Ошибка. Проверьте правильность введенного номера места";
//    } 
    
    
//    if (seatNuber === 0 || seatNuber > 36) {
//        return "Таких мест в вагоне не существует";
//    }

//    return Math.ceil(seatNuber / 4);
//}
//console.log(getCoupeNumber(22));

//function getTimeFromMinutes(minutesTotal) {
//    if (typeof (minutesTotal) !== 'number' || minutesTotal < 0 || !Number.isInteger(minutesTotal)) {
//        return "Ошибка, проверьте данные";
//    }

//    const hours = Math.floor(minutesTotal / 60);
//    const minutes = minutesTotal % 60;

//    let hoursStr = '';

//    switch (hours) {
//        case 0:
//            hoursStr = 'часов';
//            break;
//        case 1:
//            hoursStr = 'час';
//            break;
//        case 2:    
//        case 3:    
//        case 4:    
//            hoursStr = 'часа';
//            break;
//        default:
//            hoursStr = 'часов';    
//    }

//    return `Это ${hours} ${hoursStr} и ${minutes} минут`;
//}
//console.log(getTimeFromMinutes(190));

//function timeMashin(allMinutes) {
//    if (typeof(allMinutes) !== 'number' || allMinutes < 0 || !Number.isInteger(allMinutes)) {
//        return "Ошибка, проверьте данные";
//    }

//    const hours = Math.floor(allMinutes / 60);
//    const minutes = allMinutes % 60;

//    let houresStr = '';

//    switch(hours) {
//        case 0:
//            houresStr = 'часов';
//            break;
//        case 1:
//            houresStr = 'час';
//            break;
//        case 2:
//        case 3:
//        case 4:
//            houresStr = 'часа';
//            break;
//        default: houresStr = 'часов';    
//    }

//    return `Это ${hours} ${houresStr}, и ${minutes} минут.`; 
//}

//console.log(timeMashin(195));

//function findMaxNumber(a, b, c, d) {
//    if (typeof(a) !== 'number' ||
//        typeof(b) !== 'number' ||
//        typeof(c) !== 'number' ||
//        typeof(d) !== 'number') {
//            return 0;
//        } else {
//            return Math.max(a, b, c, d);
//        }
//    }



// function fib(num) {
//    if (typeof(num) !== 'number' || num <= 0 || !Number.isInteger(num)) {
//        return "";
//    }

//    let result = '';
//    let first = 0;
//    let second = 1;

//    for (let i = 0; i < num; i++) {
//        if (i + 1 === num) {
//            result += `${first}`;
//        } else {
//            result += `${first}`;
//        }

//        let third = first + second;
//        first = second;
//        second = third;
//    }

//    return result;
// }

"Числа Фібаначі з рекурсією";
//function fib(n) {
//    return n <= 1 ? n : fib(n - 1) + fib(n -2);
//}

"Числа Фібаначі без рекурсії";
//function fib(n) {
//    let a = 1;
//    let b = 1;

//    for (let i = 3; i <= n; i++) {
//        let c = a + b;
//        a = b;
//        b = c;
//    }

//    return b;
//}

"Числа Фібаначі без рекурсії задачка курса";
//function fib(num) {
//    if (typeof(num) !== 'number' || num <= 0 || !Number.isInteger(num)) {
//        return "";
//    }

//    let result = '';
//    let first = 0;
//    let second = 1;

//    for (let i = 0; i < num; i++) {
//        if (i + 1 === num) {
//            result += `${first}`;
//        } else {
//            result += `${first}`;
//        }

//        let third = first + second;
//        first = second;
//        second = third;
//    }

//    return result;
//}

//console.log(fib());

//'Callback - function'; 
//function learnJS(leng, callback) {

//    console.log(`Я учу: ${leng}`);
//    callback();

//}

//function done() {
//    console.log('Я прошол этот урок');
//}

//learnJS('JavaScript', done);


//const options = {
//    name: 'test',
//    width: 1024,
//    height: 1024,
//    colors: {
//        border: 'black',
//        bg: 'red'
//    },
//    makeTest: function() {
//        console.log("Test");
//    }
//};
//options.makeTest();

//const {border, bg} = options.colors;
//console.log(border); 
//console.log(Object.keys(options).length);
//console.log(options['colors']['border']);
//let counter = 0;
//for (let key in options) {
//    if (typeof(options[key]) === 'object') {
//        for (let i in options[key]) {
//            console.log(`Свойстo: ${key} имеет значение ${options[key][i]}`);
//            counter++;
//        }
//    } else {
//         console.log(`Свойстo: ${key} имеет значение ${options[key]}`);
//         counter++;
//    }
//}

//const arr = [1, 2, 3, 6, 8];
//arr[99] = 0;
//console.log(arr.length);
//console.log(arr);

//arr.forEach(function(item, i, arr) {
//    console.log(`${i}: ${item} внутри массива ${arr}`);
//});
//  arr.pop();
//  arr.push(10);
//  console.log(arr);

//  for (let i = 0; i < arr.length; i++) {
//        console.log(arr[i]);
//  }

//  for (let value of arr) {
//    console.log(value); 
//  }

//const str = prompt("", "");
//const products = str.split(", ");
//products.sort();
//console.log(products.join('; '));

//const arr = [2, 13, 26, 8, 10];
//arr.sort(compareNum);
//console.log(arr);

//function compareNum(a, b) {
//    return a - b;
//}

//let a = 5,
//    b = a;

//b += 5; 

//console.log(b);
//console.log(a);


//const obj = {
//    a: 5,
//    b: 1
//};

//const copy = obj;
//copy.a = 10;

//console.log(obj);
//console.log(copy);


//function copy(mainObj) {
//    let objCopy = {};

//    let key;
//    for (key in mainObj) {
//        objCopy[key] = mainObj[key];
//    }

//    return objCopy;
//}

//const numbers = {
//    a: 2,
//    b: 5,
//    c: {
//        x: 7,
//        y: 4
//    }
//};

//const newNumers = copy(numbers);
//newNumers.a = 10;
//console.log(newNumers);


//const add = {
//    d: 17,
//    e: 20
//};
//const clone = Object.assign({}, add);
//clone.d = 20;
//console.log(add);
//console.log(clone);


//const oldArray = ['a', 'b', 'c'];
//const newArray = oldArray.slice();

//newArray[1] = 'Kolosovskyi';

//console.log(newArray);
//console.log(oldArray);

//const video = ['youtube', 'vimeo', 'rutube'],
//      blogs = ['wordpress', 'livejournal', 'blogger'],
//      internet = [...blogs, ...video, 'vk', 'facebook'];      

//console.log(internet);  

//function log(a, b, c) {
//    console.log(a);
//    console.log(b);
//    console.log(c);
//}
//const num = [2, 5, 7];

//log(...num);


//const array = ['a', 'b'];

//const newAarraey = [...array];

//const q = {
//    one: 1,
//    two: 2
//};

//const newObj = {...q}

//const personalPlanPeter = {
//    name: "Peter",
//    age: "29",
//    skills: {
//        languages: ['ru', 'eng'],
//        programmingLangs: {
//            js: '20%',
//            php: '10%'
//        },
//        exp: '1 month'
//    },

//    showAgeAndLangs: function(plan) {
//        const {age} = plan;
//        const {languages} = plan.skills;
//        let str = `Мне ${age} и я владею языками: `;

//        languages.forEach(function(lang) {
//            str += `${lang.toUpperCase()}`;
//        });
//        return str;
//    }
//};

//function showExperience(plan) {
//    const {exp} = plan.skills;
//    return `${exp}`;
//}
//console.log(showExperience(personalPlanPeter));

//function showProgrammingLangs(plan) {
//    let str = '';
//    const {programmingLangs} = plan.skills;

//    for (let key in programmingLangs) {
//        str += `Язык ${key} изучен на ${programmingLangs[key]}\n`
//    }

//    return str;
//}
//console.log(showProgrammingLangs(personalPlanPeter));

//const family = ['Peter', 'Ann', 'Alex', 'Linda'];

//function showFamily(arr) {
//    let str = '';

    //arr.length === 0 ? str = 'Семья пуста' : str = 'Семья состоит из: ';

    //arr.forEach(member =>{
    //    str += `${member} `;
    //});

//    return str;
//}
//console.log(showFamily(family));
//function showFamily(arr) {
//    let str = 'Семья состоит из: ';

//    for (let item of arr) {
//        str += ` ${item}`;
//    }

//    return str;
//}

//alert(showFamily(family));

//const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

//function standardizeStrings(arr) {
//    let str = '';

//    arr.forEach(item =>{
//        str += `${item} `.toLowerCase();
//    });
    
//    return str;
//}

//console.log(standardizeStrings(favoriteCities));


//const someString = 'This is some strange string'; 

//function reverse(str) {
//    if (typeof(str) !== 'string') {
//        return "Ошибка!";
//    } 

//    return str.split('').reverse().join('');
//}
//console.log(reverse(someString));

//const baseCurrencies = ['USD', 'EUR'];
//const additionalCurrencies = ['UAH', 'RUB', 'CNY'];


//function availableCurr(arr, missingCurr) {
//  let str = '';

//  arr.length === 0 ? str = 'Нет доступных валют' : str = 'Доступные валюты:\n';

//  arr.forEach(function(curr, i) {
//    if (curr !== missingCurr) {
//        str += `${curr}\n`;
//    }
//  });

//  return str;
//}
//console.log(availableCurr([...baseCurrencies, ...additionalCurrencies]), 'UAH');

//const soldier = {
//    health: 400, 
//    armor: 100,
//    sayHello: function() {
//        console.log('Hello');
//    }
//};

//const jonh = Object.create(soldier);

//const jonh = {
//    health: 100
//};

//jonh.__proto__ = soldier;
//Object.setPrototypeOf(jonh, soldier);

//console.log(jonh);
//jonh.sayHello();

//let numberOfFilms;

//function start() {
//    numberOfFilms = +prompt('Сколько фильмов Вы уже смотрели?', '');

//    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
//        numberOfFilms = +prompt('Сколько фильмов Вы уже смотрели?', '');
//    }
//}
//start();

//const personalMovieDB = {
//      count: numberOfFilms,
//      movies: {},
//      actors: {},
//      genres: [],
//      privat: false
//};


//function rememberMyFilms() {
//    for (let i = 0; i < 2; i++) {
//        const a = prompt('Один из просмотренных фильмов?', '').trim(),
//              b = prompt('На сколько оцените его?', '');
    
//        if (a != null && b != null && a != '' && b != '' && a.length < 50 ) {
//            personalMovieDB.movies[a] = b;
//            console.log('done');
//        }  else {
//            console.log('Error');
//            i--;
//        }   
//    }
//}
'Вдосконалина задача з фунціями 2';

//const personalMovieDB = {
//      count: 0,
//      movies: {},
//      actors: {},
//      genres: [],
//      privat: false,
//      start:  function() {
//        personalMovieDB.count = +prompt('Сколько фильмов Вы уже смотрели?', '');
    
//        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
//                personalMovieDB.count = +prompt('Сколько фильмов Вы уже смотрели?', '');
//            }
//     },
//     rememberMyFilms: function() {
//        for (let i = 0; i < 2; i++) {
//            const a = prompt('Один из просмотренных фильмов?', '').trim(),
//                  b = prompt('На сколько оцените его?', '');
        
//            if (a != null && b != null && a != '' && b != '' && a.length < 50 ) {
//                personalMovieDB.movies[a] = b;
//                console.log('done');
//            }  else {
//                console.log('Error');
//                i--;
//            }   
//        }
//    },
//    detectPersonalLevel: function() {
//        if (personalMovieDB.count < 10) {
//            console.log('Просмотрено довольно мало фильмов');
//        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//            console.log('Вы класичекий зритель');
//        } else if (personalMovieDB.count >= 30) {
//            console.log('Вы киноман');
//        } else {
//            console.log('Произошла ошибка');
//        }    
//    },
//    showMyDB: function(hidden) {
//        if (!hidden) {
//            console.log(personalMovieDB);
//        }
//    },
//    toggleVisibleMyDB: function() {
//        if (personalMovieDB.privat) {
//            personalMovieDB.privat = false;
//        } else {
//            personalMovieDB.privat = true;
//        }
//    },
//    writeYourGenres: function() {
//        for (let i = 1; i <= 3; i++) {
//            let genre = prompt(`Ваш любимий жанр под номером ${i}`);

//            if (genre == '' || genre === null) {
//                console.log('Вы ввели некорректные данные или не ввели их вообще');
//                i--;
//            } else {
//               personalMovieDB.genres[i - 1] = genre; 
//            }
//        }

//        personalMovieDB.genres.forEach((item, i) => {
//            console.log(`Любимый жанр номер ${i + 1} - это ${item}`);
//        });
//    }
//};

//const shoppingMallData = {
//    shops: [
//        {
//            width: 10,
//            length: 5
//        },
//        {
//            width: 15,
//            length: 7
//        },
//        {
//            width: 20,
//            length: 5
//        },
//        {
//            width: 8,
//            length: 10
//        }
//    ],
//    height: 5,
//    moneyPer1m3: 30,
//    budget: 50000
//};

//function isBudgetEnough(data) {
//    let square = 0;
//    let volume = 0;

//    data.shops.forEach(shop =>{
//        square += shop.width * shop.length;
//    });

//    volume = data.height * square;

//    if(data.budget - (volume * data.moneyPer1m3) >= 0) {
//        return 'Бюджета достаточно';
//    } else {
//        return 'Бюджета недостаточно';
//    }
//}

//const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];

//function sortStudentsByGroups(arr) {
//    arr.sort();
//    const a = [], b = [], c = [], rest = [];

//    for (let i = 0; i < arr.length; i++) {
//        if (i < 3) {
//            a.push(arr[i]);
//        } else if (i < 6) {
//            b.push(arr[i]);
//        } else if (i < 9) {
//            c.push(arr[i]);
//        } else {
//            rest.push(arr[i]);
//        }
//    }
//    return [a, b, c, `Оставшиеся студенты: ${rest.length === 0 ? '-' : rest.join(', ')}`];
//}

//console.log(sortStudentsByGroups(students));

//To String
//const num = 5;
//console.log("https://vk.com/catalog/" + 5);
//const fontSize = 26 + 'px';

//To Number
//console.log(typeof(Number('4')));
//console.log(typeof(+'5'));
//console.log(typeof(parseInt('15px', 10)));

//To Boolean
//let switcher = 1;
//if (switcher) {
//    console.log('Working...');
//}

//let number = 5; debugger

//function logNumber() {
//    console.log(number); debugger
//}
//number = 6;
//logNumber(); debugger

//number = 8;
//logNumber(); debugger

//function createCounter() {
//    let counter = 0;

//    const myFunction = function () {debugger
//        counter += 1;debugger
//        return counter; debugger
//    };

//    return myFunction;
//}
//debugger
//const increment = createCounter();debugger
//const c1 = increment();debugger
//const c2 = increment();debugger
//const c3 = increment();debugger

//console.log(c1, c2, c3);
//let a = 3;
//function addTwo(x) {
//    let ret = x + 2;
//    return ret;
//}

//let b = addTwo(a);
//console.log(b);

//let val1 = 2;
//function multiplyThis(n) {
//    let ret = n * val1;
//    return ret;
//}
//let multiplyed = multiplyThis(6);
//console.log('Example of scope:',  multiplyed);


//let val = 7;
//function createAdder() {
//    function addNumbers(a, b) {
//        let ret = a +b;
//        return ret;
//    }
//    return addNumbers;
//}
//let adder = createAdder();
//let sum = adder(val, 8);
//console.log('example of function returning a function: ', sum);

//function createCounter() {
//    let counter = 0;

//    const myFunction = function() {
//        counter += 1;
//        return counter;
//    };

//    return myFunction;
//}

//const increment = createCounter();
//const c1 = increment();
//const c2 = increment();
//const c3 = increment();
//console.log('example increment', c1, c2, c3);

//function makeCounter() {

//    function counter() {
//        return counter.count++;
//    }

//    counter.count = 0;
//    return counter;
//}
//let counter = makeCounter();
//console.log(counter());
//console.log(counter());
//console.log(counter());

const restorantData = {
    menu: [
        {
            name: 'Salad Caesar',
            price: '14$'
        },
        {
            name: 'Pizza Diavola',
            price: '9$'
        },
        {
            name: 'Beefsteak',
            price: '17$'
        },
        {
            name: 'Napoleon',
            price: '7$'
        }
    ],
    waitors: [
        {name: 'Alice', age: 22}, {name: 'John', age: 24}
    ],
    averageLunchPrice: '20$',
    openNow: true
};


function isOpen(prop) {
    let answer = '';
    prop ? answer = 'Открыто' : answer = 'Закрыто';

    return answer;
}

console.log(isOpen(restorantData.openNow));