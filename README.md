# ITSA 全國大專程式設計極客挑戰賽
### [資訊系統與網頁設計應用組](https://www.itsa.org.tw/itsacontest/2024/register/index.php) 
## Table Generator

This project demonstrates a simple HTML and JavaScript application that allows users to generate a table dynamically by specifying the number of rows and columns.

## Table of Contents(Basic)

#### 1. [HTML Structure](#Html-Structure)
#### 2. [Meta Tags](#Meta-Tags)
#### 3. [JavaScript Functionality](#Javascript-Functionality)
#### 4. [Additional Information](#Additional-Information)
## **Table of Contents (2019 - Example)**
#### 1. [2019 - Example(網頁井字遊戲)](2019Example(網頁井字遊戲))
#### 2. [References](#References)

## HTML Structure

The basic structure of the webpage includes a form where users can input the desired number of rows and columns for the table. It includes:

1. **DOCTYPE Declaration**: Defines the type of the document as HTML.
    ```html
    <!DOCTYPE html>
    ```

2. **Language Declaration**: Sets the language of the document.
    ```html
    <html lang="en">
    ```

3. **Head Section**: Contains metadata and the title of the page.
    ```html
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Test-01_Lee</title>
    </head>
    ```

4. **Body Section**: Contains the main content, including inputs for table dimensions and a button to generate the table.
    ```html
    <body>
        <h1>Generate a Table</h1>
        <p><b>Please enter the <mark>length</mark> and <mark>width</mark> of the <mark>Generate Table</mark></b></p>
        
        <label>Rows:</label>
        <input type="text" id="Rows" value="1">
        
        <label>Columns:</label>
        <input type="text" id="Columns" value="1">
        
        <input type="button" onclick="generateTable()" value="Generate Table">
        
        <table id="table" border="1"></table>
    </body>
    ```

## Meta Tags

The webpage includes several important meta tags:

- **Meta Charset**: Specifies the character encoding for the HTML document.
    ```html
    <meta charset="UTF-8">
    ```
- **Viewport**: Ensures the webpage is displayed correctly on different devices.
    ```html
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    ```

### Common Meta Tags and Their Functions:

| Meta Tag Name      | Function                       |
|--------------------|--------------------------------|
| Meta Title         | Webpage title                  |
| Meta Description   | Summary of webpage content     |
| Meta Charset       | Character encoding             |
| Canonical          | Page identification            |
| Viewport           | Display settings for devices   |
| Robots             | Prevents indexing by search engines |
| Hreflang           | Language and locale settings   |

## JavaScript Functionality

The `generateTable` function creates a table based on the user input for rows and columns:

```javascript
function generateTable() {
    const rows = parseInt(document.getElementById("Rows").value);
    const columns = parseInt(document.getElementById("Columns").value);
    const js_table = document.getElementById("table");

    // Reset Table
    table.innerHTML = "";
    js_table.style.cssText = 'font-size: 20px; text-align: center;';
    js_table.innerHTML += '<tr><th colspan="'+columns+'">GenerateTable</th></tr>';

    if (rows > 0 && columns > 0) {
        let number = 0;
        for (let i = 0; i < rows; i++) {
            const tr = document.createElement("tr");
            for (let j = 0; j < columns; j++) {
                const td = document.createElement("th");
                td.textContent = number++;
                tr.appendChild(td);
            }
            js_table.appendChild(tr);
        }
    }
}
```
## Additional Information

### Meta Tags Overview

Meta tags provide metadata about the HTML document and are typically used to specify character set, page description, keywords, author of the document, and viewport settings. Below is a brief overview of the commonly used meta tags:

| Meta Tag Name       | Meta Tag Function                             |
|---------------------|-----------------------------------------------|
| **Meta Title**      | The title of the webpage                      |
| **Meta Description**| A summary of the webpage content              |
| **Meta Charset**    | Character encoding used by the page           |
| **Canonical**       | Identifies the canonical URL                  |
| **Viewport**        | Controls layout on mobile devices             |
| **Robots**          | Controls search engine indexing               |
| **Hreflang**        | Specifies the language of the page            |

### HTML Text Formatting

HTML provides various elements for formatting text. Some of these include:

- `<b>` - Bold text
- `<strong>` - Important text
- `<i>` - Italic text
- `<em>` - Emphasized text
- `<mark>` - Marked text
- `<small>` - Smaller text
- `<del>` - Deleted text
- `<ins>` - Inserted text
- `<sub>` - Subscript text
- `<sup>` - Superscript text
- `<br>` - Line break

### Understanding Table Tags

HTML tables are defined using the `<table>` tag, and they often contain the following child tags:

- **`<tr>`**: Table Row - Represents a row in the table.
- **`<td>`**: Table Data - Defines the cells within a row.
- **`<th>`**: Table Header - Defines the header cells in a table.

# [2019Example(網頁井字遊戲)](https://www.itsa.org.tw/itsacontest/2024/prefile/2019%E5%B9%B4ITSA%E5%85%A8%E5%9C%8B%E5%A4%A7%E5%B0%88%E7%A8%8B%E5%BC%8F%E8%A8%AD%E8%A8%88%E6%A5%B5%E5%AE%A2%E6%8C%91%E6%88%B0%E8%B3%BD-%E8%B3%87%E8%A8%8A%E7%B3%BB%E7%B5%B1%E8%88%87%E7%B6%B2%E9%A0%81%E8%A8%AD%E8%A8%88%E6%87%89%E7%94%A8%E7%B5%84(%E5%88%9D%E8%B3%BD%E8%A9%A6%E9%A1%8C).pdf)




This document provides an in-depth explanation of the Tic-Tac-Toe game code implemented in HTML, CSS, and JavaScript. 

## HTML Structure

### 1. Meta Tags
- **Charset & Viewport**: The document specifies the UTF-8 character set and sets the viewport for responsive design.
```html
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

- **Title**: The title of the document is set to "2019-1-lee".
```html
<title>2019-1-lee</title>
```

### 2. External Resources
- **Bootstrap**: Included for layout and styling, both the CSS and JavaScript files are linked from a CDN.
```html
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
```

- **jQuery**: The jQuery library is included for DOM manipulation and event handling.
```html
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
```

### 3. Custom CSS
- **Board Styling**: The game board is styled as a 3x3 grid using CSS Grid Layout, with each cell sized at 100x100 pixels.
```css
.board {
    display: grid;
    grid-template-columns: repeat(3, 100px);
    grid-template-rows: repeat(3, 100px);
    gap: 5px;
    margin: 20px auto;
    width: 315px;
}
```

- **Cell Styling**: Each cell is styled with a blue background, centered text, and a cursor pointer to indicate interactivity.
```css
.cell {
    width: 100px;
    height: 100px;
    background-color: #007bff;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 48px;
    color: white;
    cursor: pointer;
}
```

### 4. Modal Dialog
- **Bootstrap Modal**: The game begins with a modal dialog where the player selects "O" or "X". This is done using Bootstrap's modal component.
```html
<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header text-center">
                <h2>請選擇 O 或 X</h2>
            </div>
            <div class="modal-body text-center">
                <button type="button" class="btn btn-default btn-lg" data-dismiss="modal" id="chooseO"><h3>O</h3></button>
                <button type="button" class="btn btn-primary btn-lg" data-dismiss="modal" id="chooseX"><h3>X</h3></button>
            </div>
        </div>
    </div>
</div>
```

## JavaScript Logic

### 1. Initialization
- **Modal Display**: When the page loads, the modal dialog is shown, prompting the user to select their symbol.
```javascript
$(function(){
    $("#myModal").modal();
```

- **Game Variables**: Several variables are initialized to store the player's and computer's symbols, the current player, and the game board's state.
```javascript
let playerSymbol = '';
let computerSymbol = '';
let currentPlayer = '';
let board = ['', '', '', '', '', '', '', '', ''];
```

### 2. Player Symbol Selection
- **Event Handlers**: When the player selects "O" or "X", the corresponding button's click event sets the player's and computer's symbols and starts the game.
```javascript
$("#chooseO").click(function() {
    playerSymbol = 'O';
    computerSymbol = 'X';
    startGame();
});

$("#chooseX").click(function() {
    playerSymbol = 'X';
    computerSymbol = 'O';
    startGame();
});
```

### 3. Game Flow Control
- **Start Game**: The `startGame` function randomly decides whether the player or the computer goes first.
```javascript
function startGame() {
    currentPlayer = Math.random() < 0.5 ? 'player' : 'computer';
    if (currentPlayer === 'computer') {
        computerMove();
    }
}
```

- **Player Move**: The `playerMove` function handles the player's move, updating the board and checking the game state.
```javascript
function playerMove(index) {
    if (board[index] === '' && currentPlayer === 'player') {
        board[index] = playerSymbol;
        updateBoard();
        checkGameState();
        currentPlayer = 'computer';
        computerMove();
    }
}
```

### 4. Computer Move
- **Random Selection**: The `computerMove` function randomly selects an empty cell for the computer's move.
```javascript
function computerMove() {
    let emptyCells = board.map((val, idx) => val === '' ? idx : null).filter(val => val !== null);
    let move = emptyCells[Math.floor(Math.random() * emptyCells.length)];
    board[move] = computerSymbol;
    updateBoard();
    checkGameState();
    currentPlayer = 'player';
}
```

### 5. Game State Check
- **Winning Combinations**: The `checkGameState` function checks if there is a winner or if the game is a draw based on predefined winning combinations.
```javascript
let winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];
```

- **Game Reset**: If there is a winner or the game is a draw, the game board is reset, and a new game starts.
```javascript
function resetGame() {
    board = ['', '', '', '', '', '', '', '', ''];
    updateBoard();
    startGame();
}
```

### 6. UI Updates
- **Update Board**: The `updateBoard` function updates the text in each cell based on the current game board's state.
```javascript
function updateBoard() {
    $('.cell').each(function(index) {
        $(this).text(board[index]);
    });
}
```

## Conclusion

This code implements a simple Tic-Tac-Toe game where the player can compete against a computer. The computer's moves are random, providing a basic level of challenge. The game uses Bootstrap for styling and modals, and jQuery for DOM manipulation and event handling.

## References

- [指定網頁所使用的編碼](https://www.fooish.com/html/meta-charset.html)
- [SEO Meta標籤](https://ranking.works/knowledge/meta-tags/)
- [HTML Text Formatting](https://www.w3schools.com/html/html_formatting.asp)
- [CSS `text-align`](https://developer.mozilla.org/en-US/docs/Web/CSS/text-align)
- [認識 `<table>`, `<tr>`, 和 `<td>`](https://steam.oxxostudio.tw/category/html/tags/table-tr-td.html)
- [九宮格－用html+css製作網頁](https://blog.csdn.net/qq_58035376/article/details/122928868)
- [`Bootstrap` 模态框`（Modal）`插件](https://www.runoob.com/bootstrap/bootstrap-modal-plugin.html)
- [`Window：prompt()` 方法](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/prompt)
