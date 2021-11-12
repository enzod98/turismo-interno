//Con este computado armamos una especie de matriz para recorrer e ir pintando un grid
//Recibimos como parámetro el array a descomponer y el número de columnas que tendrá la matriz
//Devuelve un array de arrays que simula ser una matriz, en caso de no ser un cuadrado exacto, la última fila siempre tenrá menos elementos

export function matrizGrid(arrayBase, columnas){
    let numRows = Math.ceil(arrayBase.length / columnas);
    let matriz = [];
    let row = [];

    for(let i = 0; i < arrayBase.length; i++){
      row.push(arrayBase[i]);

      if (row.length === columnas || (i + 1) === arrayBase.length){
        matriz.push(row);
        row = [];
      }
    }
    return matriz;
  }