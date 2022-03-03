let A = 'A'; //B
let B = 'B'; //C
let C = 'C'; //A

//Faça com que A ponte para B, B aponte para C e C aponte para A
//Para resolução é necessário uma variavel suplementar

let AKeeper = A;

A = B;
B = C;
C = AKeeper;

console.log(A, B, C);


console.log("\nSolução Moderna");

let A2 = 'A'; //B
let B2 = 'B'; //C
let C2 = 'C'; //A

[A2, B2, C2] = [B2, C2, A2]

console.log(A2, B2, C2)