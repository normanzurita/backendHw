// 1. Dada una frase, retornar si se trata o no de un palindromo.

function isPalindrome(s) {
    const temp = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    return temp === temp.split("").reverse().join("");

}

// 2. Dado un numero, retornar si se trata o no de un numero primo.

function isPrime(n) {
    if (n === 1) return false;
    if (n === 2) return true;
    for (let i = 2; i < n / 2; i++) {
        if (n % i === 0) {
            return false;

        }
    }
    return true;
}

// 3. Escribir el codigo para ordenar de forma ascendente un arreglo de numeros utilizando el algoritmo Bubble Sort.

function bubbleSort(arr) {
    const len = arr.length;
    let sorted;

    for (let i = 0; i < len - 1; i++) {
        sorted = false;
        for (let j = 0; j < len - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                sorted = true;
            }
        }
        if (!sorted) break;
    }
    return arr;
}


// 4. Dado un numero , imprimir un cuadrado de la forma n=5  55555 \ 44444 \ ... \ 11111 \ 22222 \ ... \ 55555.

function printMatrix(n) {
    const m = n;
    while(n > 1) {
        console.log(String(n).repeat(m))
        n -= 1;
    }
    console.log(String(n).repeat(m))
    while (n < m) {
        n += 1;
        console.log(String(n).repeat(m))
    }

}


// console.log(isPalindrome("A man, a plan, a canal: Panama"));
// console.log(isPalindrome("race a car"));
// console.log(isPalindrome("Was it a car or a cat I saw"));

// console.log(isPrime(1));
// console.log(isPrime(2));
// console.log(isPrime(3));
// console.log(isPrime(30));

// console.log(bubbleSort([4, 3, 1, 2, 5]));

printMatrix(5);