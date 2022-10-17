import { useEffect } from 'react';
import { useState } from 'react'
import ItemsList from './components/ItemsList'
import NewItem from './components/NewItem'
import './styles/main.css';
import FunctionButton from './components/FunctionButton';
import Greeting from './components/Greeting';
import User from './components/User';

function App() {
  //ITEM
  const [item, setItem] = useState({});
  const handleChangeItem = ({ target }) => {
    const { name, value } = target;
    setItem({ ...item, [name]: value, id: Date.now(), checked: false });
  };


  //ITEMS
  const [items, setItems] = useState(JSON.parse(localStorage.getItem('items')) || []);
  const handleSubmitItem = event => {
    event.preventDefault();
    if (!item.name) return;
    setItems([...items, item]);
    setItem({});
  };

  const handleDeleteItem = id => {
    setItems(items.filter(i => i.id !== id));
  };

  const handleCheckItem = (id) => {
    let newArray = items.map(i => {
      if (i.id === id) {
        return { ...i, checked: !i.checked };
      } else {
        return { ...i };
      }
    });
    setItems(newArray);
  };

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
  }, [items]);

  //NAME
  const [name, setName] = useState(localStorage.getItem('name') || '');
  const handleChangeName = ({ target }) => {
    const newName = target.value;
    setName(newName);
  };

  useEffect(() => {
    document.title = `Hi${name ? `, ${name}` : ''}`
    localStorage.setItem('name', name);
  }, [name]);

  const [isNameSubmit, setIsNameSubmit] = useState(localStorage.getItem('isNameSubmit'));
  const handleSubmitName = (event) => {
    event.preventDefault();
    if (!name) return;
    setIsNameSubmit(true);
  };

  const handleChangeSubmitName = () => {
    setIsNameSubmit(false);
  }

  useEffect(() => {
    localStorage.setItem('isNameSubmit', isNameSubmit);
  }, [isNameSubmit]);

  // FUNCTION BUTTON
  const [isEditList, setIsEditList] = useState(false);

  const handleClickFunctionButton = () => {
    setIsEditList(curr => !curr);
  }

  return (
    <main className="bg-white p-6 flex-col space-y-3">
      {!isNameSubmit && (
        <form onSubmit={handleSubmitName}>
          < input value={name}
          placeholder='Digite seu nome...'
            onChange={handleChangeName}
            className='bg-white ring-2 ring-blue-400 rounded-l text-blue-500 p-3 focus:ring-blue-300 outline-0' />
          <button
            className='bg-blue-400 hover:bg-blue-300 rounded-r text-white hover:ring-blue-300 p-3 ring-2 ring-blue-400'
          >
            Submit
          </button>
        </form>
      ) || (
          <User
          name={name}
          handleClick={handleChangeSubmitName}></User>
        )}
      {/* <p>{position.x}</p>
      <p>{position.y}</p> */}
      {name && (
        <>
          {isEditList && (
            <NewItem
              item={item}
              handleChange={handleChangeItem}
              handleSubmit={handleSubmitItem}></NewItem>
          )}
          {items.length > 0 && (
            <>
              {!isEditList &&
                (
                  <Greeting message={`Oi ${name}. Hoje você precisa comprar:`}></Greeting>
                )}
              <ItemsList
                isEdit={isEditList}
                items={items}
                handleDelete={handleDeleteItem}
                handleCheck={handleCheckItem}></ItemsList>
            </>
          ) || (
              <>
                {!isEditList &&
                  (
                    <Greeting message={`Oi, ${name}. Sua lista ainda está vazia.`}></Greeting>
                  )}
              </>
            )
          }
          <FunctionButton
            handleClick={handleClickFunctionButton}
            isEdit={isEditList}></FunctionButton>
        </>
      )}
    </main >
  )
}

export default App;
