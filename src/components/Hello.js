const name = 'Amber'

// JS function expression
const displayMessage = ()=> {
  return 'I need help'
}

function Hello() {
  return <h1>Hello {name}! {10 + 20} ... The message is: {displayMessage()}</h1>
}

// JSX syntax:
// const Hello = ()=> <h1>Hello There</h1>

export default Hello;
