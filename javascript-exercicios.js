const divs = document.querySelectorAll ('div');
const arr = Array.from(divs);

divArray.pop!
divArray.shift!

//exemplo de push incluindo um item que não tem no array
const exem = ['exem1', 'exem2'};
exem.push('exe');

//push inclui um item no array, pop retorna o item removido,
//unshift remove o primeiro item do array
//shift remove o ultimo item no array
const arr = ['carro', 'moto', 'bicicleta'];
const arrLength = arr.push('navio');

console.log(arrLenght)
console.log(arr);

//concatenar ou usar merge
const add = ['azedo', 'indoor']; 
const att = ['doce', 'salgado'];
const alimentos = add.concat(att);
console.log(add);
console.log(att);
console.log(alimentos);

//slice
const arr = [1,2,3,4,5];
arr.slice(0,2);
console.log(arr);
[1,2]
/**splice (remove as variáveis dentro do array 
que não são chamadas e pode incluir outras
para dentro do array )**/
const arr = [1,2,3,4,5];
arr.splice(0,2);
console.log(arr);
[1,2]
 
// exemplo de array com atribuições utilizando const
const users = ['alpha', 'beta', 'omega' ]

const gender = {
  MAN: symbol ('M'),
  WOMEN: symbol ('W'),
}

const persons = [
  {
    name: 'alpha',
    age: 100,
    gender: gender.WOMEN
  },
  {
    name: 'beta',
    age: 200,
    gender: gender.MAN
  },
  {
    name: 'omega',
    age: 300,
    gender: gender.MAN
  },
];

console.log('Items:', persons.length);


//utilizando o buscador de elementos
dentro array. 'Some'

const students = [
	{name: 'John', grade: 7},
	{name: 'Garcia', grade: 5},
	{name: 'lopes', grade: 4},
]

students.some (student ==> student.grade >= 7);
-boolean- FALSE or TRUE
students.find (student ==> student.grade >= 7);

