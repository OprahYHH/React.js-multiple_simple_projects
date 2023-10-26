/**
 * article: https://jschris.com/beginner-react-project-shopping-list-using-hooks
 * code: https://github.com/chrisblakely01
 */
import React, { useState } from 'react';
import { jsonData } from "../../Data/data";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft, faCircle, faCheckCircle, faPlus } from '@fortawesome/free-solid-svg-icons';

const App = () => {
  const [items, setItems] = useState([
    { name:'Vegetable',quantity: 2, isSelected: false },
    { name:'Pork',quantity: 1, isSelected: false },
    { name:'Cola',quantity: 6, isSelected: true },
    { name:'Bread',quantity: 1, isSelected: true },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [totalCount, setTotalCount] = useState(10);

  const HandleAddItem = () => {
    const newItem = {
      name: inputValue,
      quantity: 1,
      isSelected: false
    }
    const newItems = [...items,newItem];
    
    setItems(newItems);
    setInputValue('');
    CalculateTotal();
  }

  const IncreaseQuantity = (i) => {
    const newItems = [...items];
    newItems[i].quantity++;

    setItems(newItems);
    CalculateTotal();
  }

  const DecreaseQuantity = (i) => {
    const newItems = [...items];
    newItems[i].quantity--;

    setItems(newItems);
    CalculateTotal();
  }

  const HandleComplete = (i) => {
    const newItems = [...items];
    newItems[i].isSelected = !newItems[i].isSelected;
    setItems(newItems);
  }

  const CalculateTotal = () => {
    const totalNum = items.reduce((total,item) => {
      return total + item.quantity;
    },0)
    setTotalCount(totalNum);
  }

  return (
    <div className='supply-section app-background'>
      <div className='main-container'>
        <div className='add-item-box'>
          <input className='add-item-input' placeholder='Add a supply item ...' value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
          <FontAwesomeIcon icon={faPlus} onClick={() => HandleAddItem()} />
        </div>
        <div className='item-list'>
          {items.map((item,i) => (
            <div className='item-container'>
              <div className='item-name' onClick={() => HandleComplete(i)}>
                {
                  item.isSelected ? (
                    <>
                    <FontAwesomeIcon icon={faCheckCircle} />
                    <span className='completed'>{item.name}</span>
                    </>
                  ) : (
                    <>
                    <FontAwesomeIcon icon={faCircle} />
                    <span>{item.name}</span>
                    </>
                  )
                }
              </div>
              <div className='quantity'>
                <button><FontAwesomeIcon icon={faChevronLeft} onClick={() => DecreaseQuantity(i)} /></button>
                <span> {item.quantity} </span>
                <button><FontAwesomeIcon icon={faChevronRight} onClick={() => IncreaseQuantity(i)} /></button>
              </div>
            </div>
          ))}
        </div>
        <div className='total'>Total: {totalCount}</div>
      </div>
    </div>
  )
} 

export default function R009() {
    return (
      <div>
        <h3 className="center subtitle">Project: {jsonData[8].projectName}</h3>
        <App />
      </div>
    );
  }
  
  