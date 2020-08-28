import React from 'react'
import styled, { css } from 'styled-components'
import { MdDone, MdDelete } from 'react-icons/md'



/* 왼쪽 체크 아이콘 소환 컴포넌트 */
const CheckCircle = styled.div`
    width: 32px;
    height: 32px;
    border-radius:16px;
    border: 1px solid #ced4da;
    font-size: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
    cursor: pointer;

    ${props => props.done && css`
        border: 1px solid #38d9a9;
        color: #38d9a9;
    `}
`;

/* 쓰레통 아이콘 소환 컴포넌트 */
const Remove = styled.div`
    /*초기 설정 0으로 안보이도록 */ 
    opacity: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #dee2e6;
    font-size: 24px;
    /* Remove에 커서 올릴 시 포인터 형태 취함 */
    cursor: pointer;
    /* Remove에 커서 올릴 시 빨강 출력 */
    &:hover {
        color: #ff6b6b;
    }

`;

/* 텍스트 컴포넌트 */
const Text = styled.div`
    flex: 1;
    font-size: 21px;
    color: #r495057;
    ${props => props.done && css`
        color: #ced4da;
    `}

`;

const TodoItemBlock = styled.div`

    display: flex;
    align-items: center;
    padding-top: 12px;
    padding-bottom: 12px;
    &:hover {
        ${Remove} {
            opacity: 1;
        }
    }
`;

function TodoItem({ id, done, text }) {
    return (
        <TodoItemBlock>
            <CheckCircle done={done}>{done && <MdDone />}</CheckCircle>
            <Text done={done}>{text}</Text>
            <Remove>
                <MdDelete />
            </Remove>
        </TodoItemBlock>
    )
}

export default TodoItem
