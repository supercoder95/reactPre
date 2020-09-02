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
    const todos = useTodoState();
    return (
        <TodoListBlock>
            {todos.map(
                (todo => <TodoItem
                    key={todo.id}
                    id={todo.id}
                    text={todo.text}
                    done={todo.done}
                />
                ))}
        </TodoListBlock>
    )
}

export default TodoList
