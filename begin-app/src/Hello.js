import React from 'react';

function Hello({ color, name, isSpecial }) {
    return (
        <div style={{
            color
        }}>
            {isSpecial && '베리베리 스페셜 '}
        안녕하세요{name}
        </div>
    );
}

Hello.defaultProps = {
    name: ' 이름이 존재하지 않습니다.'
}

export default Hello;