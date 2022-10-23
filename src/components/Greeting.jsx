import PropTypes from 'prop-types';
import { greetingStyle } from "../styles/styleStrings";

export default function Greeting({ message }) {
    return (
        <h2 className={greetingStyle}>{message}</h2>
    )
}

Greeting.propTypes = {
    message: PropTypes.string
}