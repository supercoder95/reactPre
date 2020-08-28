import React from 'react'
import styled, { css } from 'styled-components'
import { MdAdd } from 'react-icons/md'

const CircleButton = styled.button`
    background: #38d9a9;
    /* 마우스 오버 시 */
    &:hover {
        background: #63e6be; 
    }
    /* 클릭 시  */
    &:action {
        background: #20c997;
    }
    /* 다른 내용 가리기 */
    z-index : 5; 
    cursor: pointer;
    width: 80px; 
    height: 80px;
    display: flex;
    /* 중앙 정렬 */
    align-items: center; 
    justify-content: center;

    /* 버튼 위치 */
    position: absolute;
    left: 50%;
    bottom: 0px;
    transform: translate(-50%, 50% );


    /* 아이콘 크기 */
    font-size: 60px;
    color: white;
    border-radius: 50%;

    /* 테두리, 아웃라인 제거 */
    border: none;
    outline: none;
`;

function TodoCreate() {
    return (
        <div>

        </div>
    )
}

export default TodoCreate
