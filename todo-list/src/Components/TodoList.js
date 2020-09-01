import React from 'react'
import styled from 'styled-components'
import TodoItem from './TodoItem';
import { useTodoState } from '../TodoContext';

const TodoListBlock = styled.div`
    /*자신이 차지할 수 있는 영역 우선순위*/
    flex: 1;
    padding: 20px 32px;
    padding-bottom: 48px;
    /*리스트 오버시 스크롤 바*/
    overflow-y: auto;
`;

function TodoList() {
    return (
        <TodoListBlock>
            <TodoItem text="프로젝트 생성하기" done={true}></TodoItem>
            <TodoItem text="프로젝트 생성하기" done={false}></TodoItem>
            <TodoItem text="프로젝트 생성하기" done={false}></TodoItem>
            <TodoItem text="프로젝트 생성하기" done={false}></TodoItem>

        </TodoListBlock>
    )
}

export default TodoList
