import React, { createContext, useContext } from 'react';

function Child({ text }) {
    return <div> 안녕하세요 {text}</div>
}

function Parent({ text }) {
    return <Child text={text} />
}

function GrandParent({ text }) {
    return <Parent text={text} />
}

function ContextSample() {
    return <GrandParent text="GOOD" />
}

export default ContextSample;