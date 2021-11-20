const arr = [
  {
    nombre: "Gonzalo",
    apellido: "Fleming",
    edad: 32,
  },
  {
    nombre: "Dariana",
    apellido: "Gómez",
    edad: 31,
  },
];

const arrSortedByAge = arr.sort((a, b) => a.edad - b.edad);

const arrSortedByName = arr.sort((a, b) => {
  if (a < b) return -1;
  if (a > b) return 1;
  return 0;
});

console.log(arrSortedByName);
