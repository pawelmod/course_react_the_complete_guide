# branch 01create-react-app
```bash
```

# branch 02components-basics

1. render() method

2. jsx vs html

Restrictions:
* class in HTML is className in JSX
* JSX needs to have one, single root element (after release 16 it is only a good practice)

3. transpile jsx -> js (vanilia js)

4. components
When creating components, you have the choice between two different ways:

- Functional components (also referred to as "presentational", "dumb" or "stateless" components - more about this later in the course) => const cmp = () => { return <div>some JSX</div> } (using ES6 arrow functions as shown here is recommended but optional
- Class-based components (also referred to as "containers", "smart" or "stateful" components) => class Cmp extends Component { render () { return <div>some JSX</div> } } 

We'll of course dive into the difference throughout this course, you can already note that you should use 1) as often as possible though. It's the best-practice.

5. PROPS
For functional components you can just add input parameter `props` to the function (parameter could have any name)

props.StringValue for function cmpts

or

this.props.StringValue for state cmpts.

6. props.children special prop to get node content` eg. text.

7. STATE - special class variable in the class cmpt.
you can store there objects.

8. Event from parent component to child components.
in html you have onclick but in jsx onClick (capital C)

9. this.setState method in state components to update the STATE varialbles. this.setState method is "merging" the parameters in the state object.
(not overriding but merging)

10. hooks in functional components to manage the state:
please refere to official documentation for 'useState' method.
important differenc: that aproach REPLACES the state (state in state-component merges the state)

But, you can use useState method multiple times.
So instead of heaving one huge state object, you could have multiple objectStates.

example 
```
const [componentState, setComponentState] = useState(
    {
        parameters:[
            {stringPar:'stringValueAAA' , intPar: 111},
            {stringPar:'stringValueBBB' , intPar: 222},
            {stringPar:'stringValueCCC' , intPar: 333},
        ]
      }
)
```

11. passing method reference to the child component
```
method={this.myButtonClickHandler}
```

passing method reference to the child with value - option1: binding
```
method={this.myButtonClickHandler.bind(this,5)
```

passing method reference to the child with value - option2: arrow function
```
method={() => this.myButtonClickHandler(2)}
```

12. calling the web method with parameters from child component
So we actually have the other direct binding, from child to parent component-menthod.
Method is passed as a prop. 