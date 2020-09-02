import React from 'react'
import styled from 'styled-components'
import { useTodoState } from '../TodoContext';

const TodoHeadBlock = styled.div`
    /* 스타일링 */
    padding-top: 48px;
    padding-left: 32px;
    padding-right: 32px;
    padding-bottom: 24px;
    border-bottom: 1px solid #e9ecef;

    h1 {
        margin: 0;
        font-size: 36px;
        color: #343a40;
    }

    .day {
        margin-top: 4px;
        color: #896e96;
        font-size: 21px;
    }

    .task-left {
        color: #20c997;
        font-size: 18px;
        margin-top: 40px;
        font-weight: bold;
    }
`;

function TodoHead() {
    /* 할 일 개수 구현  */
    const todos = useTodoState();
    const undonTasks = todos.filter(todo => !todo.done);

    const today = new Date();
    const dasteString = today.toLocaleDateString('ko-KR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });
    const dayName = today.toLocaleDateString('ko-KR', {
        weekday: 'long',
    });
    return (
        <TodoHeadBlock>
            <h1>{dasteString}</h1>
            <div className="day">{dayName}</div>
            <div className="task-left">할 일 {undonTasks.length}개 남음</div>
        </TodoHeadBlock>
    )
}

export default TodoHead
