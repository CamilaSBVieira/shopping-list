import Item from './Item'
import PropTypes from 'prop-types'
import '../styles/main.css';

export default function ItemsList({ items, handleDelete, isEdit, handleCheck }) {
    return (
        <div className='flex-col space-y-3'>
                {items.map(item => {
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
    )
}

ItemsList.propTypes = {
    name: PropTypes.string,
    items: PropTypes.array,
    handleDelete: PropTypes.func
}