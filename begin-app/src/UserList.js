import React from 'react';

function User({ user, onRemove }) {
    const { username, email, id, active } = user;
    return (
        <div>
            <b style = {{
                color: active? 'green' : 'black',
                cursor: 'pointer'
            }}>
                {username}
            </b>
            &nbsp;
            <span>({email})</span>
            <button onClick={() => onRemove(id)}>삭제</button>
        </div>
    )
}

function UserList({ users, onRemove }) {
    return (
        <div>
            {
                users.map(
                    (user, index) => (
                        <User
                            user={user}
                            key={user.id}
                            onRemove={onRemove}
                        />)
                )
            }
        </div>
    );
}

export default UserList;