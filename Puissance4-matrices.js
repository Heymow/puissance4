// La fonction "checkConnectFour" reçoit un tableau à deux dimensions représentant une partie terminée du jeu puissance 4
// et doit renvoyer le gagnant(red_circle, yellow_circle ou null en cas d'égalité).

// Note : la partie reçue dans "grid" ne sera jamais invalide et contiendra toujours une de ces valeur :
// "red_circle", "yellow_circle" ou " "(un espace).

// Utilisation de matrices pour résoudre le problème

// Solution à l'aide de 4 fonctions : 
// 1. transpose : rotation d'un tableau à 90° dans le sens anti-horaire
// 2. transposeDiagonal : rotation d'un tableau à 45° dans le sens anti-horaire
// 3. transposeDiagonal2 : rotation d'un tableau à 45° dans le sens horaire
// 4. checkConnectFour : vérification de la condition de victoire

// La fonction checkConnectFour reçoit un tableau à deux dimensions représentant une partie terminée du jeu puissance 4
// et doit renvoyer le gagnant(red_circle, yellow_circle ou null en cas d'égalité).

// Note : la partie reçue dans "grid" ne sera jamais invalide et contiendra toujours une de ces valeur :
// "red_circle", "yellow_circle" ou " "(un espace).


// Rotation d'un tableau à 90° dans le sens anti-horaire 
function transpose(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  const grid = [];
  for (let i = 0; i < cols; i++) {
    grid[i] = Array(rows);
  }
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      grid[j][i] = matrix[i][5 - j];
    }
  }
  return grid;
}
// Rotation d'un tableau à 45° dans le sens anti-horaire : 
function transposeDiagonal(matrix) {
  const grid = [];
  for (let j = 0; j < 3; j++) {
    grid[j] = Array(4 + j);
  }
  for (let j = 0; j < 3; j++) {
    grid.push(Array(6 - j))
  }
  const cols = matrix[0].length;
  for (let i = 0; i < 3; i++) {
    for (let j = 0, k = 3 + i; j < 4 + i; k--, j++) {
      grid[i][j] = matrix[k][j];
    }
  }
  for (let i = 3; i < cols; i++) {
    for (let j = i - 3, y = 0, k = 6; j < cols; k--, j++, y++) {
      grid[i][y] = matrix[k][j];
    }
  }
  return grid;
}

// Rotation d'un tableau à 45° dans le sens horaire : 
function transposeDiagonal2(matrix) {
  const grid = [];
  for (let j = 0; j < 3; j++) {
    grid[j] = Array(4 + j);
  }
  for (let j = 0; j < 3; j++) {
    grid.push(Array(6 - j))
  }
  const cols = matrix[0].length;
  for (let i = 0; i < 3; i++) {
    for (let j = 2, k = 0; j < cols + i; k++, j++) {
      grid[i][j - 2] = matrix[k][j - i];
    }
  }
  for (let i = 3; i < cols; i++) {
    for (let j = 0, k = 1; j < cols + 3 - i; k++, j++) {
      grid[i][j] = matrix[k + i - 3][j];
    }
  }
  return grid;
}

// Vérifie s'il y a 4 jetons similaires à la suite dans la partie 
function checkConnectFour(gameArray) {
  let winner = "Match nul";
  let win = false;
  let serie = 1;
  for (let j = 0; j < gameArray.length; j++) {
    for (let i = 0; i < gameArray[j].length; i++) {
      if (gameArray[j][i] === gameArray[j][i + 1] && gameArray[j][i + 1] !== undefined && gameArray[j][i + 1] != " ") {
        serie++;
        if (serie === 4) {
          if (gameArray[j][i] === "🔴") {
            winner = "Gagnant : Red Circle";
          } else if (gameArray[j][i] === "🟡") {
            winner = "Gagnant : Yellow Circle";
          }
          win = true;
        }
      }
      else if (gameArray[j][i] != " ") {
        serie = 1;
      }
    }
  }
  let winObject = { winStatus: win, winner: winner }
  return winObject;
}

//  Affichage dans la console du résultat, et de la condition de victoire remplie. EZ TUTO
function resultat(matrice) {
  if (checkConnectFour(matrice).winStatus) {
    console.log("Puissance 4 ! " + checkConnectFour(matrice).winner + ". C'est une colonne !")
  }
  else if (checkConnectFour(transpose(matrice)).winStatus) {
    console.log("Puissance 4 ! " + checkConnectFour(transpose(matrice)).winner + ". C'est une ligne ! ")
  }
  else if (checkConnectFour(transposeDiagonal(matrice)).winStatus) {
    console.log("Puissance 4 ! " + checkConnectFour(transposeDiagonal(matrice)).winner + ". C'est un slash !")
  }
  else if (checkConnectFour(transposeDiagonal2(matrice)).winStatus) {
    console.log("Puissance 4 ! " + checkConnectFour(transposeDiagonal2(matrice)).winner + ". C'est un slash inversé !")
  } else {
    console.log("C'est un match nul !")
  }
}

const test1 = [
  ["🟡", "🟡", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " "],
  ["🔴", "🟡", " ", " ", " ", " "],
  ["🔴", " ", " ", " ", " ", " "],
  ["🔴", "🟡", "🔴", " ", " ", " "],
  ["🔴", " ", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " "]
]

const test2 = [
  ["🔴", "🔴", "🔴", "🟡", "🔴", " "],
  ["🟡", "🔴", "🔴", " ", " ", " "],
  ["🟡", "🔴", "🟡", "🟡", "🟡", "🟡"],
  ["🔴", "🟡", "🔴", "🔴", " ", " "],
  ["🟡", "🟡", "🔴", " ", " ", " "],
  ["🟡", "🟡", " ", " ", " ", " "],
  ["🔴", " ", " ", " ", " ", " "]
]

const test3 = [
  ["🔴", "🔴", "🔴", " ", " ", " "],
  ["🔴", "🟡", " ", " ", " ", " "],
  ["🟡", "🔴", "🔴", "🔴", " ", " "],
  ["🟡", "🟡", "🔴", "🟡", " ", " "],
  ["🟡", "🔴", "🟡", " ", " ", " "],
  ["🔴", " ", " ", " ", " ", " "],
  ["🔴", "🟡", "🟡", "🟡", " ", " "]
]

const test4 = [
  ["🔴", "🔴", " ", " ", " ", " "],
  ["🔴", " ", " ", " ", " ", " "],
  ["🟡", "🟡", " ", " ", " ", " "],
  ["🟡", "🔴", " ", " ", " ", " "],
  ["🔴", "🟡", " ", " ", " ", " "],
  ["🔴", "🔴", "🟡", " ", " ", " "],
  ["🟡", "🔴", "🟡", "🟡", " ", " "]
]

const test5 = [
  ["🟡", "🟡", "🔴", "🔴", "🔴", " "],
  ["🔴", "🔴", "🟡", "🔴", "🟡", "🔴"],
  ["🟡", "🔴", "🟡", "🟡", "🔴", "🟡"],
  ["🔴", "🔴", "🔴", "🟡", "🔴", "🟡"],
  ["🟡", "🟡", "🟡", "🔴", " ", " "],
  ["🔴", "🟡", "🔴", "🟡", "🟡", "🟡"],
  ["🔴", "🔴", "🔴", "🟡", " ", " "]
]

const test6 = [
  ["🟡", "🔴", "🟡", "🟡", "🔴", "🟡"],
  ["🟡", "🟡", "🔴", "🟡", "🔴", "🟡"],
  ["🔴", "🔴", "🔴", "🔴", " ", " "],
  ["🟡", "🟡", "🟡", "🔴", "🟡", "🔴"],
  ["🔴", "🔴", "🟡", "🔴", "🟡", "🟡"],
  ["🔴", "🟡", "🟡", "🔴", "🔴", "🟡"],
  ["🔴", "🔴", "🔴", " ", " ", " "]
]

const test7 = [
  ["🔴", " ", " ", " ", " ", " "],
  ["🟡", " ", " ", " ", " ", " "],
  ["🟡", "🟡", "🟡", "🔴", " ", " "],
  ["🟡", "🔴", "🟡", "🔴", "🔴", "🔴"],
  ["🟡", "🔴", "🔴", "🟡", "🟡", "🔴"],
  ["🔴", "🟡", " ", " ", " ", " "],
  [" ", " ", " ", " ", " ", " "]
]

const test8 = [
  ["🟡", "🟡", " ", " ", " ", " "],
  ["🟡", "🟡", " ", " ", " ", " "],
  ["🟡", "🔴", "🟡", "🔴", " ", " "],
  ["🔴", "🔴", "🔴", " ", " ", " "],
  ["🔴", "🔴", " ", " ", " ", " "],
  ["🔴", "🔴", "🔴", "🟡", " ", " "],
  ["🟡", "🔴", "🟡", "🔴", "🟡", "🟡"]
]

const test9 = [
  ["🔴", "🟡", "🟡", "🔴", "🔴", "🟡"],
  ["🟡", "🟡", "🔴", "🟡", "🟡", "🔴"],
  ["🔴", "🟡", "🟡", "🟡", "🔴", "🟡"],
  ["🟡", "🔴", "🔴", "🟡", "🔴", "🟡"],
  ["🟡", "🔴", "🟡", "🔴", "🔴", "🟡"],
  ["🔴", "🔴", "🔴", "🟡", "🟡", "🔴"],
  ["🔴", "🟡", "🟡", "🔴", "🔴", "🔴"]
]


resultat(test7);
