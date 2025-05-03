// busca palabras en la sopa de letras
function buscarPalabras(matriz, palabras) {
  // separa las letras de la matriz
  const sopaDeLetras = matriz.map(fila => fila.split(" "));

  // recorre cada palabra
  for (let p = 0; p < palabras.length; p++) {
    const palabra = palabras[p];
    console.log("buscando \"" + palabra + "\"");

    let encontrada = false;

    // busca en horizontal
    for (let fila = 0; fila < sopaDeLetras.length; fila++) {
      for (let col = 0; col <= sopaDeLetras[0].length - palabra.length; col++) {
        let i = 0;
        while (i < palabra.length && sopaDeLetras[fila][col + i] === palabra[i]) {
          i++;
        }

        if (i === palabra.length) {
          for (let j = 0; j < palabra.length; j++) {
            console.log(palabra[j] + " - [" + fila + ", " + (col + j) + "]");
          }
          encontrada = true;
          break;
        }
      }

      if (encontrada) break;
    }

    // si no está en horizontal, busca en vertical
    if (!encontrada) {
      for (let col = 0; col < sopaDeLetras[0].length; col++) {
        for (let fila = 0; fila <= sopaDeLetras.length - palabra.length; fila++) {
          let i = 0;
          while (i < palabra.length && sopaDeLetras[fila + i][col] === palabra[i]) {
            i++;
          }

          if (i === palabra.length) {
            for (let j = 0; j < palabra.length; j++) {
              console.log(palabra[j] + " - [" + (fila + j) + ", " + col + "]");
            }
            encontrada = true;
            break;
          }
        }

        if (encontrada) break;
      }
    }

    // si no se encontró
    if (!encontrada) {
      console.log("\"" + palabra + "\" no encontrada");
    }
  }
}

// 
const matriz = ['S O L', 'U N O', 'N U T'];
const palabras = ["SUN", "SOL", "LOT", "ONU", "RAY"];

buscarPalabras(matriz, palabras);
