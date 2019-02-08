	Start with a Mock!

	1. Break the UI into a component hierarchy
		a. Draw boxes around every component (and subcomponent)
		b. Give the boxes names
		c. A component, ideally, does only one thing
			i. If it ends up growing, it should be decomposed into smaller subcomponents
	2. Build a static version in React
		a. Builds the UI but no interactivity yet
		b. Don’t use state.
			i. State is reserved for interactivity
		c. In static apps you can build top-down or bottom up
			i. Top-Down for simple/small apps
			ii. Bottom-Up for complex/large apps
		d. Write tests as you build
		e. Components will only have render() methods
		f. Top component will take the data model (i.e. JSON result) as a prop
	3. Identify the minimal (but complete) representation of UI State
		a. Is it passed in from a parent via props? If so, it probably isn't state.
		b. Does it remain unchanged over time? If so, it probably isn't state.
		c. Can you compute it based on any other state or props in your component? If so, it isn't state.
	4. Identify where your state should live
		a. Pen link: https://codepen.io/gaearon/pen/qPrNQZ
		b. For each piece of state in your application:
			i. Identify every component that renders something based on that state.
			ii. Find a common owner component (a single component above all the components that need the state in the hierarchy).
			iii. Either the common or another component higher up in the hierarchy should own the state
			iv. If you can't find a component where it makes sense to own the state, create a new component simply for holding the state and add it somewhere in the hierarchy about the common owner component. 
	5. Add inverse data flow
		a. Pen Link: [PEN](https://codepen.io/gaearon/pen/LzWZvb)
		
	6. ???
	7. Profit!
	
Tutorial Link: https://reactjs.org/docs/thinking-in-react.html
