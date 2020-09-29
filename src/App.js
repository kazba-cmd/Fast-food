import React, {useState} from 'react';
import './App.css';
import Button from './components/Button/Button';
import AddForm from './components/AddForm/AddForm';
import Sum from './components/Sum/Sum';

function App() {

  const [area, setArea] = useState(
  [
    {name: 'Hamburger', cost: 400, id: 0, counter:1},
    {name: 'Cheeseburger', cost: 500, id: 1, counter:1},
    {name: 'Chickenburger', cost: 250, id: 2, counter:1},
    {name: 'Tea', cost: 100, id: 3, counter:1},
    {name: 'Coffee', cost: 200, id: 4,counter:1},
    {name: 'MaxiTea', cost: 300, id: 5,counter:1}
  ]);

  const [items, setItems] = useState([]);

  let text = 'Order is empty! Please add some items!';
  if (items.length > 0) {
    text = '';
  }

  let sum = 0;
  items.map((item) => {
    sum += (item.cost*item.counter);
  });

  const btn = (
    <div>
      {area.map((elem, index) => {
        return (
          <Button
            name = {elem.name}
            cost = {elem.cost}
            area = {area}
            id = {elem.id}
            items = {items}
            setItems = {setItems}
            >
          </Button>
        )
      })}
    </div>
  );

  const order = (
    <div>
    {items.map((item, index) => {
      return (
        <AddForm
          item = {item.name}
          items = {items}
          setItems = {setItems}
          id = {item.id}
          cost = {item.cost}
          counter = {item.counter}
        />
      )
    })}
    </div>
  );

  return (
    <div className= 'tac'>
    <div className='App'> 
        <p>Order Details</p>
        <div className='order-css'>
          <div className='Area'>
            <p className = 'text'>{text}</p>
            {order}
          </div>
        </div>
        {btn}
    </div>
    <Sum
    sum = {sum}
    />
    </div>
  );
}

export default App;
