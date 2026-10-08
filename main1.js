// 1

const sumRange = (min, max) => {
    let sum = 0;
    for (let i = min; i <= max; i++) sum += i;
    return sum;
  };

  const gcdLoop = (a, b) => {
    while (b) { let temp = b; b = a % b; a = temp; }
    return a;
  };
  
  // 3. FOR (чіткий діапазон від 1 до числа)
  const printDivisors = n => {
    for (let i = 1; i <= n; i++) if (n % i === 0) console.log(i);
  };

  const countDigitsLoop = n => {
    let count = 0;
    while (n > 0) { n = Math.floor(n / 10); count++; }
    return count || 1; 
  };

  const analyzeTenNumbers = () => {
    let pos = 0, neg = 0, zero = 0, even = 0, odd = 0;
    for (let i = 0; i < 10; i++) {
      let num = +prompt("Введіть число:");
      if (num > 0) pos++; else if (num < 0) neg++; else zero++;
      if (num % 2 === 0) even++; else odd++;
    }
    console.log(`Додатних: ${pos}, Від'ємних: ${neg}, Нулів: ${zero}, Парних: ${even}, Непарних: ${odd}`);
  };

  const calcLoop = () => {
    do {
      let a = +prompt("Число 1:"), b = +prompt("Число 2:"), sign = prompt("Знак (+, -, *, /):");
      console.log(eval(a + sign + b)); 
    } while (confirm("Ще один приклад?"));
  };
  
  const shiftDigits = (num, shift) => {
    let str = num.toString();
    shift = shift % str.length;
    return +(str.slice(shift) + str.slice(0, shift));
  };

  const daysLoop = () => {
    const days = ["Пн", "Вв", "Ср", "Чт", "Пт", "Сб", "Нд"];
    let i = 0;
    do { alert(days[i]); i = (i + 1) % 7; } while (confirm("Наступний день?"));
  };

  const multiplicationTable = () => {
    for (let i = 2; i <= 9; i++) {
      for (let j = 1; j <= 10; j++) console.log(`${i} * ${j} = ${i * j}`);
    }
  };
  
  const guessNumber = () => {
    let min = 0, max = 100, ans;
    do {
      let n = Math.floor((min + max) / 2);
      ans = prompt(`Ваше число > ${n}, < ${n} чи == ${n}? (Введіть >, < або ==)`);
      if (ans === '>') min = n + 1;
      else if (ans === '<') max = n - 1;
    } while (ans !== '==');
    alert("Я вгадав!");
  };

// 2 
const pow = (x, n) => n === 0 ? 1 : x * pow(x, n - 1);

const gcdRec = (a, b) => b === 0 ? a : gcdRec(b, a % b);

const maxDigit = n => n < 10 ? n : Math.max(n % 10, maxDigit(Math.floor(n / 10)));

const isPrime = (n, i = 2) => {
  if (n <= 2) return n === 2;
  if (n % i === 0) return false;
  if (i * i > n) return true;
  return isPrime(n, i + 1);
};

const printPrimeFactors = (n, i = 2) => {
  if (n < 2) return;
  if (n % i === 0) {
    console.log(i);
    printPrimeFactors(n / i, i);
  } else {
    printPrimeFactors(n, i + 1);
  }
};

const fibonacci = n => n <= 2 ? 1 : fibonacci(n - 1) + fibonacci(n - 2);

// 3

const compare = (a, b) => a < b ? -1 : (a > b ? 1 : 0);

const factorial = n => n === 0 ? 1 : n * factorial(n - 1);

const combineDigits = (a, b, c) => a * 100 + b * 10 + c;

const calcArea = (a, b = a) => a * b; 

const isPerfect = n => {
  let sum = 0;
  for (let i = 1; i <= n / 2; i++) if (n % i === 0) sum += i;
  return sum === n && n !== 0;
};

const perfectNumbersInRange = (min, max) => {
  for (let i = min; i <= max; i++) {
    if (isPerfect(i)) console.log(i);
  }
};

