# Thinking In React #

**Start with a Mock!**

1. Break the UI into a component hierarchy  
	1. Draw boxes around every component (and subcomponent)  
	1. Give the boxes names  
	1. A component, ideally, does only one thing 
		i. If it ends up growing, it should be decomposed into smaller subcomponents

1. Build a static version in React  
	1. Builds the UI but no interactivity yet  
	1. Don’t use state.  
		i. State is reserved for interactivity  
	1. In static apps you can build top-down or bottom up  
		i. Top-Down for simple/small apps  
		ii. Bottom-Up for complex/large apps  
	1. Write tests as you build  
	1. Components will only have render() methods  
	1. Top component will take the data model (i.e. JSON result) as a prop

1. Identify the minimal (but complete) representation of UI State  
	1. Is it passed in from a parent via props? If so, it probably isn't state.  
	1. Does it remain unchanged over time? If so, it probably isn't state.  
	1. Can you compute it based on any other state or props in your component? If so, it isn't state.

1. Identify where your state should live  
	1. Pen link: https://codepen.io/gaearon/pen/qPrNQZ  
	1. For each piece of state in your application:
		1. Identify every component that renders something based on that state.
		1. Find a common owner component (a single component above all the components that need the state in the hierarchy).
		1. Either the common or another component higher up in the hierarchy should own the state
		1. If you can't find a component where it makes sense to own the state, create a new component simply for holding the state and add it somewhere in the hierarchy about the common owner component. 
1. Add inverse data flow  
	1. Pen Link: https://codepen.io/gaearon/pen/LzWZvb
		
1. ???

1. Profit!

<br />
Tutorial Link: https://reactjs.org/docs/thinking-in-react.html
