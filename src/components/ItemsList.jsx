import Item from './Item'
import PropTypes from 'prop-types'
import '../styles/main.css';
import { Trash } from 'phosphor-react'
import { iconSmallStyle, listStyle, semiBold, squareButtonStyle } from '../functions/styleStrings';

export default function ItemsList({ items, handleDelete, isEdit, handleCheck, handleErase }) {
    return (
        <>
            {isEdit && (
                <button 
                onClick={handleErase}
                className={squareButtonStyle}>
                    <p className={semiBold}>Erase List</p>
                    <Trash className={iconSmallStyle}></Trash>
                </button>
            )}
            <div className={listStyle}>
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
    items: PropTypes.array,
    handleDelete: PropTypes.func,
    isEdit: PropTypes.bool,
    handleCheck: PropTypes.func,
    handleErase: PropTypes.func
}