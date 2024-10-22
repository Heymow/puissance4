// Description: Résoudre un puissance 4
// Méthode: On vérifie les lignes horizontales, les colonnes verticales et les diagonales montantes et descendantes
// pour voir s'il y a 4 jetons similaires à la suite dans la grille

// Vérifie s'il y a 4 jetons similaires à la suite dans la grille
function checkConnectFour(grid) {
    const rows = grid.length;
    const cols = grid[0].length;

    // Vérifier les lignes horizontales
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols - 3; col++) {
            if (grid[row][col] !== " " && grid[row][col] === grid[row][col + 1] && grid[row][col] === grid[row][col + 2] && grid[row][col] === grid[row][col + 3]) {
                return { winner: grid[row][col], type: 'ligne' };
            }
        }
    }

    // Vérifier les colonnes verticales
    for (let col = 0; col < cols; col++) {
        for (let row = 0; row < rows - 3; row++) {
            if (grid[row][col] !== " " && grid[row][col] === grid[row + 1][col] && grid[row][col] === grid[row + 2][col] && grid[row][col] === grid[row + 3][col]) {
                return { winner: grid[row][col], type: 'colonne' };
            }
        }
    }

    // Vérifier les diagonales montantes
    for (let row = 3; row < rows; row++) {
        for (let col = 0; col < cols - 3; col++) {
            if (grid[row][col] !== " " && grid[row][col] === grid[row - 1][col + 1] && grid[row][col] === grid[row - 2][col + 2] && grid[row][col] === grid[row - 3][col + 3]) {
                return { winner: grid[row][col], type: 'diagonale' };
            }
        }
    }

    // Vérifier les diagonales descendantes
    for (let row = 0; row < rows - 3; row++) {
        for (let col = 0; col < cols - 3; col++) {
            if (grid[row][col] !== " " && grid[row][col] === grid[row + 1][col + 1] && grid[row][col] === grid[row + 2][col + 2] && grid[row][col] === grid[row + 3][col + 3]) {
                return { winner: grid[row][col], type: 'diagonale inversée' };
            }
        }
    }

    return { winner: null, type: null };
}

// Affiche le résultat dans la console
function resultat(grid) {
    const result = checkConnectFour(grid);
    if (result.winner) {
        console.log(`Puissance 4 bitches ! Gagnant : ${result.winner === "🔴" ? "Red Circle" : "Yellow Circle"}. C'est une ${result.type} !`);
    } else {
        console.log("Bande de nazes, c'est un match nul !");
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


resultat(test3);