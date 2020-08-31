import React, { useState } from 'react'
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
    /* 정확한 중앙 정렬 */
    transform: translate(-50%, 50% );


    /* 아이콘 크기 */
    font-size: 60px;
    color: white;
    border-radius: 50%;

    /* 테두리, 아웃라인 제거 */
    border: none;
    outline: none;
    /* 애니메이션 */
    transition: 0.125s all ease-in;
    /* if open === true */
    ${props => props.open && css`
    background: #ff6b6;
    &:hover {
        background: #ff8787;
    }
    &:active {
        background: #fa5252;
    }    
    transform: translate(-50%, 50% ) rotate(45deg);
    `
    }

`;

const InsertFromPositioner = styled.div`
    width: 100%;
    bottom: 0;
    left: 0;
    position: absolute;
`;

const InsertFrom = styled.div`
    background: #f8f9fa;
    padding: 32px;
    padding-bottom: 72px;
    border-bottom-left-radius: 16px;
    border-bottom-right-radius: 16px;
    border-top: 1px solid #e9ecef;
`;

const InputComponent = styled.input`
    padding: 12px;
    border-radius: 4px;
    border: 1px solid #dee2e6;
    width: 100%;
    outline: none;
    font-size: 18px;
    /* padding 영역 벗어남 방지 */
    box-sizing: border-box;
`;

function TodoCreate() {
    const [open, setOpen] = useState(false);
    const onToggle = () => setOpen(!open);

    return <>
        {open && (
            <InsertFromPositioner>
                <InsertFrom>
                    <InputComponent placeholder="할 일을 입력해주세요." autoFocus />
                </InsertFrom>
            </InsertFromPositioner>
        )}
        <CircleButton onClick={onToggle} open={open}>
            <MdAdd />
        </CircleButton>
    </>
}

export default TodoCreate
