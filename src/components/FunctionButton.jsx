import PropTypes from 'prop-types';
import { Pen, Check } from 'phosphor-react'
import { iconStyle, roundedButtonStyle } from '../functions/styleStrings'

export default function FunctionButton({ handleClick, isEdit }) {
    return (
        <button
            onClick={handleClick}
            className={roundedButtonStyle}>
            {isEdit && (
                    <Check className={iconStyle} />
            ) || !isEdit && (
                <Pen className={iconStyle} />
            )}
        </button>
    )
}

FunctionButton.propTypes = {
    handleClick: PropTypes.func,
    isEdit: PropTypes.bool
}