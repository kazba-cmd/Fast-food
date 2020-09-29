import React from 'react';
import './Button.css'

const Button = props => {
    const addItem = id => {
        const index = props.area.findIndex(p => p.id ===id);
        let itemsCopy = [...props.items];
        let item = props.area[index];
        if (!props.items.includes(item)) {
          itemsCopy.push(item);
          props.setItems(itemsCopy);
        }
        else {
          item.counter++;
          props.setItems(itemsCopy);
        }
      }

    return (
        <div onClick={() => {addItem(props.id)}} className='Button'>
            <div>{props.name}</div>
            <div>Price: {props.cost} KZT</div>
        </div>
    )
}

export default Button;