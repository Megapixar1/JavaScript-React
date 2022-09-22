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
"Условия";
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

'Логические операторы';
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
'Циклы';

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

'Цикл в цикле и метки';

//for (let i = 0; i < 3; i++) {
//    console.log(i);
//    for (let j = 0; j < 3; j++) {
//        console.log(j);
//    }
//}

//let result = '';
//const length = 7;

//for (let i = 1; i < length; i++) {

//    for (let j = 0; j < i; j++) {
//        result += "*";
//    }

//    result += '\n';
//}
//console.log(result);

//let result = '';
//const length = 7;

//for (let i = 1; i < length; i++) {

//    for (let j = 0; j < i; j++) {
//        result += '*';
//    }

//    result += '\n';
//}
//console.log(result);
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

//first: for (let i = 0; i < 3; i++) {
//    console.log(`First level ${i}`);

//    for (let j = 0; j < 3; j++) {
//        console.log(`Second level ${j}`);

//        for (let k = 0; k < 3; k++) {
//            console.log(`Trird level ${k}`);
//        }
//    }
//} 

//for (let i = 2; i <= 16; i++) {
//    if (i % 2 === 0) {
//        continue;
//    } else {
//        console.log(i);
//    } 
//}

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

//const arrayOfNumbers = [];

//for (let i = 5; i < 11; i++) {
//    arrayOfNumbers[i - 5] = i
//}
//console.log(arrayOfNumbe

//const arr = [3, 5, 8, 16, 20, 23, 50];
//const result = [];

//for (let i = 0; i < arr.length; i++) {
//    result[i] = arr[i];
//}
//console.log(result);

//let data = [ 5, 10, 'Shopping', 20, 'Homework'];

//for (let i = 0; i < data.length; i++) {
//    if (typeof(data[i]) === 'number') {
//        data[i] *= 2;
//    } else if (typeof(data[i]) === 'string') {
//        data[i] = `${data[i]} - done`;
//    }
//}

//console.log(data);

//let arr2 = [ 5, 10, 'Shopping', 20, 'Homework'];

//for (let i = 0; i < arr2.length; i++) {
//    if(typeof(arr2[i]) === 'number') {
//        arr2[i] *= 2;
//    } else if (typeof(arr2[i]) === 'string') {
//        arr2[i] = `${arr2[i]} - done`;
//    }    
//}

//console.log(arr2);


//let arr = [3, 5, 8, 16, 20, 23, 50];
//let result = [];

//for (let i = 0; i < arr.length; i++) {
//    result[i] = arr[i];
//}

//console.log(result);

//let data = [ 5, 10, 'Shopping', 20, 'Homework' ];
//let result = [];

//for (let i = 1; i <= data.length; i++) {
//    result[i - 1] = data[data.length - i];
//}

//console.log(result);

"use srtict";

//let result = '';
//const length = 7;

//for (let i = 1; i < length; i++) {

//    for (let j = 0; j < i; i++) {
//        result += '*';
//    }

//    result += '\n';
//}

let result = '';
const lines = 5;

for (let i = 0; i <= lines; i++) {

    for (let j = 0; j < lines - i; j++) {
        result += ' ';
    }
    for (let j = 0; j < 2 * i + 1; j++) {
        result += '*';
    }

    result += '\n';
}
console.log(result);

