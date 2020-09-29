import React from 'react';
import './AddForm.css'

const AddForm = props => {

    const removeItem = id => {
        const index = props.items.findIndex(p => p.id ===id);
        const itemsCopy = [...props.items];
        let item = props.items[index];
        if (item.counter === 1) {
          itemsCopy.splice(index, 1);
          props.setItems(itemsCopy);
        }
        else {
          item.counter--;
          props.setItems(itemsCopy);
        }
    }

    return (
        <div className = 'flex'>
            <div>
            {props.item}
            </div>
            <div>
                x{props.counter}
            </div>
            <div>
            {props.cost} KZT
            </div>
            <button onClick={() => {removeItem(props.id)}}>X</button>
        </div>
    )
}

export default AddForm;