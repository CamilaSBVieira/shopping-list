import PropTypes from 'prop-types';
import { buttonStyle, formStyle, inputStyle } from '../functions/styleStrings';
import '../styles/main.css';

export default function NewItem({ item, handleChange, handleSubmit }) {

    return (
        <form
            onSubmit={handleSubmit}
            className={formStyle}        >
            <input
                name="name"
                value={item.name || ''}
                onChange={handleChange}
                placeholder='Digite um item...'
                className={inputStyle} />
            <button
                className={buttonStyle}>
                Add
            </button>
        </form>
    )
}

NewItem.propTypes = {
    item: PropTypes.object,
    handleChange: PropTypes.func,
    handleSubmit: PropTypes.func
}