import React from 'react'
import styled from 'styled-components'

const TodoTemplateBlock = styled.div`
    width: 512px;
    height: 768px;

     /* Todo 최하단 렌더링 시 필요한 속성 */
    position: relative;
     /* 배경색 */
    background: white;
    /* 테두리(둥굴게) */
    border-radius: 16px;
    /* 그림자 */
    box-shadow: 0 0 8px rgba(0, 0, 0, 0.04);

     /* 페이지 중앙 설정 */
    margin: 0 auto;
     /* 상단 여백 */
    margin-top: 96px;
     /* 하단 여백 */
    margin-bottom: 32px

    display: flex;
     /* 위에서 아래로 */
    flex-direction: column;

`;

function TodoTemplate({ children }) {
    return <TodoTemplateBlock>{children}</TodoTemplateBlock>
}

export default TodoTemplate
