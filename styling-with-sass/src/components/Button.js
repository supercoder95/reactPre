import React, { Children } from 'react'
import './Button.scss';

function Button({ Children }) {

    return
    <button className="Button">{Children}</button>
}

export default Button;
