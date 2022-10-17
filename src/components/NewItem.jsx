import PropTypes from 'prop-types';
import '../styles/main.css';

export default function NewItem({ item, handleChange, handleSubmit }) {

    return (
        <form
            onSubmit={handleSubmit}
            className='w-full p-4 flex'        >
            <input
                name="name"
                value={item.name || ''}
                onChange={handleChange}
                placeholder='Digite um item...'
                className='bg-white ring-2 ring-blue-400 rounded-l text-blue-500 p-3 focus:ring-blue-300 outline-0' />
            <button
                className='bg-blue-400 hover:bg-blue-300 rounded-r text-white hover:ring-blue-300 p-3 ring-2 ring-blue-400'>
                Add
            </button>
        </form>
    )
}

NewItem.propTypes = {
    // item: PropTypes.object,
    handleChange: PropTypes.func,
    handleSubmit: PropTypes.func
}