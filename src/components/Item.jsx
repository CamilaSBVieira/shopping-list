import '../styles/main.css';
import { fullWidth, iconStyle, itemChecked, itemUnchecked } from '../functions/styleStrings';
import PropTypes from 'prop-types';
import { X, CheckSquare, Square } from 'phosphor-react';

export default function Item({ item, handleDelete, isEdit, handleCheck }) {

    return (
        <div className={item.checked ? itemChecked : itemUnchecked}>
                {item.checked && (
                    <CheckSquare
                        className={iconStyle}
                        onClick={() => handleCheck(item.id)}>
                    </CheckSquare>
                ) || (
                        <Square
                            className={iconStyle}
                            onClick={() => handleCheck(item.id)}>
                        </Square>
                    )}
                <h2 className={fullWidth}
                    onClick={() => handleCheck(item.id)}>
                    {item.name}
                </h2>
                {isEdit && (
                    <X
                        onClick={() => handleDelete(item.id)}
                        className={iconStyle}>
                    </X>
                )}
        </div>
    );
}


Item.propTypes = {
    item: PropTypes.object.isRequired,
    handleDelete: PropTypes.func,
    isEdit: PropTypes.bool,
    handleCheck: PropTypes.func
}