# Console

## Google Chrome

JavaScript can be executed directly inside the browser using the Chrome Developer Tools Console.

### Open Chrome Developer Tools

**Keyboard Shortcut (Windows/Linux)**

```text
Ctrl + Shift + J
```

**Keyboard Shortcut (Mac)**

```text
Cmd + Option + J
```

---

## First JavaScript Code

Copy and paste the following code into the Chrome Console:

```javascript
alert("Hello World");

let js = "amazing";

if (js === "amazing") {
  alert("JS is Fun!");
}

js = "boring";

if (js === "amazing") {
  alert("JS is Fun!");
}

40 + 10 - 20;
```

---

## What This Code Demonstrates

### 1. `alert()`

Displays a popup message in the browser.

```javascript
alert("Hello World");
```

---

### 2. Variables

A variable stores data that can be used later.

```javascript
let js = "amazing";
```

---

### 3. Conditional Statements

The `if` statement executes code only when a condition is true.

```javascript
if (js === "amazing") {
  alert("JS is Fun!");
}
```

Since `js` contains `"amazing"`, the alert is displayed.

After changing the value:

```javascript
js = "boring";
```

the condition becomes false, so the alert is not displayed.

---

### 4. Calculations

JavaScript can perform mathematical operations directly in the console.

```javascript
40 + 10 - 20;
```

**Result:**

```javascript
30;
```

---

## Notes

- The browser console is a great place to experiment with JavaScript.
- You can run JavaScript line by line and immediately see the results.
- The console is commonly used for testing, debugging, and learning JavaScript.
- This is a simple first taste of how JavaScript works.
