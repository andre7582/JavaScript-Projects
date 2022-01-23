/*function parimp(n) {
    if (n % 2 == 0) {
        return 'par'
    } else {
        return 'ímpar'
    }
}
let n = 14
console.log(parimp(n))*/


/*function soma(n1=0, n2=0) {
    return n1 + n2
}
console.log(soma(3, 4))*/

/*let v = function(x) {
    return x ** 2
}
console.log(v(5))*/

function fatorial(n) {
    if (n == 1) {
        return 1
    } else {
        return n * fatorial(n-1)
    }
}
let fat = 5
console.log(fatorial(fat))