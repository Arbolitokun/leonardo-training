/* const getMonth = require("date-fns/getMonth");
 */
const hbds = [
  { name: 'Juanita', hbd: '07-02' },
  { name: 'Leonardo', hbd: '07-02' },
  { name: 'Armando', hbd: '09-08' }
];

const found = [];
const today = new Date();
/* 
console.log(getMonth(today)); */

for (let i = 0; i < hbds.length; i++) {
  const dia = hbds[i].hbd.split('-')[0];
  const mes = hbds[i].hbd.split('-')[1];
  if (mes == (today.getMonth() + 1) && dia == today.getDate()) {
    found.push(hbds[i]);
    break;
  }
}

console.log(found);
document.addEventListener('readystatechange', () => {
  document.getElementById('hbds').innerText = found[0].name;
})

/* 
let i = 0;
while (i < hbds.length) {
  console.log(hbds[i]);
  i++;
} */

/* function giveMeHBD(a) {
  let b = 2;
  const c = 3;
  if (true) {
    var d = 1;
  }

  const giveMeHBD2 = (a) => {
    console.log(d);
    return a;
  }
  console.log(d, b, c);
  giveMeHBD2()
  return;
}

giveMeHBD();
 */

/* 
function crearSumar(a) {
  return function sumar(b) {
    return a + b ;
  }
}

const sumar1 = crearSumar(1);
const sumar2 = crearSumar(2);
console.log(
  sumar2(9)
);

console.log(
  sumar1(9)
); */