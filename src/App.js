import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const nayoks = ['Anwar', 'jafor', 'Alomgir', 'Salam', 'bappi', 'shouvo']
  const products = [
    {name: 'Photoshop', price: '$90.33'},
    {name: 'Illustraor', price: '$43.33'},
    {name: 'PDF reader', price: '$234.33' }
  ]

  const nayokNames = nayoks.map(nayok => nayok)
  console.log(nayoks);
  return (
    <div className="App">
      <header className="App-header">
      <p>I am a react person</p>
      <Counter></Counter>
      <Users></Users>
      <ul>
        {
          nayoks.map(nayok => <li>{nayok}</li>)
        }
         
         {
           products.map(product => <li>{product.name}</li>)
         }
      </ul>
      {
        products.map (product => <Product product = {product}></Product>  )
      }

   
   
      </header>
    </div>
  );
}

function Counter (){
  const [count, setCount] = useState(10);
  const handleIncrease = () =>  setCount(count + 1);
  return(
    <div>
      <h1>Count: {count}</h1>
      <button onMouseMove = {() => setCount(count-1)}>Decrease</button>
      <button onClick = {handleIncrease}>Increase</button>
    </div>
  )
}

function Users(){

  const [users, setUsers] = useState([])
  useEffect(()=>{
    
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data));
  }, [])
return (
  <div>
    <h3>dynamic User: {users.length}</h3>
    <ul>
       {
         users.map(user=> <li>{user.name}</li>)
       }
    </ul>
  </div>
)
}

function Product(props){
  const productStyle = {
    border: '1px solid gray',
    borderRadius: '5px',
    backgroundColor: 'lightgray',
    height: '200px',
    width: '200px',
    float: "left"
  }
  const {name, price} = props.product;
  console.log(name, price);

   return (
    <div style = {productStyle}>
        <h3>{name} </h3>
   <     h5>{price}</h5>
        <button>Buy now</button>
    </div>
  )
}

function Person(props){

  const personStyle = {
    border: '2px solid red',
    margin: '10px'
  }
  console.log(props)
  return (
    <div style = {personStyle} >
      <h1>Name: {props.name}</h1>
      <h3>Hero of: {props.nayika}</h3>
    </div>
  )
}
export default App;
