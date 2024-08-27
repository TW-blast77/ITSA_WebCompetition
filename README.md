# Table Generator

This project demonstrates a simple HTML and JavaScript application that allows users to generate a table dynamically by specifying the number of rows and columns.

## Table of Contents

- [HTML Structure](#Html-Structure)
- [Meta Tags](#Meta-Tags)
- [JavaScript Functionality](#Javascript-Functionality)
- [Additional Information](#Additional-Information)
- [References](#References)

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
## References

- [指定網頁所使用的編碼](https://www.fooish.com/html/meta-charset.html)
- [SEO Meta標籤](https://ranking.works/knowledge/meta-tags/)
- [HTML Text Formatting](https://www.w3schools.com/html/html_formatting.asp)
- [CSS text-align](https://developer.mozilla.org/en-US/docs/Web/CSS/text-align)
- [認識 `<table>`, `<tr>`, 和 `<td>`](https://steam.oxxostudio.tw/category/html/tags/table-tr-td.html)
