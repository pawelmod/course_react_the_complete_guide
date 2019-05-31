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

9. this.setState method in state components 

10. hooks in functional components to manage the state:
```


```