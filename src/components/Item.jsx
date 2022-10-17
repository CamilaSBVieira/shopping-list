import '../styles/main.css';
import PropTypes from 'prop-types';
import { X, CheckSquare, Square } from 'phosphor-react';

export default function Item({ item, handleDelete, isEdit, handleCheck }) {

    return (
        <div className={item.checked ? 'bg-blue-500' : 'bg-blue-400'}>
            <div
                className={' rounded text-lg flex justify-between  cursor-pointer space-x-2 items-center w-full uppercase text-white p-3'}
            >
                {item.checked && (
                    <CheckSquare
                        className='h-12 w-12'
                        onClick={() => handleCheck(item.id)}>
                    </CheckSquare>
                ) || (
                        <Square
                            className='h-12 w-12'
                            onClick={() => handleCheck(item.id)}>
                        </Square>
                    )}
                <h2 className='w-full'
                    onClick={() => handleCheck(item.id)}>
                    {item.name}
                </h2>
                {isEdit && (
                    <X
                        onClick={() => handleDelete(item.id)}
                        className='h-10 w-10 cursor-pointer'>
                    </X>
                )}
            </div>
        </div>
    );
}


Item.propTypes = {
    item: PropTypes.object.isRequired,
    handleDelete: PropTypes.func
}