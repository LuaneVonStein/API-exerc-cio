function criarObjeto (objeto) {
    const container = document.getElementById("container");

    const nome = creatElement ("h1");
    const url = creatElement ("p");

    nome.textContent = objeto.name;
    url.textContent = objeto.url;

    container.appendChild(nome);
    container.appendChild(url);

}

fetch("https://jsonplaceholder.typicode.com/users")
.then(response => {
  return response.json()
})

.then(data => {
  const objeto = data;
  objeto.forEach(objeto => {
    criarObjeto(objeto);
  });
})

.catch(err => {
  console.log("Erro: ", err);
});


//{
  //  "cmd": "imagine",
    //"msg": "<seu-prompt-aqui>"
  //}

  //{


function setupGameBoard() {
    const squares = document.getElementsByClassName('square');
    for (let i = 0; i < squares.length; i++) {
      squares[i].addEventListener('click', function() {
    });
}
}


document.addEventListener('DOMContentLoaded', () => {
    const board = document.querySelector('.board');
    const cells = [];

    let currentPlayer = 'X';
    let isGameOver = false;

    for (let i = 0; i < 9; i++) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      cells.push(cell);
      board.appendChild(cell);

      cell.addEventListener('click', () => {
        if (isGameOver || cell.textContent !== '') return;

        cell.textContent = currentPlayer;
        cell.style.color = currentPlayer === 'X' ? 'red' : 'blue';

        if (checkWinCondition()) {
          isGameOver = true;
          alert('Jogador ' + currentPlayer + ' venceu!');
          return;
        }

        if (checkDrawCondition()) {
          isGameOver = true;
          alert('Empate!');
          return;
        }

        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
      });
    }

   
    function checkWinCondition() {
      const winningCombinations = [
        [0, 1, 2],[3, 4, 5],[6, 7, 8],[0, 3, 6],[1, 4, 7],[2, 5, 8],[0, 4, 8], [2, 4, 6] 
      ];

      for (const combination of winningCombinations) {
        const [a, b, c] = combination;

        if (
          cells[a].textContent === currentPlayer &&
          cells[b].textContent === currentPlayer &&
          cells[c].textContent === currentPlayer
        ) {
          cells[a].style.backgroundColor = 'lightgreen';
          cells[b].style.backgroundColor = 'lightgreen';
          cells[c].style.backgroundColor = 'lightgreen';
          return true;
        }
      }

      return false;
    }

    function checkDrawCondition() {
      return [...cells].every(cell => cell.textContent !== '');
    }
  });

function setupGameBoard() {
    const squares = document.getElementsByClassName('square');
    for (let i = 0; i < squares.length; i++) {
      squares[i].addEventListener('click', function() {
    });
}
}


document.addEventListener('DOMContentLoaded', () => {
    const board = document.querySelector('.board');
    const cells = [];

    let currentPlayer = 'X';
    let isGameOver = false;

    for (let i = 0; i < 9; i++) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      cells.push(cell);
      board.appendChild(cell);

      cell.addEventListener('click', () => {
        if (isGameOver || cell.textContent !== '') return;

        cell.textContent = currentPlayer;
        cell.style.color = currentPlayer === 'X' ? 'red' : 'blue';

        if (checkWinCondition()) {
          isGameOver = true;
          alert('Jogador ' + currentPlayer + ' venceu!');
          return;
        }

        if (checkDrawCondition()) {
          isGameOver = true;
          alert('Empate!');
          return;
        }

        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
      });
    }

   
    function checkWinCondition() {
      const winningCombinations = [
        [0, 1, 2],[3, 4, 5],[6, 7, 8],[0, 3, 6],[1, 4, 7],[2, 5, 8],[0, 4, 8], [2, 4, 6] 
      ];

      for (const combination of winningCombinations) {
        const [a, b, c] = combination;

        if (
          cells[a].textContent === currentPlayer &&
          cells[b].textContent === currentPlayer &&
          cells[c].textContent === currentPlayer
        ) {
          cells[a].style.backgroundColor = 'lightgreen';
          cells[b].style.backgroundColor = 'lightgreen';
          cells[c].style.backgroundColor = 'lightgreen';
          return true;
        }
      }

      return false;
    }

    function checkDrawCondition() {
      return [...cells].every(cell => cell.textContent !== '');
    }
  });

function setupGameBoard() {
    const squares = document.getElementsByClassName('square');
    for (let i = 0; i < squares.length; i++) {
      squares[i].addEventListener('click', function() {
    });
}
}


document.addEventListener('DOMContentLoaded', () => {
    const board = document.querySelector('.board');
    const cells = [];

    let currentPlayer = 'X';
    let isGameOver = false;

    for (let i = 0; i < 9; i++) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      cells.push(cell);
      board.appendChild(cell);

      cell.addEventListener('click', () => {
        if (isGameOver || cell.textContent !== '') return;

        cell.textContent = currentPlayer;
        cell.style.color = currentPlayer === 'X' ? 'red' : 'blue';

        if (checkWinCondition()) {
          isGameOver = true;
          alert('Jogador ' + currentPlayer + ' venceu!');
          return;
        }

        if (checkDrawCondition()) {
          isGameOver = true;
          alert('Empate!');
          return;
        }

        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
      });
    }

   
    function checkWinCondition() {
      const winningCombinations = [
        [0, 1, 2],[3, 4, 5],[6, 7, 8],[0, 3, 6],[1, 4, 7],[2, 5, 8],[0, 4, 8], [2, 4, 6] 
      ];

      for (const combination of winningCombinations) {
        const [a, b, c] = combination;

        if (
          cells[a].textContent === currentPlayer &&
          cells[b].textContent === currentPlayer &&
          cells[c].textContent === currentPlayer
        ) {
          cells[a].style.backgroundColor = 'lightgreen';
          cells[b].style.backgroundColor = 'lightgreen';
          cells[c].style.backgroundColor = 'lightgreen';
          return true;
        }
      }

      return false;
    }

    function checkDrawCondition() {
      return [...cells].every(cell => cell.textContent !== '');
    }
  });

function setupGameBoard() {
    const squares = document.getElementsByClassName('square');
    for (let i = 0; i < squares.length; i++) {
      squares[i].addEventListener('click', function() {
    });
}
}


document.addEventListener('DOMContentLoaded', () => {
    const board = document.querySelector('.board');
    const cells = [];

    let currentPlayer = 'X';
    let isGameOver = false;

    for (let i = 0; i < 9; i++) {
      const cell = document.createElement('div');
      cell.classList.add('cell');
      cells.push(cell);
      board.appendChild(cell);

      cell.addEventListener('click', () => {
        if (isGameOver || cell.textContent !== '') return;

        cell.textContent = currentPlayer;
        cell.style.color = currentPlayer === 'X' ? 'red' : 'blue';

        if (checkWinCondition()) {
          isGameOver = true;
          alert('Jogador ' + currentPlayer + ' venceu!');
          return;
        }

        if (checkDrawCondition()) {
          isGameOver = true;
          alert('Empate!');
          return;
        }

        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
      });
    }

   
    function checkWinCondition() {
      const winningCombinations = [
        [0, 1, 2],[3, 4, 5],[6, 7, 8],[0, 3, 6],[1, 4, 7],[2, 5, 8],[0, 4, 8], [2, 4, 6] 
      ];

      for (const combination of winningCombinations) {
        const [a, b, c] = combination;

        if (
          cells[a].textContent === currentPlayer &&
          cells[b].textContent === currentPlayer &&
          cells[c].textContent === currentPlayer
        ) {
          cells[a].style.backgroundColor = 'lightgreen';
          cells[b].style.backgroundColor = 'lightgreen';
          cells[c].style.backgroundColor = 'lightgreen';
          return true;
        }
      }

      return false;
    }

    function checkDrawCondition() {
      return [...cells].every(cell => cell.textContent !== '');
    }
  });


    //"botão": "U1",
    //"buttonMessageId": "<seu-identificador-de-mensagem-da-resposta-anterior>"
  //} 
  
