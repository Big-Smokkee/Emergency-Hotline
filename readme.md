### Answer to the question No 1
### ===========================
## Difference between getElementById, getElementsByClassName, and querySelector/querySelectorAll is given below:
1. getElementById() finds one element by its id. IDs are unique, so it returns a single element.
2. getElementsByClassName() finds many elements that have the same class. It returns a HTML live collection.
3. querySelector() finds the first element that matches any CSS selector (id, class, tag, etc.).
4. querySelectorAll() finds all elements that match a CSS selector. It returns a static list.

### Answer to the question no 2
### ===========================
## The steps are given below: 
  First, create the element
# let box = document.createElement("div");
  Then, add text or attributes
# box.textContent = "Hello";
  Finally, insert it into the page
# document.body.appendChild(box);

### Answer to the question no 3
### ===========================
## Event bubbling means when an event happens on a child element, it automatically moves upwards to its parent, then to the grandparent, and so on.
  Example: After clicking a button, event goes to button then to its container then to the whole page. This bubbling beahaviour of event is known as event bubbling.

### Answer to the question no 4
### ===========================
## Event delegation means adding one event listener on a parent element instead of adding listeners to many child elements.
## Event Delegation in JavaScript is very usefull because it saves memory, Easier to manage many dynamic elements, Handy when elements are created or removed later.

### Answer to the question no 5
### ===========================
## Difference between preventDefault() and stopPropagation()
 preventDefault() stops the browser’s default action.
 Example: stopping a form from reloading the page.
 stopPropagation() stops the event from bubbling up to parent elements.