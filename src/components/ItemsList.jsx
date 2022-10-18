import Item from './Item'
import PropTypes from 'prop-types'
import '../styles/main.css';
import { Trash } from 'phosphor-react'

export default function ItemsList({ items, handleDelete, isEdit, handleCheck, handleErase }) {
    return (
        <>
            {isEdit && (
                <button 
                onClick={handleErase}
                className="bg-blue-500 h-12 p-2 flex space-x-2 items-center text-white hover:bg-blue-400 ml-auto">
                    <p className='font-semibold'>Erase List</p>
                    <Trash className='w-8 h-8'></Trash>
                </button>
            )}
            <div className='flex-col space-y-3'>
                {items.sort((item1, item2) => (item1.checked - item2.checked || item2.name.localeCompare(item1.name)))
                .reverse()
                .map(item => {
                    return (
                        <Item
                            key={item.id}
                            item={item}
                            isEdit={isEdit}
                            handleDelete={handleDelete}
                            handleCheck={handleCheck}
                        ></Item>
                    )
                })}
            </div>
        </>
    )
}

ItemsList.propTypes = {
    name: PropTypes.string,
    items: PropTypes.array,
    handleDelete: PropTypes.func
}