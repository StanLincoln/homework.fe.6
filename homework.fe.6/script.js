// 1. отфильтровать нечетные числа
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const oddNum = numbers.filter((el) => el % 2 === 1);
console.log(oddNum);

// 2. Отфильтровать строки длинее 5 символов
const words = ["apple", "cat", "banana", "dog", "elephant", "car", "bat"];
const moreLength = words.filter((el) => el.length > 5);
console.log(moreLength);

// 3. Оставить только строки
const mixedTypes = [ 123, "apple", { fruit: "apple" }, "banana", true, "car", false ];
const onlyStr = mixedTypes.filter((el) => typeof el === "string");
console.log(onlyStr);

// 4. Офильтровать строки которые начинаются на a
const words2 = ["apple", "banana", "apricot", "grape", "avocado", "kiwi"];
const withA = words2.filter((el) => el[0] === "a");
console.log(withA);

//  5. Отфильтровать строки, которые не содержат букву e
const words3 = ["apple", "banana", "cherry", "date", "fig", "grape", "kiwi"];
const withoutE = words3.filter((el) => !el.includes("e"));
console.log(withoutE);

// 6. Посложнее. Отфильтровать студентов с оценками выше 80
const students = [
  { name: "John", grade: 85 },
  { name: "Jane", grade: 78 },
  { name: "Doe", grade: 90 },
  { name: "Smith", grade: 76 },
  { name: "Chris", grade: 81 },
];
const more80 = students.filter((el) => el.grade > 80);
console.log(more80);

// 7. Сложная. Отфильтровать повторяющиеся числа
// можно использовать indexOf()
const duplicates = [1, 2, 3, 2, 4, 5, 5, 6, 7, 8];
const norepeatNum = duplicates.filter((el, i, arr) => arr.indexOf(el) === i);
console.log(norepeatNum);

// 2.1 Добавить восклицательный знак в конце каждого слова
const words2 = ["hello", "world", "javascript"];
const newWords = words2.map((el) => el + "!");
console.log(newWords);

// 2.2  Добавить нумерацию каждого слова 1. Apple etc.
const words1 = ["apple", "banana", "cherry"];
const numWords = words1.map((el, i) => `${i + 1}. ${el}`);
console.log(numWords);

// 2.3 Сделать все числа положительными
const numbers3 = [1, -2, 3, -4, 5];
const positiveNum = numbers3.map((el) => (el < 0 ? el * -1 : el));
console.log(positiveNum);

// 2.4 Сделать каждое число строкой
const numbers4 = [5, 10, 15, 20];
const numToStr = numbers4.map((el) => el.toString());
console.log(numToStr);

// 2.5 Умножить каждый элемент на его индекс
const numbers5 = [1, 2, 3, 4, 5];
const multiply = numbers5.map((el, i) => el * i);
console.log(multiply);

// 2.6 Прибавить к числу 10 если его индекс кратен 3
const numbers6 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sum = numbers6.map((el, i) => (i % 3 === 0 ? el + 10 : el));
console.log(sum);
