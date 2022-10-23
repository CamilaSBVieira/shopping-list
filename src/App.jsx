import { useEffect, useState } from 'react';
import ItemsList from './components/ItemsList'
import NewItem from './components/NewItem'
import FunctionButton from './components/FunctionButton';
import Greeting from './components/Greeting';
import './styles/main.css';
import { mainStyle } from './styles/styleStrings';

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

  const handleEraseList = () => {
    setItems([]);
  }

  // DELETE CHECKED ITEMS
  const handleDeleteCheckedItems = () => {
    setItems(items.filter(i => !i.checked));
  };

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
  }, [items]);


  // FUNCTION BUTTON
  const [isEditList, setIsEditList] = useState(false);

  const handleClickFunctionButton = () => {
    setIsEditList(curr => !curr);
  }

  return (
    <main className={mainStyle}>
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
                <Greeting message={`Oi. Hoje você precisa comprar:`}></Greeting>
              )}
            <ItemsList
              isEdit={isEditList}
              items={items}
              handleErase={handleEraseList}
              handleDelete={handleDeleteItem}
              handleCheck={handleCheckItem}
              handleDeleteChecked={handleDeleteCheckedItems}></ItemsList>
          </>
        ) || (
            <>
              {!isEditList &&
                (
                  <Greeting message={`Oi. Sua lista ainda está vazia.`}></Greeting>
                )}
            </>
          )
        }
        <FunctionButton
          handleClick={handleClickFunctionButton}
          isEdit={isEditList}></FunctionButton>
      </>
    </main >
  )
}

export default App;
