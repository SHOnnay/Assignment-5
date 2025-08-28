1. Getelementbyid is accessing a element by its unique id, returns a single a element. Getelementbyclassname is accessing element by its class name. returns collection. 
Queryselector is used to get css selectors. returns the first matching. Queryselectorall is also used to get css selectors. returns node list.
2. To create use document.createelement and to insert use appendchild.
3. It bubbles up a event in hierarchical order. Suppouse an event occurs on the child, it will move to parent than grandparent like this.
4. Event delegation is using event bubbling to handle events for multiple child elements by attaching one listener to a parent.
5. Preventdefault() stops the default browser action, Stoppropagation() stops bubbling to parents.
