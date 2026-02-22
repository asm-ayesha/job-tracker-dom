## 1. What is the difference between getElementById, getElementsByClassName and querySelector / querySelectorAll?

### getElementById()
- Selects **one element** from the element’s **id** and returns a single element

### getElementsByClassName()
- Selects elements by **class name**, returns a **live HTMLCollection** and can return multiple elements

### querySelector()
- Selects the **first matching element**. When select by id use #id_name, when select by class use .id_name

### querySelectorAll()
- Selects **all matching elements** and returns a **NodeList**

## 2. How do you create and insert a new element into the DOM?

```js
const newDiv = document.createElement("div");
newDiv.textContent = "I am answering the questions.";
document.body.appendChild(newDiv);
```

## 3. What is Event Bubbling? And how does it work?

Event bubbling is when you click a child element and that event automatically moves up to its parent elements one by one.

### How does it work?
The events moves from the child -> parent -> grandparent. 

## 4. What is Event Delegation in JavaScript? Why is it useful?

Instead of adding event listeners to many child elements, you add **one event listener to the parent**.

### Why is it useful?
- Better performance
- Less code  
- Works for dynamically added elements  
- Cleaner and more scalable

## 5. What is the difference between preventDefault() and stopPropagation() methods?
### preventDefault()
Stops the browser’s default behavior.

### stopPropagation()
Stops the event from bubbling up to parent elements.
